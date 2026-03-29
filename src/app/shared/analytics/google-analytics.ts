import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import {
  DestroyRef,
  ENVIRONMENT_INITIALIZER,
  Injectable,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root',
})
class GoogleAnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly destroyRef = inject(DestroyRef);
  private initialized = false;
  private measurementId = '';

  initialize(measurementId: string): void {
    if (!measurementId || this.initialized) {
      return;
    }

    this.initialized = true;
    this.measurementId = measurementId;

    this.appendGoogleTagScript(measurementId);
    this.setupGtag(measurementId);
    this.trackInitialAndRouterPageViews();
  }

  private appendGoogleTagScript(measurementId: string): void {
    const scriptId = 'google-analytics-gtag';
    if (this.document.getElementById(scriptId)) {
      return;
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    this.document.head.appendChild(script);
  }

  private setupGtag(measurementId: string): void {
    const windowRef = this.document.defaultView;
    if (!windowRef) {
      return;
    }

    windowRef.dataLayer = windowRef.dataLayer || [];
    windowRef.gtag =
      windowRef.gtag ||
      function gtag(...args: unknown[]) {
        windowRef.dataLayer.push(args);
      };

    windowRef.gtag('js', new Date());
    windowRef.gtag('config', measurementId, { send_page_view: false });
  }

  private trackInitialAndRouterPageViews(): void {
    queueMicrotask(() => this.trackPageView());

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.trackPageView());
  }

  private trackPageView(): void {
    const windowRef = this.document.defaultView;
    if (!windowRef?.gtag) {
      return;
    }

    windowRef.gtag('event', 'page_view', {
      send_to: this.measurementId,
      page_title: this.title.getTitle(),
      page_path: this.router.url,
      page_location: windowRef.location.href,
    });
  }
}

export function provideGoogleAnalytics(measurementId: string) {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(GoogleAnalyticsService).initialize(measurementId),
    },
  ]);
}
