import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'urlf-enrollement-button-bia-google-form',
  imports: [],
  templateUrl: './enrollement-button-bia-google-form.html',
  styleUrl: './enrollement-button-bia-google-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollementButtonBiaGoogleForm {
  readonly href = input('');
  readonly label = input('申し込む');
}
