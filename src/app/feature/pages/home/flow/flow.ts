import { ChangeDetectionStrategy, Component } from '@angular/core';

type FlowStep = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

@Component({
  selector: 'urlf-flow',
  imports: [],
  templateUrl: './flow.html',
  styleUrl: './flow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Flow {
  readonly steps: ReadonlyArray<FlowStep> = [
    {
      id: '01',
      title: 'お申込み・プラン選択',
      description:
        'フォームよりご希望のプランをお知らせください。担当者よりご案内をお送りします。',
    },
    {
      id: '02',
      title: 'あらすじ作成',
      description:
        'いただいた情報をもとに、こちらで物語の下書きとなる「あらすじ案」を作成します。',
    },
    {
      id: '03',
      title: 'ヒアリング（リモート / 訪問）',
      description:
        'あらすじをもとに一回だけじっくり対話。装丁の希望もここで合意します。リモートでも、ご自宅へお伺いしての対面でもお選びいただけます。',
    },
    {
      id: '04',
      title: '執筆・原稿のお届け',
      description:
        '専属の書き手が物語を綴り、完成原稿をお届けします。修正は2回まで承ります。',
    },
    {
      id: '05',
      title: '製本仕様の確認',
      description:
        '表紙・本文用紙・タイトルなど、最終仕様を一緒に決定します。',
    },
    {
      id: '06',
      title: '製本・5冊お届け',
      description:
        '世界に一冊だけの本を、5部お手元へ。ご家族でお分けいただけます。',
    },
  ];
}
