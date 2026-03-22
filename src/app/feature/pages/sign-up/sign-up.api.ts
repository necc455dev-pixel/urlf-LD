import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export const PASSWORD_MIN_LENGTH = 12;

export type SignUpRequest = {
  readonly displayName: string;
  readonly penName: string;
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly agreeToTerms: boolean;
};

export type SignUpResponse = {
  readonly id: string;
  readonly displayName: string;
  readonly penName: string;
  readonly email: string;
  readonly bio: string;
  readonly status: 'pending_verification' | 'active';
  readonly createdAt: string;
  readonly links: {
    readonly self: string;
    readonly verifyEmail: string;
  };
};

@Injectable({ providedIn: 'root' })
export class SignUpApi {
  private readonly http = inject(HttpClient);

  createAccount(payload: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>('/api/users', payload);
  }
}
