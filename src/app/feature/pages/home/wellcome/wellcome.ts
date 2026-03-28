import { Component, OnDestroy, OnInit, output } from '@angular/core';

@Component({
  selector: 'urlf-wellcome',
  imports: [],
  templateUrl: './wellcome.html',
  styleUrl: './wellcome.scss',
})
export class Wellcome {
  readonly finished = output<void>();
  private timerId: number | null = null;

  ngOnInit(): void {
    this.timerId = window.setTimeout(() => {
      this.finished.emit();
    }, 3100);
  }

  ngOnDestroy(): void {
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
    }
  }
}
