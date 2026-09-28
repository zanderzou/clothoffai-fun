import type { ComparisonSlug, Locale } from "./locales";

export interface HomeCopy {
  metaDescription: string;
  hero: { eyebrow: string; tagline: string; description: string; primary: string; secondary: string };
  intro: { kicker: string; heading: string; lead: string; body: string };
  alternatives: {
    kicker: string; heading: string; description: string;
    cards: { title: string; description: string; uses: string[] }[];
  };
  checklist: {
    kicker: string; heading: string; description: string;
    items: { title: string; body: string }[];
  };
  comparison: {
    kicker: string; heading: string; description: string;
    columns: { option: string; fit: string; distinction: string; article: string };
    baseline: { label: string; fit: string; distinction: string };
    options: Record<ComparisonSlug, { label: string; fit: string; distinction: string; cta: string }>;
  };
  research: {
    kicker: string; heading: string; description: string;
    blocks: { heading: string; paragraphs: string[] }[];
  };
  blog: { kicker: string; heading: string; cta: string };
  faq: { kicker: string; heading: string; items: { question: string; answer: string }[] };
  final: { heading: string; description: string; cta: string };
}

// Publication gate: populate all nine language bodies before linking routes or hreflang.
export const localizedHome: Partial<Record<Locale, HomeCopy>> = {
  ja: {
    metaDescription: "ClothOff AI の検索意図と画像改変の同意・プライバシー上のリスクを整理。写真をアップロードせずに、AI着せ替え、バーチャル試着、Adobe・Canva・Photoroomの安全な用途を比較します。",
    hero: {
      eyebrow: "同意を軸にした独立情報サイト",
      tagline: "ファッション画像の編集は、本人の同意から。",
      description: "ClothOff AI という検索語に伴うリスクを知り、衣服を「消す」のではなく、見える服を着せ替える方法を選びましょう。当サイトは写真を受け付けず、画像を生成しません。",
      primary: "安全な選択肢を見る",
      secondary: "比較記事を読む",
    },
    intro: {
      kicker: "01 / 検索語の意味",
      heading: "ClothOff AI を検索する前に知っておきたいこと",
      lead: "この語は、実在人物の写真から衣服を除いたように見せる合成画像ツールと結び付けて検索されます。公開写真であっても、本人がその改変や共有に同意したことにはなりません。",
      body: "ここは運営元のサイトでも、画像を処理するサービスでもありません。ファッションの試作が目的なら、自分の写真、使用許諾のある成人モデル、マネキン、架空の人物を使い、衣服を別の衣服に置き換える方法を検討できます。どのサービスでも、アップロード後の保管、学習利用、削除方法は個別に確認してください。",
    },
    alternatives: {
      kicker: "02 / 目的に合う方法",
      heading: "見せたい服を選ぶ。人を脱がせない。",
      description: "似て見える画像編集でも、着せ替え、買い物向けの試着、商品写真の制作では評価すべき点が違います。",
      cards: [
        { title:"AI着せ替え", description:"許可を得た成人の写真で、ジャケットなど見えている服を別の服に置き換える制作方法です。", uses:["服の色・生地の検討","顔や姿勢の保持","完成画像の利用許諾"] },
        { title:"バーチャル試着", description:"商品が自分にどう見えるかを概観する方法です。画像は実際のサイズや着心地を保証しません。", uses:["商品と画像の一致","サイズ表との併用","保存・削除設定の確認"] },
        { title:"商品画像・モデル制作", description:"個人の顔が不要なら、商品写真や合成モデルから始めるとプライバシー上の負担を減らせます。", uses:["商品ディテールの正確さ","モデルの利用権","公開前の人による確認"] },
      ],
    },
    checklist: {
      kicker: "03 / 編集前の確認",
      heading: "画像を送る前の四つの確認",
      description: "「加工できるか」より先に、誰の画像を、何のために、どこへ送るかを決めます。",
      items: [
        { title:"本人または権利者の許可", body:"撮影やSNS掲載の許可は、AIによる別目的の改変許可ではありません。加工内容と公開先を明示して同意を得てください。" },
        { title:"成人のみを扱う", body:"年齢が不明な人物、子ども時代の写真、背景に他人が写る画像は使わないでください。迷うならマネキンや架空モデルを使います。" },
        { title:"保存・学習・削除の条件", body:"サービスごとにアップロードの扱いは違います。たとえば Photoroom の現行ポリシーは画像の改善・学習利用に触れており、一律に「非学習」とは言えません。" },
        { title:"完成像は見える衣服", body:"追加・変更したい服を指定し、顔、体形、背景や商品ロゴの不自然な変化を確認します。露出を推測させる目的には使いません。" },
      ],
    },
    comparison: {
      kicker:"04 / 五つの比較", heading:"ClothOff AI から考える、五つの安全な選択肢",
      description:"最初の二つは製品名ではなく制作・買い物の方法。残る三つは提供元の資料を確認できる製品です。",
      columns:{ option:"選択肢", fit:"向いている用途", distinction:"見落とせない点", article:"詳しい比較" },
      baseline:{ label:"ClothOff AI の検索課題", fit:"同意・画像プライバシー・合成画像のリスクを理解する", distinction:"当サイトに写真アップロードや衣服除去機能はありません" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"AI着せ替え", fit:"見える衣服の変更", distinction:"一社の製品名ではなく制作方法", cta:"着せ替えを比較" },
        "clothoff-ai-vs-virtual-try-on":{ label:"バーチャル試着", fit:"服の見え方を買い物前に確認", distinction:"サイズや実際のフィット感を保証しない", cta:"試着の注意点を読む" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"選択範囲を指定した画像編集", distinction:"利用規約と出力ごとの来歴情報を確認", cta:"Fireflyを比較" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"デザインの中で服や背景を変更", distinction:"元写真の権利は編集しても残る", cta:"Canvaを比較" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"商品写真とAIファッションモデル", distinction:"Webアプリと企業向け試着APIを区別", cta:"Photoroomを比較" },
      },
    },
    research: {
      kicker:"05 / 判断のための詳細", heading:"機能より先に、目的と権利を確かめる",
      description:"同じ「AI画像編集」でも、入力、完成像、公開範囲が違えばリスクも変わります。",
      blocks:[
        { heading:"検索結果の説明をそのまま信じない", paragraphs:["ClothOff AI の語を使った記事が、実際には画像を処理しない独立サイトなのか、他社のサービスなのかを確認しましょう。当サイトは安全情報と比較を提供し、写真の受付や生成はしません。","ファッションの企画なら、まず完成像を「見える衣服を着た画像」と定義します。必要な素材と許可を明らかにしてから製品を選べば、派手な機能一覧に判断を奪われません。"] },
        { heading:"試着画像は採寸の代わりではない", paragraphs:["バーチャル試着は色や雰囲気の確認に役立ちますが、Google Shopping 自身も実際のフィット感を保証しないと説明しています。サイズ表、素材、返品条件を別に確認してください。","商品画像では縫い目、柄、襟やロゴの改変を見逃さないことが重要です。生成画像がもっともらしく見えても、実物と違えば購入者に誤解を与えます。"] },
        { heading:"プライバシーはサービスごとに調べる", paragraphs:["アップロードの保管期間、学習への利用、削除、共有設定を確認しましょう。「デザインツールだから安全」「AIモデルだから個人情報は不要」という決め付けはできません。","成人本人の画像を使う場合も、加工の内容と公開先への同意が必要です。企画の初期段階では、マネキン、商品単体の写真、権利処理済みの合成モデルで足りるかを先に検討します。"] },
      ],
    },
    blog:{ kicker:"06 / 比較記事", heading:"写真を送る前に、選択肢を比較", cta:"五つの記事を見る" },
    faq:{
      kicker:"07 / よくある質問", heading:"ClothOff AI をめぐる疑問",
      items:[
        { question:"このサイトで写真から衣服を消せますか？", answer:"いいえ。写真のアップロード欄も画像生成機能もない、独立した安全情報サイトです。" },
        { question:"服装を試したい場合の代替策は？", answer:"本人の写真や利用権のある成人モデルを使ったAI着せ替え、バーチャル試着、マネキンや合成モデルでの商品表現を検討してください。" },
        { question:"SNSで公開された他人の写真なら加工してよいですか？", answer:"公開されているだけではAI改変への同意になりません。加工内容と共有範囲について、本人と権利者の明確な許可が必要です。" },
        { question:"試着画像で服のサイズを判断できますか？", answer:"見え方の参考にはなりますが、実際の着用感やサイズは保証されません。サイズ表、商品情報、返品条件を確認してください。" },
        { question:"画像編集サービスのプライバシーで何を見るべきですか？", answer:"元画像と出力の保管、モデル学習への利用、第三者との共有、削除方法、公開設定を確認してください。条件はサービスごとに異なります。" },
      ],
    },
    final:{ heading:"より良いファッション画像は同意から始まる", description:"権利を確認できる素材と、見える衣服を扱う目的を選びましょう。画像を送る前に、五つの比較で各方法の限界を確認できます。", cta:"安全な方法を比較する" },
  },
};
