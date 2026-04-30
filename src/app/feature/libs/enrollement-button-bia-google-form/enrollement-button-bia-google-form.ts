import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'urlf-enrollement-button-bia-google-form',
  imports: [RouterLink],
  templateUrl: './enrollement-button-bia-google-form.html',
  styleUrl: './enrollement-button-bia-google-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollementButtonBiaGoogleForm {
  readonly label = input('申し込む');
}
