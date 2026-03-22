import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from './shared/ui/breadcrumbs/breadcrumbs';
import { LibsModule } from "./feature/libs/libs";
import { SideNavItem } from './feature/libs/side-nav/side-nav';

@Component({
  selector: 'urlf-root',
  imports: [RouterOutlet, Breadcrumbs, LibsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly isSideNavOpen = signal(false);
  protected readonly navItems: readonly SideNavItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Login', href: '/login' },
    { label: 'Sign up', href: '/sign-up' },
  ];

  protected openSideNav(): void {
    this.isSideNavOpen.set(true);
  }

  protected closeSideNav(): void {
    this.isSideNavOpen.set(false);
  }
}
