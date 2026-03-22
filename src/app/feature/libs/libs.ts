import { NgModule } from '@angular/core';

import { Bento } from './bento/bento';
import { Enrollment } from './forms/enrollment/enrollment';
import { Login } from './forms/login/login';
import { SignUp } from './forms/sign-up/sign-up';
import { Input } from './input/input';
import { Prose } from './prose/prose';
import { SideNav } from './side-nav/side-nav';
import { TextAria } from './text-aria/text-aria';

const LIB_COMPONENTS = [Bento, Enrollment, Login, SignUp, Input, Prose, SideNav, TextAria] as const;

@NgModule({
  imports: [...LIB_COMPONENTS],
  exports: [...LIB_COMPONENTS],
})
export class LibsModule {}

export { Bento } from './bento/bento';
export { Enrollment } from './forms/enrollment/enrollment';
export { Login } from './forms/login/login';
export { SignUp } from './forms/sign-up/sign-up';
export { Input } from './input/input';
export { Prose } from './prose/prose';
export { SideNav } from './side-nav/side-nav';
export { TextAria } from './text-aria/text-aria';
