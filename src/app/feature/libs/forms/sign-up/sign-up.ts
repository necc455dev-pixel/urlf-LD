import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import {
  PASSWORD_MIN_LENGTH,
  SignUpApi,
  type SignUpResponse,
} from '../../../pages/sign-up/sign-up.api';

type SignUpFormGroup = {
  readonly displayName: FormControl<string>;
  readonly penName: FormControl<string>;
  readonly email: FormControl<string>;
  readonly password: FormControl<string>;
  readonly confirmPassword: FormControl<string>;
  readonly bio: FormControl<string>;
  readonly agreeToTerms: FormControl<boolean>;
};

@Component({
  selector: 'urlf-sign-up-form',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpForm {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly signUpApi = inject(SignUpApi);
  private readonly matchPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  protected readonly passwordMinLength = PASSWORD_MIN_LENGTH;
  protected readonly isSubmitting = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly createdAccount = signal<SignUpResponse | null>(null);

  protected readonly form = this.formBuilder.group<SignUpFormGroup>(
    {
      displayName: this.formBuilder.control('', [Validators.required, Validators.maxLength(40)]),
      penName: this.formBuilder.control('', [Validators.required, Validators.maxLength(40)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(PASSWORD_MIN_LENGTH)]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
      bio: this.formBuilder.control('', [Validators.maxLength(280)]),
      agreeToTerms: this.formBuilder.control(false, [Validators.requiredTrue]),
    },
    { validators: [this.matchPasswords] },
  );

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    this.createdAccount.set(null);

    const { confirmPassword, ...payload } = this.form.getRawValue();
    void confirmPassword;

    this.signUpApi
      .createAccount(payload)
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe({
        next: (response) => {
          this.createdAccount.set(response);
          this.form.reset({
            displayName: '',
            penName: '',
            email: '',
            password: '',
            confirmPassword: '',
            bio: '',
            agreeToTerms: false,
          });
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage.set(
            error.error?.message ?? 'We could not create your account right now. Please try again.',
          );
        },
      });
  }

  protected showError(controlName: keyof SignUpFormGroup): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected passwordMismatch(): boolean {
    return this.form.hasError('passwordMismatch') && this.showError('confirmPassword');
  }
}
