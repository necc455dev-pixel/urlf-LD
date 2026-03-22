import { Component, output } from '@angular/core';

@Component({
  selector: 'urlf-bento',
  imports: [],
  templateUrl: './bento.html',
  styleUrl: './bento.scss',
})
export class Bento {
  readonly pressed = output<void>();

  protected onPress(): void {
    this.pressed.emit();
  }
}
