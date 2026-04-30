import { ChangeDetectionStrategy, Component } from '@angular/core';

type Plan = {
  readonly id: 'message' | 'short' | 'long';
  readonly nameJa: string;
  readonly nameEn: string;
  readonly priceLabel: string;
  readonly volumeLabel: string;
  readonly description: string;
  readonly forWhom: string;
  readonly featured?: boolean;
};

@Component({
  selector: 'urlf-contents',
  imports: [],
  templateUrl: './contents.html',
  styleUrl: './contents.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contents {
  readonly plans: ReadonlyArray<Plan> = [
    {
      id: 'message',
      nameJa: 'メッセージ',
      nameEn: 'MESSAGE',
      priceLabel: '80,000',
      volumeLabel: '〜 約10,000文字',
      description:
        '一つひとつのフレーズに余白を持たせ、読み手に豊かな解釈の余地を残します。多くを語らないからこそ、行間に滲む想いが受け取り手の心へ長く残ります。',
      forWhom:
        '伝えたい言葉は限られているけれど、その奥にある気持ちを大切に届けたい方へ。',
    },
    {
      id: 'short',
      nameJa: '短　編',
      nameEn: 'SHORT STORY',
      priceLabel: '80,000',
      volumeLabel: '10,000 〜 20,000文字',
      description:
        '登場人物は1〜6人。読み手が手に取りやすく、あなたの物語を簡潔に、けれど確かな厚みをもって伝えます。',
      forWhom:
        'ご家族やご友人など、限られた人物との大切な物語を残したい方へ。',
      featured: true,
    },
    {
      id: 'long',
      nameJa: '長　編',
      nameEn: 'LONG STORY',
      priceLabel: '120,000',
      volumeLabel: '20,000 〜 100,000文字',
      description:
        '細かい描写とダイナミックな文章構成で、あなたの物語を余すことなく伝えます。歩んでこられた日々を、本格的な小説作品として綴ります。',
      forWhom:
        '自分史として人生の節目を残したい方、ご家族へ長く読み継がれる一冊として遺したい方へ。',
    },
  ];
}
