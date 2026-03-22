import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';
import { type SignUpRequest, type SignUpResponse } from '../../../app/feature/pages/sign-up/sign-up.api';

type MockError = {
  readonly field?: string;
  readonly message: string;
};

const MOCK_LATENCY_MS = 350;
const usersById = new Map<string, SignUpResponse>();
const userIdsByEmail = new Map<string, string>();

let nextSequence = 1;

export const signUpMockInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const url = new URL(request.url, 'http://localhost');

  if (request.method === 'POST' && url.pathname === '/api/users') {
    return handleCreateUser(request);
  }

  const getUserMatch = url.pathname.match(/^\/api\/users\/([^/]+)$/);

  if (request.method === 'GET' && getUserMatch) {
    return handleGetUser(getUserMatch[1]);
  }

  return next(request);
};

function handleCreateUser(request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
  const body = request.body;
  const validationErrors = validateCreateUserRequest(body);

  if (validationErrors.length > 0) {
    return failRequest(422, 'Validation failed.', validationErrors);
  }

  const payload = body as SignUpRequest;
  const normalizedEmail = normalizeEmail(payload.email);

  if (userIdsByEmail.has(normalizedEmail)) {
    return failRequest(409, 'An account with this email already exists.', [
      { field: 'email', message: 'Email address is already registered.' },
    ]);
  }

  const user = buildUserResource(payload, normalizedEmail);

  usersById.set(user.id, user);
  userIdsByEmail.set(normalizedEmail, user.id);

  return of(
    new HttpResponse<SignUpResponse>({
      status: 201,
      body: user,
      headers: new HttpHeaders({ Location: user.links.self }),
    }),
  ).pipe(delay(MOCK_LATENCY_MS));
}

function handleGetUser(userId: string): Observable<HttpEvent<unknown>> {
  const user = usersById.get(decodeURIComponent(userId));

  if (!user) {
    return failRequest(404, 'User not found.');
  }

  return of(new HttpResponse<SignUpResponse>({ status: 200, body: user })).pipe(delay(MOCK_LATENCY_MS));
}

function validateCreateUserRequest(body: unknown): MockError[] {
  if (!body || typeof body !== 'object') {
    return [{ message: 'Request body must be a JSON object.' }];
  }

  const payload = body as Partial<SignUpRequest>;
  const errors: MockError[] = [];

  if (!payload.displayName?.trim()) {
    errors.push({ field: 'displayName', message: 'Display name is required.' });
  }

  if (!payload.penName?.trim()) {
    errors.push({ field: 'penName', message: 'Pen name is required.' });
  }

  if (!payload.email?.trim()) {
    errors.push({ field: 'email', message: 'Email is required.' });
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push({ field: 'email', message: 'Email format is invalid.' });
  }

  if (!payload.password || payload.password.length < 12) {
    errors.push({ field: 'password', message: 'Password must be at least 12 characters.' });
  }

  if (typeof payload.bio === 'string' && payload.bio.length > 280) {
    errors.push({ field: 'bio', message: 'Bio must be 280 characters or fewer.' });
  }

  if (payload.agreeToTerms !== true) {
    errors.push({ field: 'agreeToTerms', message: 'Terms must be accepted.' });
  }

  return errors;
}

function buildUserResource(payload: SignUpRequest, normalizedEmail: string): SignUpResponse {
  const id = `usr_mock_${String(nextSequence).padStart(4, '0')}`;
  nextSequence += 1;

  return {
    id,
    displayName: payload.displayName.trim(),
    penName: payload.penName.trim(),
    email: normalizedEmail,
    bio: payload.bio.trim(),
    status: 'pending_verification',
    createdAt: new Date().toISOString(),
    links: {
      self: `/api/users/${id}`,
      verifyEmail: `/api/users/${id}/email-verification`,
    },
  };
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function failRequest(status: number, message: string, errors?: readonly MockError[]): Observable<never> {
  return throwError(
    () =>
      new HttpErrorResponse({
        status,
        error: {
          message,
          errors,
        },
      }),
  ).pipe(delay(MOCK_LATENCY_MS));
}
