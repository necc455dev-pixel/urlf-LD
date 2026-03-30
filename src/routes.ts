import { Routes } from '@angular/router';

import { Home } from './app/feature/pages/home/home';
import { Login } from './app/feature/pages/login/login';
import { Mypage } from './app/feature/pages/mypage/mypage';
import { SignUp } from './app/feature/pages/sign-up/sign-up';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'mypage', component: Mypage, title: 'My page' },
  { path: 'sign-up', component: SignUp, title: 'Sign up' },
];
