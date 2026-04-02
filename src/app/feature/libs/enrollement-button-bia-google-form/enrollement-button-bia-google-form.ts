import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TermsAgreementService } from '../../../shared/terms/terms-agreement.service';

@Component({
  selector: 'urlf-enrollement-button-bia-google-form',
  imports: [RouterLink],
  templateUrl: './enrollement-button-bia-google-form.html',
  styleUrl: './enrollement-button-bia-google-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollementButtonBiaGoogleForm {
  private readonly termsAgreementService = inject(TermsAgreementService);

  readonly href = input('');
  readonly label = input('申し込む');
  protected readonly termsAccepted = this.termsAgreementService.accepted;
  protected readonly hasExternalForm = computed(() => !!this.href());
}
