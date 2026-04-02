import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  protected readonly enrollmentFormUrl = GOOGLE_FORM_ENROLLMENT_URL;
  protected readonly reachedEnd = signal(false);
  protected readonly canProceed = computed(() => this.reachedEnd() && !!this.enrollmentFormUrl);

  protected onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const threshold = 24;
    const reachedBottom =
      element.scrollTop + element.clientHeight >= element.scrollHeight - threshold;

    if (reachedBottom) {
      this.reachedEnd.set(true);
    }
  }

  protected acceptTerms(): void {
    if (!this.canProceed()) {
      return;
    }

    this.termsAgreementService.accept();
    window.open(this.enrollmentFormUrl, '_blank', 'noopener,noreferrer');
  }
}
