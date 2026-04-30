import { ChangeDetectionStrategy, Component } from '@angular/core';

type Step = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

@Component({
  selector: 'urlf-introductions',
  imports: [],
  templateUrl: './introductions.html',
  styleUrl: './introductions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Introductions {
  readonly steps: ReadonlyArray<Step> = [
    {
      id: '01',
      title: '聴く',
      description: '専属の書き手が、ご本人や周りの方からじっくりとお話を伺います。',
    },
    {
      id: '02',
      title: '綴る',
      description: '想いの温度を損なわぬよう、一文ずつ丁寧に物語を紡ぎます。',
    },
    {
      id: '03',
      title: '届ける',
      description: '読み返すたび、心がほどけるような一冊をお手元へ。',
    },
  ];
}
