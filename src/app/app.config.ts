import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { signUpMockInterceptor } from '../mock/feature/sign-up/sign-up.mock';
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from './shared/analytics/google-analytics.config';
import { provideGoogleAnalytics } from './shared/analytics/google-analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([signUpMockInterceptor])),
    provideRouter(routes),
    provideGoogleAnalytics(GOOGLE_ANALYTICS_MEASUREMENT_ID),
  ]
};
