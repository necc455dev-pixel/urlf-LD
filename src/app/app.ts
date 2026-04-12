import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  SideNav, Bento } from './feature/libs/libs';
import { SideNavItem } from './feature/libs/side-nav/side-nav';
import { Breadcrumbs } from './shared/ui/breadcrumbs/breadcrumbs';
import { EnrollementButtonBiaGoogleForm } from "./feature/libs/enrollement-button-bia-google-form/enrollement-button-bia-google-form";

@Component({
  selector: 'urlf-root',
  imports: [RouterOutlet, Breadcrumbs, SideNav, Bento, EnrollementButtonBiaGoogleForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly isSideNavOpen = signal(false);
  protected readonly navItems: readonly SideNavItem[] = [
    { label: 'ホーム', href: '/home' },
    { label: '申込み', href: '/terms' },
    // { label: 'Login', href: '/login' },
    // { label: 'My page', href: '/mypage' },
    // { label: 'Sign up', href: '/sign-up' },
    { label: '利用規約', href: '/terms' },
  ];

  protected openSideNav(): void {
    this.isSideNavOpen.set(true);
  }

  protected closeSideNav(): void {
    this.isSideNavOpen.set(false);
  }
}
