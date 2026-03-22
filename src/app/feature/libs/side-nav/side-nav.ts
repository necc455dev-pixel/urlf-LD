import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export type SideNavItem = {
  readonly label: string;
  readonly href: string;
};

@Component({
  selector: 'urlf-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNav {
  readonly opened = input(false);
  readonly title = input('Menu');
  readonly items = input<readonly SideNavItem[]>([]);
  readonly closed = output<void>();

  protected close(): void {
    this.closed.emit();
  }
}
