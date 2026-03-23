import { Routes } from '@angular/router';

import { Home } from './app/feature/pages/home/home';
import { Login } from './app/feature/pages/login/login';
import { SignUp } from './app/feature/pages/sign-up/sign-up';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'sign-up', component: SignUp, title: 'Sign up' },
];
