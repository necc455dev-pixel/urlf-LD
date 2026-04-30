import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TERMS_PAGE_COPY, TERMS_SECTIONS } from '../../../../constants/terms';
import { GOOGLE_FORM_ENROLLMENT_URL } from '../../../shared/external-links';
import { TermsAgreementService } from '../../../shared/terms/terms-agreement.service';

@Component({
  selector: 'urlf-terms',
  imports: [RouterLink],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Terms {
  private readonly termsAgreementService = inject(TermsAgreementService);

  protected readonly copy = TERMS_PAGE_COPY;
  protected readonly sections = TERMS_SECTIONS;
  protected readonly enrollmentFormUrl = GOOGLE_FORM_ENROLLMENT_URL;
  protected readonly agreedToTerms = signal(false);
  protected readonly canProceed = computed(() => this.agreedToTerms());

  protected updateAgreement(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.agreedToTerms.set(input.checked);
  }

  protected acceptTerms(): void {
    if (!this.canProceed()) {
      return;
    }

    this.termsAgreementService.accept();

    if (this.enrollmentFormUrl) {
      window.open(this.enrollmentFormUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
