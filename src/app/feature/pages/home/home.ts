import { Component, signal } from '@angular/core';
import { Bento } from '../../libs/bento/bento';
import { Prose } from '../../libs/prose/prose';
import { SideNav, type SideNavItem } from '../../libs/side-nav/side-nav';
import { Introductions } from './introductions/introductions';
import { Showcase } from './showcase/showcase';
import { Top } from './top/top';

@Component({
  selector: 'urlf-home',
  imports: [Prose,Top, Introductions, Showcase],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
