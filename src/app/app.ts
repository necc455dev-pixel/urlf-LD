import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Breadcrumbs } from './shared/ui/breadcrumbs/breadcrumbs';
import { LibsModule } from "./feature/libs/libs";
import { SideNavItem } from './feature/libs/side-nav/side-nav';
import { GOOGLE_FORM_ENROLLMENT_URL } from './shared/external-links';

@Component({
  selector: 'urlf-root',
  imports: [RouterOutlet, RouterLink, Breadcrumbs, LibsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly isSideNavOpen = signal(false);
  protected readonly enrollmentFormUrl = GOOGLE_FORM_ENROLLMENT_URL;
  protected readonly navItems: readonly SideNavItem[] = [
    { label: '§トップページ', href: '/home' },
    { label: '§ログイン', href: '/login' },
    { label: '§マイページ', href: '/mypage' },
    { label: '§登録', href: '/sign-up' },
    { label: '§お申込み', href: '/sign-up' },
  ];

  protected openSideNav(): void {
    this.isSideNavOpen.set(true);
  }

  protected closeSideNav(): void {
    this.isSideNavOpen.set(false);
  }
}
