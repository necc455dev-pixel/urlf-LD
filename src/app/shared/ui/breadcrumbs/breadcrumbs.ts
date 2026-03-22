import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs';

type BreadcrumbItem = {
  readonly label: string;
  readonly url: string;
};

@Component({
  selector: 'urlf-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumbs {
  private readonly router = inject(Router);

  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
    { initialValue: null },
  );

  protected readonly items = computed(() => {
    this.navigationEnd();
    return this.buildBreadcrumbs(this.router.routerState.snapshot.root);
  });

  private buildBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url = '',
    breadcrumbs: BreadcrumbItem[] = [],
  ): BreadcrumbItem[] {
    const primaryChild = route.children.find((child) => child.outlet === PRIMARY_OUTLET);

    if (!primaryChild) {
      return breadcrumbs;
    }

    const routeUrl = primaryChild.url.map((segment) => segment.path).join('/');
    const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
    const label = primaryChild.title;

    const nextBreadcrumbs = label
      ? [...breadcrumbs, { label, url: nextUrl || '/' }]
      : breadcrumbs;

    return this.buildBreadcrumbs(primaryChild, nextUrl, nextBreadcrumbs);
  }
}
