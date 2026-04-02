import { Injectable, signal } from '@angular/core';

const TERMS_ACCEPTED_STORAGE_KEY = 'urlf.terms.accepted';

@Injectable({
  providedIn: 'root',
})
export class TermsAgreementService {
  readonly accepted = signal(this.readInitialValue());

  accept(): void {
    localStorage.setItem(TERMS_ACCEPTED_STORAGE_KEY, 'true');
    this.accepted.set(true);
  }

  private readInitialValue(): boolean {
    return localStorage.getItem(TERMS_ACCEPTED_STORAGE_KEY) === 'true';
  }
}
