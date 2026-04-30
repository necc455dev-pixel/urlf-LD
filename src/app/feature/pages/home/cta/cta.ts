import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EnrollementButtonBiaGoogleForm } from '../../../libs/enrollement-button-bia-google-form/enrollement-button-bia-google-form';

@Component({
  selector: 'urlf-cta',
  imports: [EnrollementButtonBiaGoogleForm],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {}
