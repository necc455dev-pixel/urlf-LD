import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from './shared/ui/breadcrumbs/breadcrumbs';

@Component({
  selector: 'urlf-root',
  imports: [RouterOutlet, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
