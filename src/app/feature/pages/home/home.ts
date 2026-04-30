import { Component, signal } from '@angular/core';
import { Cta } from './cta/cta';
import { Faq } from './faq/faq';
import { Flow } from './flow/flow';
import { Introductions } from './introductions/introductions';
import { Showcase } from './showcase/showcase';
import { Top } from './top/top';
import { Voice } from './voice/voice';
import { Wellcome } from './wellcome/wellcome';

@Component({
  selector: 'urlf-home',
  imports: [Top, Introductions, Showcase, Flow, Voice, Faq, Cta, Wellcome],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly showWellcome = signal(true);

  protected finishWellcome(): void {
    this.showWellcome.set(false);
  }
}
