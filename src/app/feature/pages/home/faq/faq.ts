import { ChangeDetectionStrategy, Component } from '@angular/core';

type FaqItem = {
  readonly id: number;
  readonly question: string;
  readonly answer: string;
};

@Component({
  selector: 'urlf-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  readonly items: ReadonlyArray<FaqItem> = [
    {
      id: 1,
      question: '話すのが苦手でも依頼できますか？',
      answer:
        '事前にこちらで「あらすじ案」をお作りしますので、ゼロから語っていただく必要はありません。あらすじを見ながら、思い出が浮かんだ順にお話しください。',
    },
    {
      id: 2,
      question: '故人の人生を本にすることはできますか？',
      answer:
        'ご家族やゆかりのある方からお話を伺い、物語を紡ぎます。遺品や日記、お写真などをご提供いただけると、より深い一冊になります。',
    },
    {
      id: 3,
      question: '完成した原稿は修正できますか？',
      answer:
        '原稿確認後、内容のご相談を承ります。表現や事実関係の調整は、ご納得いただけるまで丁寧に対応いたします。',
    },
    {
      id: 4,
      question: 'ヒアリングは対面でお願いできますか？',
      answer:
        'はい、ご自宅や近隣のカフェなどへお伺いしての対面ヒアリングも承っております。ご都合に合わせてリモートとお選びいただけます。',
    },
  ];
}
