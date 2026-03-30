import { Routes } from '@angular/router';

import { Home } from './app/feature/pages/home/home';
import { Login } from './app/feature/pages/login/login';
import { Mypage } from './app/feature/pages/mypage/mypage';
import { SignUp } from './app/feature/pages/sign-up/sign-up';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'トップ' },
  { path: 'login', component: Login, title: 'ログイン' },
  { path: 'mypage', component: Mypage, title: 'マイページ' },
  { path: 'sign-up', component: SignUp, title: '申し込み' },
];
