import type { ComparisonSlug, Locale } from "./locales";

export interface LocalizedArticle {
  title: string;
  description: string;
  intro: string;
  dimensions: [string, string, string][];
  sections: [string, string][];
  verdict: string;
}

export const comparisonSources: Record<ComparisonSlug, { name: string; url: string }[]> = {
  "clothoff-ai-vs-ai-outfit-changer": [
    { name: "Adobe Firefly · Generative Fill", url: "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/modify-generated-images.html" },
    { name: "Canva · Photo editor and Magic Edit", url: "https://www.canva.com/photo-editor/" },
    { name: "NIST · Privacy Framework", url: "https://www.nist.gov/privacy-framework" },
  ],
  "clothoff-ai-vs-virtual-try-on": [
    { name: "Google Shopping · Virtual try-on", url: "https://support.google.com/googleshopping/answer/16253678?hl=en-GB" },
    { name: "Photoroom · Virtual Try-On", url: "https://www.photoroom.com/tools/virtual-try-on" },
  ],
  "clothoff-ai-vs-adobe-firefly": [
    { name: "Adobe · Generative Fill", url: "https://helpx.adobe.com/firefly/web/work-with-images/generate-images/modify-generated-images.html" },
    { name: "Adobe · Generative AI user guidelines", url: "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html" },
    { name: "Adobe · Content Credentials overview", url: "https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/content-credentials-overview.html" },
    { name: "Adobe · Generative credits", url: "https://helpx.adobe.com/creative-cloud/apps/generative-ai/creative-cloud-generative-ai-features.html" },
  ],
  "clothoff-ai-vs-canva-magic-edit": [
    { name: "Canva · Photo editor and Magic Edit", url: "https://www.canva.com/photo-editor/" },
    { name: "Canva · Selling AI-generated designs", url: "https://www.canva.com/help/using-canva-to-create-products-for-sale/" },
    { name: "Canva · Privacy overview", url: "https://www.canva.com/trust/privacy/" },
  ],
  "clothoff-ai-vs-photoroom": [
    { name: "Photoroom · Virtual Try-On", url: "https://www.photoroom.com/tools/virtual-try-on" },
    { name: "Photoroom · AI Fashion Models", url: "https://help.photoroom.com/en/articles/12891197-show-clothing-on-ai-fashion-models-web-app" },
    { name: "Photoroom · Privacy policy", url: "https://www.photoroom.com/legal/privacy" },
    { name: "Photoroom · Image-training help", url: "https://help.photoroom.com/en/articles/10067660-does-the-ai-learn-from-your-images" },
  ],
};

// Editorial drafts only. The whole 9 × 5 set must be complete and validated
// before creating locale routes or reciprocal hreflang.
export const localizedArticles: Partial<Record<Locale, Record<ComparisonSlug, LocalizedArticle>>> = {
  ja: {
    "clothoff-ai-vs-ai-outfit-changer": {
      title: "ClothOff AI と AI着せ替え：服を消さずに着替える方法",
      description: "ClothOff AI の検索意図と AI着せ替えを比較。見える衣服の差し替え、本人の同意、画像の権利、仕上がりと保存条件を確認します。",
      intro: "AI着せ替えは特定企業の名前ではなく、写真で見えている服を別の服に置き換える作業の総称です。ClothOff AI を検索していても、本来したいことがジャケットや衣装の検討なら、衣服を除去する合成画像ではなく、許可を得た写真による着せ替えの方が目的に合います。当サイトは画像を受け取らず、編集機能も提供しません。",
      dimensions: [
        ["目的", "合成的な露出を求める検索。実在人物の写真では避ける", "見える服を別の服へ置き換える"],
        ["入力", "第三者の肖像を使えば深刻な同意・権利侵害", "本人の写真、許諾済みの成人モデル、マネキン"],
        ["成果の評価", "刺激的な見た目は服の正確さを示さない", "生地、縫い目、顔や背景の安定、用途に合う書き出し"],
        ["費用とデータ", "不明な提供元へのアップロードは避ける", "選んだ編集サービス固有の料金・保存・学習条件を読む"],
      ],
      sections: [
        ["比較対象を取り違えない", "着せ替えには、選択した範囲に衣服を追加・置換できる編集製品などを利用できます。Adobe Firefly と Canva Magic Edit の公式資料も画像要素の追加や置き換えを説明しますが、両社の権利条件や操作、料金が同じという意味ではありません。「AI着せ替え」という語だけで、特定の安全性や機能を保証することはできません。"],
        ["具体的な制作指示を考える", "最初に、残す人物と背景、変えたい衣服の形・色・素材を決めます。たとえば許可済みの成人モデルの上着を別の上着にするという、目に見える変更を指定します。顔、体型、手、ロゴ、背景が意図せず変わった結果は採用しません。商品ページなら襟や柄を作り替えた画像を実物の証拠として使わず、実写へ戻す判断も必要です。"],
        ["同意と写真の権利", "SNSで公開された写真は、あらゆる AI 加工の許可ではありません。撮影者の利用許諾と被写体本人の、どんな加工をどこへ掲載するかについての同意を分けて確認します。企画段階なら顔のないマネキンや商品単体の写真で足りる場合があります。実在人物の写真を送る前には、保存期間、学習利用、削除手順を各製品の現行資料で調べてください。"],
        ["比較可能な小テスト", "権利が明確な一枚の写真と一着の服を決め、同じ条件で三回試す方法が有効です。衣服の再現、人物の保持、背景の崩れ、修正回数、必要時間を記録し、失敗時にもクレジットが消費されるかを調べます。これは読者が実施できる評価方法であり、当サイトが各製品を実測した結果ではありません。"],
      ],
      verdict: "見える衣服を変更する制作なら、同意を得た成人画像を用いる着せ替え作業を選びます。利点は目的を明確に検証できること、弱点は細部の破綻や提供元ごとに違うデータ条件です。ClothOff AI という検索語を、実在人物の衣服を消す依頼へ変換する理由はありません。",
    },
    "clothoff-ai-vs-virtual-try-on": {
      title: "ClothOff AI とバーチャル試着：買い物に必要な比較は何か",
      description: "ClothOff AI とバーチャル試着の違いを、服の見え方、実際のサイズの限界、写真の同意、対応地域や削除設定で整理します。",
      intro: "バーチャル試着は、服を買う前に商品が自分や許可されたモデルにどう見えるかを確認する作業カテゴリーです。誰かの衣服を消す加工とは目的が異なります。ClothOff AI の検索から来た人が欲しいのが服の着用イメージなら、比較すべきは商品の忠実さ、写真の扱い、サイズ判断の限界です。",
      dimensions: [
        ["中心となるもの", "推測された人体や露出", "実在する商品と、着衣の見え方"],
        ["写真の条件", "実在人物の無断改変は避ける", "自分の写真か、具体的な許可を得た成人画像"],
        ["使える判断", "買い物の精度を測れない", "色やシルエットの参考。実寸は別途確認"],
        ["提供形態", "不明なサービスを一括評価しない", "消費者向け機能と小売業者向け API を区別する"],
      ],
      sections: [
        ["一つのアプリではない", "Google Shopping は対象商品と地域で利用できる試着機能を案内し、Photoroom は小売業者が組み込む企業向け Virtual Try-On を紹介しています。実装、対象品目、写真の保管方法は同一ではありません。まず自分が個人の買い物客か、店舗の担当者かを区別し、その立場で使える現行機能を確認します。"],
        ["見た目とサイズを分ける", "試着画像から色や全体の印象をつかめても、着心地や実際のサイズは確定できません。Google Shopping 自身も生成した試着画像は近似で、フィットを保証しないと説明します。購入時にはサイズ表、寸法、素材、レビュー、返品条件を合わせて読みます。袖丈、柄、留め具、重ね着の表現が崩れていないかも目視で確かめてください。"],
        ["自撮り写真の扱い", "自分で撮った明らかに成人の写真、または対象の加工について許諾を得た画像を使います。Google の削除機能に関する説明は Google の特定サービスについてのもので、ほかの提供元へ一般化できません。写真が保存されるか、モデル学習に利用されるか、結果が公開されるかを利用先ごとに確認します。小売店が API を埋め込むなら、その店舗の説明責任も残ります。"],
        ["購入のための比較方法", "権利のある商品画像と自分または許諾済みモデルの画像で一着を試し、首元、模様、ロゴ、丈、姿勢ごとの変化を比べます。二つ目の姿勢でも同じ服に見えるか、入力削除の方法、処理時間、再試行費用を記録します。人体を露出させる結果を対照実験に使っても、商品の忠実さやサイズは検証できません。"],
      ],
      verdict: "買い物のためには、対象商品を着た状態の画像を確認できる試着作業が適しています。ただし見た目の参考と実寸は別物で、提供地域や写真処理にも差があります。ClothOff AI に関連する無断の露出加工は、この買い物の問いに答えません。",
    },
    "clothoff-ai-vs-adobe-firefly": {
      title: "ClothOff AI と Adobe Firefly：編集範囲、同意、出所の確認",
      description: "ClothOff AI の検索意図と Adobe Firefly を比較。選択範囲の生成編集、利用規則、Content Credentials の限界、クレジットを確認します。",
      intro: "ClothOff AI は当サイトが安全上の観点から説明する検索語で、ここに画像処理機能はありません。Adobe Firefly は別の製品で、選択した範囲に画像要素を追加・置き換える作業を公式資料で案内しています。許諾済みのファッション写真なら、服や背景を見える形で変える制作が比較の対象です。",
      dimensions: [
        ["扱う目的", "衣服を消したような合成画像は扱わない", "見える服や背景など選択範囲の編集"],
        ["権利と規則", "公の肖像でも自由な改変は不可", "Adobe の利用規則と元写真の許諾を両方確認"],
        ["出所の手掛かり", "未知の編集サービスでは不明", "一部の生成出力には Content Credentials。全編集の保証ではない"],
        ["制作費", "危険な結果を費用比較の基準にしない", "現行プランと生成クレジットを確認"],
      ],
      sections: [
        ["選択範囲の強み", "Firefly の Generative Fill は、選んだ部分に要素を追加または置換する方法として説明されています。ジャケットだけを別のジャケットにし、許可された人物の顔と背景を保つ、といった制作条件を立てやすい点が強みです。ただしボタン、布の折り目、指、影まで正しくなるとは限らず、細部が変わった出力は採用前に修正が必要です。"],
        ["利用規則は別の必須条件", "Adobe の生成 AI ガイドラインはポルノ、露骨な裸、プライバシー権侵害、他人の権利を侵害する利用を禁止しています。Firefly を規則の抜け道と考えるべきではありません。また製品を使えることは、元写真の撮影者や被写体から許可を得たことと同義ではありません。加工の目的と公開範囲について成人本人の同意を確認します。"],
        ["Content Credentials を過大評価しない", "Adobe は Firefly の一部の完全生成出力に Content Credentials が自動で付くと説明しますが、すべての編集画像に同じ扱いが適用されるわけではありません。実際に書き出したファイルに情報があるかを確認してください。メタデータが付いても被写体の同意を証明するものではなく、別の制作工程で失われる可能性もあります。"],
        ["小規模な制作検証", "所有する写真か許諾済みの成人モデル、あるいはマネキンを使います。見える衣服の置換と背景変更を一つずつ実施し、元画像、編集履歴、出力を残して輪郭、変わらない領域、書き出し解像度、再試行回数を見ます。Adobe の生成クレジットや利用権はプランと機能で変わるため、事前に現行表示を確認します。当サイトはこの検証を代行したとは主張しません。"],
      ],
      verdict: "許可されたファッション・デザイン制作には Firefly の選択範囲編集が具体的な選択肢です。細部の崩れ、作業量、クレジット、書き出しの出所情報は確認が必要です。ClothOff AI を扱う当サイトは、合成的な衣服除去の代替を探す場所ではなく、同意に基づく目的へ問いを戻します。",
    },
    "clothoff-ai-vs-canva-magic-edit": {
      title: "ClothOff AI と Canva Magic Edit：服の編集をデザインに生かす",
      description: "ClothOff AI と Canva Magic Edit を、見える衣服の変更、SNS・販促デザイン、元写真の権利、画像品質と費用で比較します。",
      intro: "服装のアイデアを確認するために、人物を裸にしたような合成画像は必要ありません。Canva Magic Edit は許可された写真の一部を選び、見える物体を追加・置換するための機能です。この比較では、一枚の編集結果をポスターやルックブックなどの制作物に組み込む際の利点と、写真の権利・プライバシー上の限界を考えます。",
      dimensions: [
        ["このサイト", "ClothOff AI の検索リスクを説明。画像は受け付けない", "Canva はデザインと画像編集を行う外部製品"],
        ["服装の目標", "無断の露出加工を避ける", "見える服や背景を変更し、完成レイアウトを確認"],
        ["権利", "検索語は肖像利用を許可しない", "元写真の権利と人物の加工・配布への同意を別に確認"],
        ["費用", "比較対象となる編集サービスはない", "現行プランの利用条件、修正時間、書き出しを確認"],
      ],
      sections: [
        ["デザイン工程に入れやすい", "Canva の公式写真編集ページは Magic Edit を、短い指示で画像要素を追加・置換・修正する機能と説明しています。服の色や背景を変えてから、文字、余白、SNS 用の切り取りまで一つの制作工程で確認できるのが利点です。単一の高精度レタッチより、キャンペーン全体を仮組みしたいときに向きます。"],
        ["見映えと商品忠実度は別", "AI は生地の柄、縫い目、袖、ブランド表示やアクセサリーを変えてしまうことがあります。販促用の小さなイメージでは気付きにくくても、商品ページに掲載すれば誤認を招きます。元の商品写真と並べ、重要な差異があれば修正・明示するか、通常の撮影画像に戻してください。"],
        ["権利とプライバシーを分けて読む", "Canva の案内では、AI生成画像は通常の Canva Content License の対象として一律に扱われません。元写真のライセンス、被写体本人の同意、AI機能に関する条件を個別に確かめる必要があります。私的な肖像を送る前には、Canva の現行プライバシー設定や内容の利用条件も読みます。マネキンや許諾済みモデルで足りる企画なら、個人写真を使わない方法を優先できます。"],
        ["完成物で試す", "権利が明確な成人モデルかマネキンを使い、見える上着の変更と背景変更を一回ずつ行います。顔や手、服のロゴ、陰影の安定を確認した後、実際のポスターやモバイル広告の寸法へ配置して読みやすさを見ます。現行プランの機能、回数、解像度に加え、失敗した画像の手直し時間を費用に含めます。これは推奨する確認方法であり、当サイトの測定結果ではありません。"],
      ],
      verdict: "Canva Magic Edit は、許可された写真の見える衣服を変更し、デザイン全体を組み立てたいときに便利です。一方で商品ディテール、元画像の権利、アップロード後の扱いを別々に検証しなければなりません。ClothOff AI を扱う当サイトは編集製品ではなく、合成的な露出へ進まないための判断材料を提供します。",
    },
    "clothoff-ai-vs-photoroom": {
      title: "ClothOff AI と Photoroom：商品画像と写真データの扱い",
      description: "ClothOff AI の検索意図と Photoroom を比較。AI Fashion Models、企業向け試着 API、商品写真の品質、画像学習・削除条件を確認。",
      intro: "Photoroom は商品写真、AI Fashion Models、企業向けバーチャル試着など、服を見せるための製品です。ClothOff AI という検索語に結び付く合成的な衣服除去とは目的が違います。当サイトは画像を受け付けず、Photoroom をすべての写真に安全だと保証するわけでもありません。正当な商品画像の制作目的と、アップロード条件を分けて考えます。",
      dimensions: [
        ["問うべきこと", "衣服除去が必要かという問いを退ける", "商品をどのように着衣モデルや商品写真で表すか"],
        ["入力", "このサイトへの写真アップロードはない", "商品単体、合成モデル、または許諾済みの成人写真"],
        ["製品の違い", "検索語だけでは機能を断定できない", "Webアプリの AI Fashion Models と企業向け試着 API は別"],
        ["データ条件", "未知のサービスの削除を仮定しない", "画像の改善・学習利用、選択肢、契約を確認"],
      ],
      sections: [
        ["商品画像と試着を混同しない", "Photoroom の公式ヘルプでは、Web アプリの AI Fashion Models を使い衣服画像からモデル着用イメージを作る方法が示されています。一方 Virtual Try-On は小売店が買い物客の写真を受け付ける企業向け API として説明されます。一般向けプランに後者が含まれると決めつけてはいけません。実在人物の写真が不要なら、商品単体と合成モデルから始める方が個人情報を減らせます。"],
        ["商品忠実度の確認", "カタログでは色、形、縫い目、柄、ロゴが実物と一致することが重要です。生成画像が魅力的でも、襟や素材を別物にしてしまえば商品説明として不正確です。試着イメージはスタイルの参考であって、サイズの保証でもありません。一着の元画像と出力を並べ、詳細が変わるなら通常の撮影や修正を選びます。"],
        ["画像学習に関する重要な条件", "Photoroom の現行プライバシー文書は、アップロードされた画像をサービスやモデルの改善・学習に使う可能性を説明しています。ヘルプもアップロード画像では学習が初期設定であると案内します。したがって一般向けアプリを一律に『学習されない』とは表現できません。設定、拒否方法、削除手順を確認し、企業向け API の条件は実際の契約で別途確かめてください。"],
        ["小さなカタログ実験", "権利のある衣服画像を一枚用い、必要なら許諾済みの成人モデルか合成モデルを選びます。着衣の結果について商品再現、人物の保持、背景、許容できる書き出しまでの時間、再試行費用を記録します。履歴に元画像が残るか、削除操作がどこにあるかも試します。無断の衣服除去結果を比較対象にしても、商品制作の目的は測れません。"],
      ],
      verdict: "小売の商品画像には Photoroom が具体的な選択肢です。ただし Web アプリのモデル画像と企業 API は別物であり、実在人物の写真を送る場合は同意と画像学習・保存の条件が重要です。ClothOff AI という語から来た読者にも、当サイトは服を見せる正当な用途だけを勧めます。",
    },
  },
};
