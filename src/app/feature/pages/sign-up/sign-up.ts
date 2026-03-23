import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignUpForm } from '../../libs/forms/sign-up/sign-up';

@Component({
  selector: 'urlf-sign-up-page',
  imports: [RouterLink, SignUpForm],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
}
