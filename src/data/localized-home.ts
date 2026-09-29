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

export const localizedHome: Record<Locale, HomeCopy> = {
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
  ko: {
    metaDescription: "ClothOff AI 검색과 관련된 사진 조작의 동의·개인정보 위험을 살펴봅니다. 사진 업로드 없이 AI 옷 갈아입히기, 가상 피팅, Adobe·Canva·Photoroom의 실제 용도를 비교하세요.",
    hero: {
      eyebrow: "동의를 먼저 생각하는 독립 정보 사이트",
      tagline: "패션 사진 편집의 출발점은 당사자의 동의입니다.",
      description: "ClothOff AI라는 검색어가 왜 조심스러운지 확인하고, 옷을 지우는 대신 보이는 옷을 바꾸는 방법을 찾아보세요. 이 사이트는 사진을 받거나 이미지를 생성하지 않습니다.",
      primary: "안전한 대안 보기",
      secondary: "비교 글 읽기",
    },
    intro: {
      kicker: "01 / 검색어 이해하기",
      heading: "ClothOff AI 검색 전에 구분해야 할 것",
      lead: "이 검색어는 실제 인물의 사진을 벗은 모습처럼 합성하는 서비스와 연결되기도 합니다. 온라인에 공개된 사진이라도 당사자가 특정 AI 편집이나 결과물 공유에 동의했다는 뜻은 아닙니다.",
      body: "여기는 해당 서비스의 공식 사이트도, 사진을 처리하는 도구도 아닙니다. 목적이 스타일 시안이나 쇼핑이라면 본인 사진, 사용 허가를 받은 성인 모델, 마네킹 또는 가상 모델로 옷을 다른 옷으로 바꾸는 작업이 더 적합합니다. 어떤 도구든 업로드 보관 기간, 모델 학습 활용, 삭제 방법을 따로 확인해야 합니다.",
    },
    alternatives: {
      kicker: "02 / 목적에 맞는 선택",
      heading: "노출을 추정하지 말고 새 옷을 보여 주세요.",
      description: "‘AI 사진 편집’이라는 말은 같아도 스타일 시안, 온라인 쇼핑용 피팅, 상품 이미지 제작은 각각 다른 기준으로 평가해야 합니다.",
      cards: [
        { title:"AI 옷 갈아입히기", description:"허가받은 성인 사진에서 보이는 재킷·원피스 등을 다른 의상으로 바꾸는 편집 방식입니다.", uses:["색상과 소재 비교","얼굴·자세 유지","최종 이미지 사용 권리"] },
        { title:"가상 피팅", description:"상품이 내게 어떻게 보일지 가늠하는 쇼핑 도구입니다. 화면 속 핏이 실제 사이즈를 보장하지는 않습니다.", uses:["상품 디테일 재현","사이즈표와 함께 확인","원본 사진 삭제 방식"] },
        { title:"상품·모델 이미지 제작", description:"사람의 얼굴이 필요 없다면 의류 단독 사진, 마네킹, 합성 모델부터 검토할 수 있습니다.", uses:["원단·로고의 정확도","모델 이미지 사용 허가","게시 전 사람의 검토"] },
      ],
    },
    checklist: {
      kicker: "03 / 업로드 전 확인",
      heading: "사진을 보내기 전에 네 가지",
      description: "편집 기능을 보기 전에 사진의 주인, 사용 목적, 업로드될 서비스부터 확인하세요.",
      items: [
        { title:"사진과 인물의 허가", body:"촬영이나 SNS 게시를 허락받은 것과 AI로 옷차림을 바꿔 공개하는 것은 다릅니다. 편집 내용과 공개 범위에 대한 명확한 동의가 필요합니다." },
        { title:"성인 여부가 확실한 소재", body:"나이가 불분명한 인물, 어린 시절 사진, 배경에 다른 사람이 들어간 사진은 사용하지 마세요. 필요하면 마네킹이나 가상 모델을 택하세요." },
        { title:"보관·학습·삭제 정책", body:"업로드 사진의 처리 방식은 업체마다 다릅니다. 예를 들어 Photoroom의 현행 개인정보 정책은 앱 업로드 이미지의 서비스 개선·모델 학습 활용과 거부 설정을 설명합니다." },
        { title:"완성본도 옷을 입은 이미지", body:"새로 보여 줄 옷을 구체적으로 정하고 얼굴, 체형, 배경, 상품 표식이 뜻밖에 바뀌지 않았는지 확인하세요. 숨겨진 신체를 추정하는 작업은 피합니다." },
      ],
    },
    comparison: {
      kicker:"04 / 다섯 가지 비교", heading:"ClothOff AI 검색에서 더 나은 패션 작업으로",
      description:"앞의 두 항목은 특정 업체가 아닌 작업 방식입니다. 나머지 세 제품은 제공 업체의 현재 설명과 정책을 따로 살핍니다.",
      columns:{ option:"선택지", fit:"알맞은 용도", distinction:"꼭 구분할 점", article:"자세한 비교" },
      baseline:{ label:"ClothOff AI 검색 주제", fit:"동의·사생활·합성 이미지 위험 이해", distinction:"이 사이트는 사진 업로드나 의복 제거 기능을 제공하지 않습니다" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"AI 옷 갈아입히기", fit:"보이는 옷을 다른 옷으로 편집", distinction:"한 회사의 제품명이 아니라 작업 범주", cta:"옷 바꾸기 비교" },
        "clothoff-ai-vs-virtual-try-on":{ label:"가상 피팅", fit:"구매 전 옷차림 미리보기", distinction:"실제 치수와 착용감을 보장하지 않음", cta:"가상 피팅 비교" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"영역을 지정해 이미지 요소 추가·교체", distinction:"사용 지침과 출력별 출처 정보를 확인", cta:"Firefly 비교" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"디자인 안에서 의상·배경 편집", distinction:"원본 사진의 권리는 편집 후에도 중요", cta:"Canva 비교" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"상품 사진과 AI 패션 모델", distinction:"웹 앱과 기업용 피팅 API는 별도 흐름", cta:"Photoroom 비교" },
      },
    },
    research: {
      kicker:"05 / 결정에 필요한 기준", heading:"기능보다 먼저 목적과 권리를 확인하세요",
      description:"입력 사진, 완성 이미지, 배포 범위가 달라지면 같은 AI 편집이라도 위험은 달라집니다.",
      blocks:[
        { heading:"검색 결과에서 운영 주체부터 확인", paragraphs:["ClothOff AI라는 이름이 보인다고 모두 같은 서비스는 아닙니다. 이 사이트는 독립적으로 안전 정보와 비교를 제공하며 사진을 받거나 이미지를 만들지 않습니다.","패션 시안이 목표라면 먼저 ‘어떤 옷을 입은 이미지를 만들 것인가’를 정하세요. 필요한 소재와 권한을 정한 뒤 도구를 고르면 과장된 기능 목록에 끌려가지 않습니다."] },
        { heading:"가상 피팅은 실제 피팅이 아닙니다", paragraphs:["가상 피팅은 색과 분위기를 보는 데 도움이 되지만 Google Shopping도 생성된 사진이 실제 착용감이나 사이즈를 보장하지 않는다고 명시합니다. 상품 치수, 소재, 후기와 반품 조건을 함께 보세요.","상품을 홍보할 때는 목선, 봉제선, 프린트, 로고가 왜곡되지 않았는지 확인해야 합니다. 그럴듯한 합성 이미지라도 실물과 다르면 구매자를 오도할 수 있습니다."] },
        { heading:"개인정보 정책은 업체별로 비교", paragraphs:["사진 보관 기간, 학습 이용, 삭제, 공유 기본값을 따로 읽으세요. 디자인 도구라는 이유만으로 비공개 처리나 학습 제외를 기대해서는 안 됩니다.","성인 본인의 사진이라도 특정 편집과 공개 범위에 관한 동의가 필요합니다. 초안 단계에는 마네킹, 의류 사진, 적법하게 사용할 수 있는 가상 모델만으로 충분한지도 먼저 검토하세요."] },
      ],
    },
    blog:{ kicker:"06 / 비교 글", heading:"사진을 올리기 전에 먼저 비교하세요", cta:"다섯 글 모두 보기" },
    faq:{
      kicker:"07 / 자주 묻는 질문", heading:"ClothOff AI에 관한 중요한 질문",
      items:[
        { question:"이 사이트에서 사진 속 옷을 지울 수 있나요?", answer:"아니요. 사진 업로드나 이미지 생성 기능이 없는 독립 안전 정보 사이트입니다." },
        { question:"옷차림을 미리 보고 싶다면 무엇을 쓰나요?", answer:"본인 사진이나 허가받은 성인 모델로 하는 AI 옷 갈아입히기, 가상 피팅, 마네킹 또는 합성 모델을 이용한 상품 이미지를 검토하세요." },
        { question:"공개된 SNS 사진은 자유롭게 AI로 편집해도 되나요?", answer:"아닙니다. 공개 여부와 편집 동의는 다릅니다. 사진 권리와 당사자의 구체적 허가를 확인하세요." },
        { question:"가상 피팅 사진으로 사이즈를 고를 수 있나요?", answer:"스타일 참고는 되지만 실제 핏을 보장하지 않습니다. 사이즈표, 상품 정보, 반품 조건을 함께 확인하세요." },
        { question:"사진 편집 서비스의 개인정보 정책에서 무엇을 보나요?", answer:"원본과 결과물의 보관, 모델 학습 활용, 제3자 공유, 삭제 및 공개 설정을 확인하세요. 업체별로 다릅니다." },
      ],
    },
    final:{ heading:"좋은 패션 이미지는 동의에서 시작합니다", description:"권리를 확인할 수 있는 소재와 보이는 옷을 다루는 목적을 선택하세요. 업로드 전에 다섯 비교 글에서 각 방식의 한계를 살펴볼 수 있습니다.", cta:"안전한 방식 비교하기" },
  },
  "zh-hant": {
    metaDescription: "了解 ClothOff AI 搜尋背後的影像同意與隱私風險。本站不收照片，整理 AI 換裝、虛擬試穿及 Adobe Firefly、Canva、Photoroom 的安全使用差異。",
    hero: {
      eyebrow: "以當事人同意為先的獨立資訊網站",
      tagline: "編輯時尚照片，先確認影像中的人同意。",
      description: "搜尋 ClothOff AI 前，先分清楚移除衣物的合成影像與正常的換裝、試穿需求。本站不接受照片，也不產生圖片；我們幫你比較較安全的做法。",
      primary: "了解安全替代方案",
      secondary: "閱讀比較文章",
    },
    intro: {
      kicker: "01 / 理解搜尋意圖",
      heading: "ClothOff AI 搜尋結果，應先看清用途",
      lead: "這個詞常與把真人照片變成彷彿脫去衣物的合成影像工具一起出現。照片可以公開瀏覽，不代表當事人同意被這樣改造，更不代表可以任意傳播結果。",
      body: "本站是獨立編輯的安全資訊網站，不是同名服務的官方網站，也沒有上傳或影像生成功能。若你的目的是展示穿搭，可從本人照片、取得授權的成年模特兒、人體模型或合成模特兒開始，改變看得見的衣服。送出任何真人影像前，仍須逐一查看服務的保存、訓練使用與刪除規則。",
    },
    alternatives: {
      kicker: "02 / 更貼近需求的工作方式",
      heading: "換一件衣服，不必推測衣服底下。",
      description: "AI 換裝、購物用虛擬試穿、商品照製作各有目的。先決定成品要解決什麼問題，再比較工具。",
      cards: [
        { title:"AI 換裝", description:"在取得許可的成人照片上，把原本可見的外套、裙裝等改成另一套完整穿搭。", uses:["布料與顏色提案","保留臉部與姿勢","確認成品授權範圍"] },
        { title:"虛擬試穿", description:"購物時預覽衣服穿在自己身上的大致效果；畫面不能保證實際尺寸與合身程度。", uses:["商品細節是否一致","配合尺寸表與評價","查明原始照片能否刪除"] },
        { title:"商品圖與合成模特兒", description:"不需要真實人臉時，可用衣服平拍圖、人體模型或依法可用的合成模特兒降低身分風險。", uses:["花紋與商標準確度","模特兒圖像使用權","刊登前人工核對"] },
      ],
    },
    checklist: {
      kicker: "03 / 上傳前的四項檢查",
      heading: "先確認權利，再開啟編輯器",
      description: "一張照片可能涉及拍攝者、當事人、品牌與平台；取得其中一項許可，不等於取得全部許可。",
      items: [
        { title:"影像與人物的同意", body:"同意被拍攝或在社群平台曝光，不等於同意 AI 改變服裝。請先說明要怎麼修改、用在哪裡、由誰看到。" },
        { title:"只使用明確成年的素材", body:"年齡不明的人像、兒時照片、拍到旁人的照片都不適合。若不需要真人身分，改用人體模型或合成角色。" },
        { title:"查清保存、訓練與刪除", body:"不同服務有不同資料流程。Photoroom 現行隱私政策說明 App 上傳影像可能用於改進及訓練，並提供退出設定；不能把所有工具一概說成不訓練。" },
        { title:"成果仍是完整穿搭", body:"指定要增加或替換的可見衣物，並核對臉、身形、背景、商標有沒有被錯誤改動。不要以推測隱藏身體為目標。" },
      ],
    },
    comparison: {
      kicker:"04 / 五篇比較", heading:"從 ClothOff AI 搜尋，走向五種更好的選擇",
      description:"前兩項是工作方式，不是品牌；後三項是可查閱官方資料的實際產品，規則不能混為一談。",
      columns:{ option:"選擇", fit:"適合用途", distinction:"重要差異", article:"深入閱讀" },
      baseline:{ label:"ClothOff AI 搜尋議題", fit:"理解合成影像、同意與隱私風險", distinction:"本站沒有照片上傳或移除衣物的功能" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"AI 換裝", fit:"替換看得見的服裝", distinction:"一種工作流程，並非單一廠牌", cta:"比較 AI 換裝" },
        "clothoff-ai-vs-virtual-try-on":{ label:"虛擬試穿", fit:"購物前預覽穿搭", distinction:"不能保證實物尺寸或合身程度", cta:"比較虛擬試穿" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"選取區域後增添或替換影像元素", distinction:"須看使用規則與該類輸出的來源憑證", cta:"比較 Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"設計版面內修改衣服與背景", distinction:"AI 編輯不會抹去原照片的權利", cta:"比較 Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"商品影像與 AI 時尚模特兒", distinction:"網頁 App 與企業用試穿 API 不相同", cta:"比較 Photoroom" },
      },
    },
    research: {
      kicker:"05 / 更多判斷依據", heading:"先核對用途、權利和資料流向",
      description:"名稱相近、畫面好看，都不能代替對服務性質與本人同意的確認。",
      blocks:[
        { heading:"別把搜尋結果當成官方服務", paragraphs:["搜尋 ClothOff AI 時，先辨認結果是提供工具的業者、獨立評測，還是像本站這樣的安全資訊。本站不處理照片，也不代表任何同名業者。","如果是服裝企劃，先定義要展示哪件可見衣物、哪些人物和圖片可依法使用。產品功能再多，也無法補救欠缺授權的來源素材。"] },
        { heading:"試穿效果不是實際尺寸", paragraphs:["虛擬試穿可協助判斷顏色與風格，但 Google Shopping 亦提醒生成畫面不保證服裝真正合身。各地與各商品的功能供應不同，仍須看尺寸表、材質與退貨政策。","商品照應逐一檢查領口、縫線、花紋、標誌與配件。若生成圖把真實商品改得更漂亮卻不準確，消費者可能因此誤解。"] },
        { heading:"隱私不能只看品牌印象", paragraphs:["詢問照片會保存多久、是否用於模型改進、與誰分享，以及是否能刪除原圖和成品。某項服務的 API 與 App 可能採用不同資料條款，不能互相套用。","若企劃不需要辨認某個真人，先試人體模型、單件商品照或取得權利的合成模特兒。必須用本人照片時，讓當事人知道編輯目的和發佈範圍。"] },
      ],
    },
    blog:{ kicker:"06 / 比較文章", heading:"上傳照片之前，先把方法比較清楚", cta:"閱讀五篇比較" },
    faq:{
      kicker:"07 / 常見問題", heading:"關於 ClothOff AI 的五個重點",
      items:[
        { question:"這個網站能把照片中的衣服移除嗎？", answer:"不能。本站是獨立安全資訊網站，沒有上傳照片或影像生成功能。" },
        { question:"只是想預覽服裝，有哪些替代方式？", answer:"可比較 AI 換裝、購物用虛擬試穿、人體模型或合成模特兒；真人照片須先取得具體同意與使用權。" },
        { question:"公開的社群照片可以拿來 AI 換裝嗎？", answer:"公開不等於同意改作。請分別確認原照片的權利與影像中人物對特定改變和分享方式的許可。" },
        { question:"虛擬試穿能幫我選尺碼嗎？", answer:"它只能提供大致的視覺參考，不能保證實際合身。請再看商品尺寸表、評論與退貨條件。" },
        { question:"影像編輯服務的隱私條款要看什麼？", answer:"確認原圖與成品的保存、模型訓練、第三方處理、刪除方式和預設公開設定；不同服務及方案可能不同。" },
      ],
    },
    final:{ heading:"好的時尚影像，從當事人同意開始", description:"選擇權利清楚的素材，把目標放在完整可見的服裝。送出照片前，先了解五種方法各自做得到與做不到的事。", cta:"比較安全的做法" },
  },
  es: {
    metaDescription: "ClothOff AI: riesgos de consentimiento y privacidad. Compara cambiar ropa con IA, probadores virtuales, Adobe, Canva y Photoroom sin subir fotos aquí.",
    hero: {
      eyebrow: "Publicación independiente centrada en el consentimiento",
      tagline: "La moda con IA empieza con el permiso de la persona.",
      description: "Una búsqueda de ClothOff AI puede llevar a herramientas que simulan quitar ropa. Si lo que buscas es visualizar un conjunto, compara formas de sustituir prendas visibles. Esta web no acepta fotos ni genera imágenes.",
      primary: "Ver alternativas responsables",
      secondary: "Leer las comparativas",
    },
    intro: {
      kicker: "01 / Entender la búsqueda",
      heading: "Qué conviene saber al buscar ClothOff AI",
      lead: "El término suele aparecer junto a servicios capaces de producir imágenes sintéticas que aparentan desnudar a una persona real. Que su foto sea pública no implica permiso para modificarla de ese modo ni para difundir el resultado.",
      body: "Esta es una publicación educativa independiente, no el sitio oficial de un proveedor con ese nombre. Para una idea de vestuario, usa una foto propia, una modelo adulta con autorización específica, un maniquí o una figura sintética, y cambia una prenda visible por otra. Antes de cargar cualquier retrato en otro servicio, revisa conservación, entrenamiento de modelos, ajustes de privacidad y borrado.",
    },
    alternatives: {
      kicker: "02 / Elegir según el objetivo",
      heading: "Cambia el atuendo; no inventes lo que hay debajo.",
      description: "Cambiar ropa con IA, probar una prenda al comprar y preparar fotos de producto son tareas distintas. Cada una exige criterios propios.",
      cards: [
        { title:"Cambiar ropa con IA", description:"Sustituir una chaqueta o un vestido visible en una imagen autorizada de una persona adulta.", uses:["Color, corte y tejido","Estabilidad del rostro y la pose","Derechos sobre la imagen final"] },
        { title:"Probador virtual", description:"Ver de forma aproximada cómo podría quedar una prenda antes de comprarla; no sustituye las medidas reales.", uses:["Fidelidad de la prenda","Tabla de tallas y devoluciones","Control sobre la foto subida"] },
        { title:"Imágenes de producto y modelos", description:"Si no necesitas identificar a nadie, empieza por la prenda, un maniquí o una modelo sintética con derechos claros.", uses:["Detalle de costuras y logos","Licencia de la modelo","Revisión humana antes de publicar"] },
      ],
    },
    checklist: {
      kicker: "03 / Antes de subir una imagen",
      heading: "Cuatro preguntas antes de editar",
      description: "Una foto puede involucrar a quien la tomó, a la persona retratada y a una marca. El permiso para una cosa no cubre automáticamente las demás.",
      items: [
        { title:"¿Tienes permiso para esta transformación?", body:"Autorizar una sesión de fotos o una publicación en redes no equivale a aceptar una modificación con IA. Explica el cambio concreto y dónde aparecerá." },
        { title:"¿Todas las personas son adultas?", body:"Evita imágenes de edad dudosa, fotografías de la infancia y fotos con terceros al fondo. Si la identidad no importa, usa un maniquí o una figura sintética." },
        { title:"¿Qué hará el servicio con el archivo?", body:"Lee cómo guarda, usa para entrenar y elimina imágenes. La política actual de Photoroom, por ejemplo, contempla el uso de fotos cargadas en la aplicación para mejorar modelos, con un ajuste de exclusión." },
        { title:"¿El resultado sigue mostrando ropa?", body:"Pide una prenda nueva y comprueba que no cambien indebidamente el rostro, el cuerpo, el fondo o el logotipo. No uses el editor para inferir un cuerpo oculto." },
      ],
    },
    comparison: {
      kicker:"04 / Cinco comparativas", heading:"De la búsqueda ClothOff AI a una decisión útil",
      description:"Las dos primeras opciones son tipos de trabajo, no marcas. Las otras tres son productos con documentación y condiciones propias.",
      columns:{ option:"Opción", fit:"Para qué sirve", distinction:"Qué no debes confundir", article:"Análisis" },
      baseline:{ label:"La búsqueda ClothOff AI", fit:"Entender riesgos de consentimiento, privacidad e imágenes sintéticas", distinction:"Esta web no ofrece carga de fotos ni eliminación de ropa" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"Cambiar ropa con IA", fit:"Sustituir prendas visibles", distinction:"Categoría de edición, no proveedor único", cta:"Comparar el cambio de ropa" },
        "clothoff-ai-vs-virtual-try-on":{ label:"Probador virtual", fit:"Previsualizar un conjunto al comprar", distinction:"La imagen no garantiza la talla ni el ajuste", cta:"Comparar probadores" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"Editar zonas concretas de una imagen", distinction:"Revisar normas de uso y procedencia según el tipo de exportación", cta:"Comparar Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"Editar prendas o fondos dentro de un diseño", distinction:"La edición no elimina los derechos de la foto original", cta:"Comparar Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"Fotografía de producto y modelos de moda con IA", distinction:"La aplicación y el probador API para empresas son flujos distintos", cta:"Comparar Photoroom" },
      },
    },
    research: {
      kicker:"05 / Criterios para decidir", heading:"Primero el propósito, los derechos y los datos",
      description:"Una etiqueta de «editor con IA» no explica qué foto entra, qué imagen sale ni quién puede verla.",
      blocks:[
        { heading:"Distingue una guía de una herramienta", paragraphs:["Al buscar ClothOff AI, comprueba quién publica cada resultado. Esta web explica riesgos y compara alternativas, pero no procesa retratos ni representa a ningún proveedor de generación.","Si preparas una campaña de moda, define primero la prenda visible que debe aparecer y qué material tienes derecho a utilizar. Un catálogo enorme de funciones no sustituye el consentimiento de la persona fotografiada."] },
        { heading:"La prueba virtual no mide tu cuerpo", paragraphs:["Un probador puede servir para imaginar un color o una silueta, pero Google Shopping advierte que sus imágenes generadas no garantizan el ajuste real. Consulta la tabla de tallas, el tejido, las opiniones y las devoluciones.","Antes de publicar una imagen de producto, revisa cuello, costuras, estampados y logos. Un resultado atractivo que inventa detalles puede dar una impresión falsa del artículo vendido."] },
        { heading:"La privacidad cambia según el proveedor", paragraphs:["Pregunta cuánto se conservan la foto y el resultado, si se usan para mejorar modelos, quién los procesa y cómo se borran. La política de una API empresarial no tiene por qué ser la misma que la de una aplicación de consumo.","Si aún estás explorando ideas, una foto de la prenda, un maniquí o una modelo sintética autorizada pueden evitar una carga innecesaria de datos personales. Con una persona real, acuerda el cambio y la difusión de forma específica."] },
      ],
    },
    blog:{ kicker:"06 / Artículos comparativos", heading:"Compara antes de enviar una foto", cta:"Ver las cinco comparativas" },
    faq:{
      kicker:"07 / Preguntas frecuentes", heading:"Cinco dudas sobre ClothOff AI",
      items:[
        { question:"¿Esta web quita ropa de las fotos?", answer:"No. Es un recurso independiente sobre seguridad y alternativas; no tiene formulario de subida ni generador de imágenes." },
        { question:"Solo quiero probar otro atuendo. ¿Qué opción tengo?", answer:"Valora cambiar ropa con IA, un probador virtual o una imagen de producto con maniquí o modelo sintética. Una foto real exige derechos y permiso concreto." },
        { question:"¿Puedo editar una foto ajena publicada en redes?", answer:"Estar publicada no autoriza una transformación con IA. Confirma los derechos de la foto y el consentimiento de la persona para ese uso y difusión." },
        { question:"¿El probador virtual me dice qué talla comprar?", answer:"Es una aproximación visual, no una medida fiable. Comprueba medidas, descripción de la prenda, opiniones y política de devolución." },
        { question:"¿Qué revisar en la política de privacidad del editor?", answer:"Conservación de originales y resultados, entrenamiento, terceros, opciones de borrado y visibilidad predeterminada. Cada proveedor puede funcionar de otra manera." },
      ],
    },
    final:{ heading:"Una buena imagen de moda comienza con consentimiento", description:"Elige material con derechos claros y un objetivo de vestuario visible. Antes de subir una foto, entiende qué resuelve y qué no resuelve cada alternativa.", cta:"Comparar opciones responsables" },
  },
  "pt-br": {
    metaDescription: "ClothOff AI: riscos de consentimento e privacidade. Compare troca de roupa com IA, provador virtual, Adobe, Canva e Photoroom sem enviar fotos aqui.",
    hero: {
      eyebrow: "Publicação independente com foco no consentimento",
      tagline: "Editar moda com IA começa pelo consentimento.",
      description: "A busca por ClothOff AI pode levar a serviços que simulam a remoção de roupas. Se você quer testar um visual, conheça formas de trocar peças que aparecem na foto. Este site não recebe imagens nem gera fotos.",
      primary: "Conhecer alternativas seguras",
      secondary: "Ler as comparações",
    },
    intro: {
      kicker: "01 / Entenda a busca",
      heading: "O que observar ao pesquisar ClothOff AI",
      lead: "O termo pode aparecer ao lado de ferramentas que criam uma imagem falsa de uma pessoa real sem roupa. Uma foto publicada na internet não dá autorização para esse tipo de alteração, muito menos para compartilhar o resultado.",
      body: "Somos uma publicação educativa independente, não o site oficial de um serviço de geração. Para criar um look, trabalhe com sua própria foto, uma modelo adulta que autorizou a edição, um manequim ou uma figura sintética. Troque uma peça visível por outra e verifique separadamente como cada fornecedor guarda, usa para treinamento e apaga arquivos enviados.",
    },
    alternatives: {
      kicker: "02 / Escolha pelo seu objetivo",
      heading: "Troque a peça; não invente o corpo escondido.",
      description: "Trocar roupa com IA, visualizar uma compra e montar fotos de catálogo parecem tarefas próximas, mas pedem critérios diferentes.",
      cards: [
        { title:"Trocar roupa com IA", description:"Substituir uma jaqueta ou vestido visível em uma foto autorizada de uma pessoa adulta.", uses:["Cor, tecido e modelagem","Preservação de rosto e pose","Permissão para usar o resultado"] },
        { title:"Provador virtual", description:"Ter uma ideia de como uma peça poderia ficar antes de comprar. A imagem não garante o caimento real.", uses:["Fidelidade ao produto","Tabela de medidas e devolução","Exclusão da foto enviada"] },
        { title:"Fotos de produto e modelos", description:"Quando um rosto real não é necessário, peça isolada, manequim ou modelo sintética reduzem a exposição de dados pessoais.", uses:["Costuras e estampas corretos","Direitos sobre a imagem do modelo","Revisão antes da publicação"] },
      ],
    },
    checklist: {
      kicker: "03 / Antes de enviar uma foto",
      heading: "Quatro cuidados antes de editar",
      description: "Descubra quem tem direitos sobre a imagem, qual alteração será feita e o que a plataforma fará com o arquivo.",
      items: [
        { title:"Permissão para a edição específica", body:"Autorizar a sessão de fotos ou a postagem em rede social não significa permitir alterações por IA. Explique a mudança e onde a imagem final aparecerá." },
        { title:"Apenas pessoas comprovadamente adultas", body:"Evite fotos de idade incerta, imagens de infância e retratos com terceiros ao fundo. Quando possível, use manequim ou figura sintética." },
        { title:"Armazenamento, treinamento e exclusão", body:"Leia a política do serviço. A política atual do Photoroom permite o uso de imagens enviadas ao aplicativo para melhorar e treinar modelos, com opção de sair; isso não vale automaticamente para toda ferramenta." },
        { title:"Uma peça visível no resultado", body:"Defina a roupa que quer adicionar ou substituir. Confira se rosto, corpo, cenário e marca do produto não mudaram indevidamente. Não use o editor para inferir anatomia oculta." },
      ],
    },
    comparison: {
      kicker:"04 / Cinco comparações", heading:"Da busca ClothOff AI a um trabalho de moda útil",
      description:"Os dois primeiros itens são tipos de fluxo, não marcas. Os três restantes são produtos com recursos e políticas próprios.",
      columns:{ option:"Opção", fit:"Melhor uso", distinction:"Diferença essencial", article:"Comparação" },
      baseline:{ label:"Busca ClothOff AI", fit:"Entender riscos de consentimento, privacidade e imagem sintética", distinction:"Este site não recebe fotos nem remove roupas" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"Trocar roupa com IA", fit:"Substituir peças visíveis", distinction:"Categoria de edição, não um único fornecedor", cta:"Comparar troca de roupas" },
        "clothoff-ai-vs-virtual-try-on":{ label:"Provador virtual", fit:"Visualizar peças antes da compra", distinction:"Não garante tamanho ou caimento físico", cta:"Comparar provadores" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"Adicionar ou substituir áreas selecionadas", distinction:"Verificar regras de uso e proveniência do tipo de exportação", cta:"Comparar Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"Alterar peça ou fundo dentro de um design", distinction:"A foto de origem continua sujeita a direitos", cta:"Comparar Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"Foto de produto e modelos de moda com IA", distinction:"Aplicativo e API corporativa de prova virtual são diferentes", cta:"Comparar Photoroom" },
      },
    },
    research: {
      kicker:"05 / Critérios de decisão", heading:"Antes da ferramenta, defina finalidade e direitos",
      description:"O rótulo ‘editor de imagens com IA’ não revela de quem é a foto, qual resultado será criado ou quem verá os arquivos.",
      blocks:[
        { heading:"Identifique quem está por trás do resultado", paragraphs:["Nem todo resultado de busca por ClothOff AI representa o mesmo serviço. Aqui há informação independente sobre riscos e alternativas; não processamos retratos nem operamos a ferramenta pesquisada.","Para um ensaio de moda, descreva primeiro a peça visível que deseja mostrar e quais materiais você pode usar. Recursos chamativos não compensam a falta de autorização da pessoa retratada."] },
        { heading:"Prova virtual não é medição", paragraphs:["Um provador ajuda a imaginar cor e estilo, mas o próprio Google Shopping informa que imagens geradas não garantem o caimento real. Confira medidas, tecido, avaliações e política de troca.","Em fotos de catálogo, examine gola, costura, estampa e logotipo. Uma imagem bonita que altera o produto pode induzir o consumidor a erro."] },
        { heading:"Privacidade exige leitura por serviço", paragraphs:["Verifique por quanto tempo foto e resultado são guardados, se podem treinar modelos, quem processa os dados e como apagar tudo. Os termos de uma API empresarial podem ser diferentes dos do aplicativo para consumidores.","Se o projeto ainda é um rascunho, uma foto da peça, um manequim ou uma modelo sintética licenciada podem dispensar o envio de um retrato real. Com uma pessoa identificável, combine a edição e a divulgação de modo explícito."] },
      ],
    },
    blog:{ kicker:"06 / Comparações", heading:"Compare as opções antes de enviar uma foto", cta:"Ver as cinco comparações" },
    faq:{
      kicker:"07 / Perguntas frequentes", heading:"Cinco respostas sobre ClothOff AI",
      items:[
        { question:"Este site remove roupas de fotos?", answer:"Não. É uma publicação independente sobre segurança e alternativas, sem campo de envio ou gerador de imagens." },
        { question:"Quero apenas testar outro look. O que usar?", answer:"Considere troca de roupa com IA, provador virtual ou imagem de produto com manequim ou modelo sintética. Uma foto real exige direitos e permissão específica." },
        { question:"Posso editar uma foto de outra pessoa que está nas redes?", answer:"Estar publicada não autoriza alteração por IA. Verifique os direitos da imagem e a concordância da pessoa com a edição e a divulgação." },
        { question:"O provador virtual indica o tamanho certo?", answer:"Ele oferece uma aproximação visual, não uma medida confiável. Consulte tabela de medidas, descrição, avaliações e devolução." },
        { question:"O que conferir na política de privacidade do editor?", answer:"Guarda de originais e resultados, uso para treinamento, compartilhamento, exclusão e visibilidade padrão. As condições variam por fornecedor." },
      ],
    },
    final:{ heading:"Uma boa imagem de moda começa com consentimento", description:"Escolha material com direitos claros e um objetivo de vestuário visível. Antes do upload, entenda a utilidade e os limites de cada alternativa.", cta:"Comparar caminhos responsáveis" },
  },
  ru: {
    metaDescription: "ClothOff AI: согласие и приватность при редактировании фото. Сравните замену одежды, виртуальную примерку, Adobe, Canva и Photoroom без загрузки снимков.",
    hero: {
      eyebrow: "Независимый материал с приоритетом согласия",
      tagline: "Редактирование модных фото начинается с разрешения человека.",
      description: "По запросу ClothOff AI встречаются сервисы, имитирующие снятие одежды. Если вам нужен новый образ, выбирайте замену видимой вещи на другую. Этот сайт не принимает фотографии и не создаёт изображения.",
      primary: "Посмотреть безопасные варианты",
      secondary: "Читать сравнения",
    },
    intro: {
      kicker: "01 / Смысл запроса",
      heading: "Что стоит знать перед поиском ClothOff AI",
      lead: "Запрос часто связан с инструментами, которые делают синтетический снимок реального человека так, будто он раздет. Публикация фотографии не означает согласия на такую обработку или распространение результата.",
      body: "Перед вами независимый образовательный сайт, а не официальный сервис с похожим названием. Для модного проекта лучше использовать собственное фото, изображение совершеннолетней модели с конкретным разрешением, манекен или синтетическую фигуру и менять одну видимую вещь на другую. Перед загрузкой портрета в чужой сервис отдельно проверьте хранение, обучение моделей и удаление файлов.",
    },
    alternatives: {
      kicker: "02 / Подходящий путь",
      heading: "Показывайте новую одежду, а не выдумывайте скрытое тело.",
      description: "Смена одежды нейросетью, виртуальная примерка и создание карточки товара решают разные задачи; сравнивать их по одной кнопке бессмысленно.",
      cards: [
        { title:"Замена одежды нейросетью", description:"Редактирование видимой куртки, платья или другой вещи на снимке совершеннолетнего человека с разрешением.", uses:["Цвет и фактура ткани","Сохранение лица и позы","Права на итоговый файл"] },
        { title:"Виртуальная примерка", description:"Приблизительное представление о вещи перед покупкой. Изображение не гарантирует реальную посадку и размер.", uses:["Похожесть на товар","Сверка с размерной сеткой","Удаление загруженного фото"] },
        { title:"Товарные фото и ИИ-модели", description:"Если узнаваемый человек не нужен, начните с предметной съёмки, манекена или разрешённой синтетической модели.", uses:["Точность швов и логотипов","Права на образ модели","Проверка перед публикацией"] },
      ],
    },
    checklist: {
      kicker: "03 / Перед загрузкой",
      heading: "Четыре вопроса к любому редактору",
      description: "Сначала определите владельца снимка, цель изменения и то, куда отправится исходный файл.",
      items: [
        { title:"Разрешено ли именно это изменение?", body:"Согласие на съёмку или публикацию в соцсети не равно согласию на изменение внешнего вида с помощью ИИ. Объясните, какая одежда изменится и где появится результат." },
        { title:"Все ли люди совершеннолетние?", body:"Не берите снимки с неясным возрастом, детские фото или кадры с посторонними на заднем плане. При ненужной идентичности подойдёт манекен." },
        { title:"Как хранят и используют изображение?", body:"Условия различаются. Действующая политика Photoroom, например, предусматривает использование снимков, загруженных в приложение, для улучшения и обучения моделей с возможностью отказа." },
        { title:"Итог остаётся одетым?", body:"Опишите видимую вещь, которую хотите добавить или заменить. Проверьте лицо, фигуру, фон и детали товара; не ставьте задачей реконструкцию скрытой анатомии." },
      ],
    },
    comparison: {
      kicker:"04 / Пять сравнений", heading:"От запроса ClothOff AI к реальной задаче",
      description:"Первые два пункта — способы работы, а не торговые марки. Остальные три — продукты с собственными функциями и условиями.",
      columns:{ option:"Вариант", fit:"Подходит для", distinction:"Что важно различать", article:"Подробнее" },
      baseline:{ label:"Тематика ClothOff AI", fit:"Понять риски согласия, приватности и синтетических изображений", distinction:"Этот сайт не загружает фото и не удаляет одежду на изображениях" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"Замена одежды нейросетью", fit:"Смена видимой вещи", distinction:"Категория редакторов, а не один поставщик", cta:"Сравнить замену одежды" },
        "clothoff-ai-vs-virtual-try-on":{ label:"Виртуальная примерка", fit:"Предпросмотр вещи перед покупкой", distinction:"Картинка не гарантирует размер и посадку", cta:"Сравнить примерку" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"Редактирование выделенной области", distinction:"Правила использования и происхождение экспорта зависят от функции", cta:"Сравнить Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"Редактирование одежды и фона в дизайне", distinction:"Права на исходное фото сохраняются", cta:"Сравнить Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"Товарные фото и ИИ-модели одежды", distinction:"Веб-приложение и корпоративный API примерки различаются", cta:"Сравнить Photoroom" },
      },
    },
    research: {
      kicker:"05 / Основа решения", heading:"Сначала цель, права и судьба файла",
      description:"Общее название «фоторедактор с ИИ» не сообщает, кто изображён на фото и что случится с загруженным оригиналом.",
      blocks:[
        { heading:"Проверьте, кто стоит за страницей", paragraphs:["По запросу ClothOff AI можно увидеть и сервисы, и независимые статьи. Здесь мы объясняем риски и сравниваем разрешённые альтернативы, но не принимаем портреты и не управляем генератором.","Для модной съёмки сформулируйте результат как изображение конкретной видимой вещи. Только затем выбирайте продукт и проверяйте права на фото и согласие человека."] },
        { heading:"Примерка не заменяет мерки", paragraphs:["Виртуальная примерка помогает оценить цвет и общий силуэт, но Google Shopping прямо предупреждает, что результат не гарантирует посадку. Смотрите размерную сетку, материал, отзывы и возврат.","Проверяйте горловину, швы, рисунок и логотип. Если генератор красиво изменил характеристики товара, рекламный кадр может ввести покупателя в заблуждение."] },
        { heading:"Приватность оценивают по конкретному сервису", paragraphs:["Узнайте срок хранения фото и результата, условия обучения, передачу подрядчикам и процедуру удаления. Договор API для бизнеса не обязательно повторяет условия потребительского приложения.","На раннем этапе проекта может хватить манекена, предметного фото или синтетической модели с понятными правами. Если нужен реальный человек, согласуйте конкретную правку и публикацию заранее."] },
      ],
    },
    blog:{ kicker:"06 / Статьи", heading:"Сравните подходы до загрузки фото", cta:"Открыть пять сравнений" },
    faq:{
      kicker:"07 / Частые вопросы", heading:"Пять ответов о ClothOff AI",
      items:[
        { question:"Можно ли здесь удалить одежду с фотографии?", answer:"Нет. Это независимый информационный сайт без загрузки фото и генератора изображений." },
        { question:"Как безопаснее посмотреть другой образ?", answer:"Сравните замену одежды, виртуальную примерку или товарный кадр с манекеном либо синтетической моделью. Для фото человека нужны права и конкретное согласие." },
        { question:"Можно ли редактировать чужое фото из соцсети?", answer:"Публичный доступ не даёт права на изменение с помощью ИИ. Уточните права на фото и разрешение изображённого человека на правку и распространение." },
        { question:"Подберёт ли виртуальная примерка точный размер?", answer:"Нет. Это визуальная оценка, а не мерка. Проверяйте описание товара, таблицу размеров, отзывы и условия возврата." },
        { question:"Что искать в политике приватности редактора?", answer:"Условия хранения оригиналов и результатов, обучения моделей, доступа третьих сторон, удаления и настроек видимости. У разных сервисов они отличаются." },
      ],
    },
    final:{ heading:"Хороший модный кадр начинается с согласия", description:"Выберите изображение с понятными правами и задачу с видимой одеждой. Перед отправкой фото разберитесь, для чего подходит каждый из пяти вариантов.", cta:"Сравнить ответственные подходы" },
  },
  de: {
    metaDescription: "ClothOff AI: Einwilligung und Bildschutz verstehen. Vergleichen Sie KI-Outfit-Wechsel, virtuelle Anprobe, Adobe, Canva und Photoroom ohne Foto-Upload.",
    hero: {
      eyebrow: "Unabhängige Informationen mit Einwilligung als Maßstab",
      tagline: "Gute KI-Modebilder beginnen mit Zustimmung.",
      description: "Wer ClothOff AI sucht, trifft möglicherweise auf Dienste für synthetische Entkleidung. Für eine Stilidee ist es sinnvoller, sichtbare Kleidung durch andere Kleidung zu ersetzen. Diese Website nimmt keine Bilder entgegen und erzeugt keine Fotos.",
      primary: "Verantwortbare Alternativen",
      secondary: "Vergleiche lesen",
    },
    intro: {
      kicker: "01 / Suchabsicht verstehen",
      heading: "Was hinter der Suche nach ClothOff AI steckt",
      lead: "Der Begriff wird häufig mit Werkzeugen verbunden, die echte Personen auf einem künstlich veränderten Bild entkleidet erscheinen lassen. Ein öffentlich zugängliches Foto ist keine Einwilligung in eine solche Bearbeitung oder ihre Verbreitung.",
      body: "Hier finden Sie eine unabhängige redaktionelle Einordnung, keine offizielle Seite eines gleichnamigen Anbieters und keinen Bildgenerator. Für Modekonzepte eignen sich eigene Aufnahmen, ausdrücklich freigegebene Fotos erwachsener Models, Schaufensterpuppen oder synthetische Figuren. Ersetzen Sie ein sichtbares Kleidungsstück durch ein anderes und prüfen Sie vor jedem Upload Speicherfristen, Modelltraining und Löschmöglichkeiten des jeweiligen Dienstes.",
    },
    alternatives: {
      kicker: "02 / Passender Arbeitsablauf",
      heading: "Ein neues Outfit zeigen, keinen verborgenen Körper erfinden.",
      description: "KI-Outfit-Wechsel, virtuelle Anprobe und Produktfotografie erfüllen verschiedene Aufgaben. Deshalb sind auch ihre Qualitäts- und Datenschutzkriterien verschieden.",
      cards: [
        { title:"KI-Outfit-Wechsel", description:"Sichtbare Jacken, Kleider oder andere Stücke auf einem autorisierten Foto einer erwachsenen Person austauschen.", uses:["Schnitt, Farbe und Stoff","Gesicht und Haltung erhalten","Nutzungsrechte am Ergebnis"] },
        { title:"Virtuelle Anprobe", description:"Vor dem Kauf eine ungefähre Vorstellung von einer Ware gewinnen; eine Visualisierung ersetzt keine echte Größenprobe.", uses:["Treue zum Artikel","Größentabelle und Rückgabe","Löschung des hochgeladenen Fotos"] },
        { title:"Produktbilder und KI-Models", description:"Wenn keine echte Person erkennbar sein muss, reichen oft Produktaufnahme, Puppe oder eine rechtmäßig nutzbare synthetische Figur.", uses:["Nähte, Muster und Logos","Rechte am Modelbild","Freigabe durch einen Menschen"] },
      ],
    },
    checklist: {
      kicker: "03 / Vor dem Hochladen",
      heading: "Vier Prüfungen vor jeder Bildbearbeitung",
      description: "Klären Sie zuerst, wem das Foto gehört, wie die Person dargestellt werden soll und wohin die Datei übertragen wird.",
      items: [
        { title:"Einwilligung für genau diese Änderung", body:"Die Erlaubnis für ein Fotoshooting oder einen Social-Media-Post umfasst nicht automatisch eine KI-Bearbeitung. Beschreiben Sie das neue Outfit und die geplante Veröffentlichung." },
        { title:"Eindeutig erwachsene Personen", body:"Verwenden Sie keine Aufnahmen mit unklarem Alter, Kindheitsbilder oder Fotos mit unbeteiligten Menschen im Hintergrund. Eine Puppe kann unnötige Identitätsrisiken vermeiden." },
        { title:"Speicherung, Training und Löschung", body:"Die Bedingungen unterscheiden sich. Photoroom beschreibt derzeit die Nutzung von App-Uploads zur Verbesserung und zum Training von Modellen sowie eine Widerspruchsmöglichkeit; daraus folgt nichts über andere Anbieter." },
        { title:"Ein vollständig bekleidetes Ergebnis", body:"Benennen Sie das sichtbare Kleidungsstück, das hinzukommen oder ersetzt werden soll. Prüfen Sie Gesicht, Körperform, Hintergrund und Markenkennzeichen auf unbeabsichtigte Veränderungen." },
      ],
    },
    comparison: {
      kicker:"04 / Fünf Vergleiche", heading:"Aus der ClothOff-AI-Suche eine sinnvolle Modefrage machen",
      description:"Zwei Einträge beschreiben Arbeitsabläufe statt Marken. Die drei benannten Produkte haben jeweils eigene Funktionen und Regeln.",
      columns:{ option:"Möglichkeit", fit:"Geeignet für", distinction:"Wichtiger Unterschied", article:"Im Detail" },
      baseline:{ label:"Suchthema ClothOff AI", fit:"Einwilligung, Privatsphäre und synthetische Bilder einordnen", distinction:"Diese Website bietet weder Foto-Uploads noch eine Entkleidungsfunktion" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"KI-Outfit-Wechsel", fit:"Sichtbare Kleidung ersetzen", distinction:"Arbeitsweise, kein einzelner Anbieter", cta:"Outfit-Wechsel vergleichen" },
        "clothoff-ai-vs-virtual-try-on":{ label:"Virtuelle Anprobe", fit:"Kleidung vor dem Kauf visualisieren", distinction:"Keine Garantie für Größe oder Passform", cta:"Anprobe vergleichen" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"Ausgewählte Bildbereiche bearbeiten", distinction:"Nutzungsregeln und Herkunftsnachweis je Export prüfen", cta:"Firefly vergleichen" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"Kleidung und Hintergrund in Layouts ändern", distinction:"Rechte am Ausgangsfoto bleiben bestehen", cta:"Canva vergleichen" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"Produktbilder und KI-Mode-Models", distinction:"Web-App und Unternehmens-API für Anproben unterscheiden", cta:"Photoroom vergleichen" },
      },
    },
    research: {
      kicker:"05 / Entscheidungshilfe", heading:"Zweck, Rechte und Datenweg vor Funktionslisten",
      description:"„KI-Bildeditor“ sagt wenig darüber aus, wer auf dem Bild zu sehen ist, was entsteht und wer Zugriff erhält.",
      blocks:[
        { heading:"Erst die Rolle der Website erkennen", paragraphs:["Ein Suchergebnis für ClothOff AI kann zu einem Anbieter, einem Vergleich oder einer unabhängigen Sicherheitsseite führen. Diese Website erklärt Risiken und verantwortbare Alternativen; sie verarbeitet keine Porträts.","Für eine Modekampagne sollte zuerst feststehen, welches sichtbare Kleidungsstück gezeigt wird und welche Aufnahmen verwendet werden dürfen. Ohne Bildrechte und Zustimmung nützen auch ausgefeilte Funktionen nichts."] },
        { heading:"Virtuelle Bilder sind keine Maße", paragraphs:["Eine Anprobe kann Farbe und Silhouette zeigen. Google Shopping weist jedoch selbst darauf hin, dass generierte Bilder die tatsächliche Passform nicht garantieren. Prüfen Sie Maße, Stoff, Bewertungen und Rückgabe separat.","Bei Produktbildern zählen Kragen, Nähte, Muster und Logos. Ein attraktiver KI-Entwurf, der diese Merkmale verfälscht, kann einen falschen Eindruck von der verkauften Ware erzeugen."] },
        { heading:"Datenschutz ist anbieterspezifisch", paragraphs:["Prüfen Sie Aufbewahrung, Nutzung für Modellverbesserung, Dienstleister, Sichtbarkeit und Löschung von Original und Ergebnis. Ein Vertrag für eine Unternehmens-API kann von den Regeln einer Verbraucher-App abweichen.","In der Konzeptphase reichen oft Kleidungsfoto, Schaufensterpuppe oder ein lizenziertes synthetisches Model. Bei einem echten Porträt müssen Bearbeitung und Verbreitung mit der abgebildeten Person konkret vereinbart sein."] },
      ],
    },
    blog:{ kicker:"06 / Vergleiche", heading:"Vor dem Foto-Upload Optionen vergleichen", cta:"Alle fünf Vergleiche" },
    faq:{
      kicker:"07 / Häufige Fragen", heading:"Fünf Antworten zu ClothOff AI",
      items:[
        { question:"Kann diese Website Kleidung aus Fotos entfernen?", answer:"Nein. Sie ist eine unabhängige Informationsquelle ohne Upload-Feld und Bildgenerator." },
        { question:"Ich möchte nur ein anderes Outfit sehen. Was passt?", answer:"Prüfen Sie KI-Outfit-Wechsel, virtuelle Anprobe oder Produktbilder mit Puppe beziehungsweise synthetischem Model. Für echte Porträts sind Rechte und ausdrückliche Zustimmung nötig." },
        { question:"Darf ich ein fremdes Social-Media-Foto mit KI ändern?", answer:"Die öffentliche Verfügbarkeit ist keine Bearbeitungserlaubnis. Klären Sie Bildrechte und die Zustimmung der abgebildeten Person für die konkrete Änderung und Weitergabe." },
        { question:"Bestimmt eine virtuelle Anprobe die richtige Größe?", answer:"Nein. Sie liefert eine visuelle Annäherung. Größentabelle, Produktangaben, Bewertungen und Rückgabe bleiben wichtig." },
        { question:"Was gehört zum Datenschutzcheck eines Bildeditors?", answer:"Speicherung von Original und Ergebnis, Modelltraining, Weitergabe, Löschwege und voreingestellte Sichtbarkeit. Die Bedingungen sind nicht bei allen Diensten gleich." },
      ],
    },
    final:{ heading:"Verantwortbare Modebilder beginnen mit Einwilligung", description:"Nutzen Sie Material mit geklärten Rechten und einen Zweck, bei dem Kleidung sichtbar bleibt. Die fünf Vergleiche helfen, Möglichkeiten und Grenzen vor dem Upload abzuwägen.", cta:"Verantwortbare Wege vergleichen" },
  },
  fr: {
    metaDescription: "ClothOff AI : risques pour le consentement et la vie privée. Comparez changement de tenue, essayage virtuel, Adobe, Canva et Photoroom sans envoyer de photo.",
    hero: {
      eyebrow: "Publication indépendante, fondée sur le consentement",
      tagline: "Une retouche mode responsable commence par l'accord de la personne.",
      description: "Une recherche ClothOff AI peut mener à des services simulant le retrait de vêtements. Si votre projet concerne une tenue, comparez plutôt les méthodes qui remplacent une pièce visible. Ce site ne reçoit aucune photo et ne génère aucune image.",
      primary: "Découvrir des options responsables",
      secondary: "Lire les comparatifs",
    },
    intro: {
      kicker: "01 / Comprendre la recherche",
      heading: "Que signifie chercher ClothOff AI ?",
      lead: "L'expression est souvent associée à des outils créant une image synthétique qui présente une personne réelle comme dévêtue. Une photo accessible au public n'autorise ni cette transformation ni sa diffusion.",
      body: "Ce site est une publication pédagogique indépendante : il n'est pas le site officiel d'un fournisseur au nom proche et ne traite pas les images. Pour préparer un stylisme, utilisez votre propre photo, celle d'un mannequin adulte avec autorisation explicite, un buste de présentation ou une silhouette synthétique. Remplacez un vêtement visible par un autre, puis vérifiez les règles de conservation, d'entraînement et de suppression de chaque service avant tout envoi.",
    },
    alternatives: {
      kicker: "02 / Partir du bon usage",
      heading: "Changer une tenue, sans inventer le corps caché.",
      description: "Retoucher un vêtement, visualiser un achat et produire une photo de catalogue ne sont pas le même métier. Les critères de choix doivent suivre l'objectif.",
      cards: [
        { title:"Changement de tenue par IA", description:"Remplacer une veste ou une robe visible sur la photo autorisée d'une personne adulte.", uses:["Coupe, couleur et matière","Visage et posture préservés","Droits sur le visuel final"] },
        { title:"Essayage virtuel", description:"Apercevoir approximativement un article sur soi avant l'achat, sans promesse de taille ni de tenue réelle.", uses:["Fidélité au produit","Guide des tailles et retours","Suppression de la photo d'origine"] },
        { title:"Visuels produit et mannequins IA", description:"Si l'identité d'une personne n'est pas utile, une photo du vêtement, un mannequin ou un modèle synthétique suffit souvent.", uses:["Détails et logos exacts","Licence de l'image du modèle","Validation humaine avant diffusion"] },
      ],
    },
    checklist: {
      kicker: "03 / Avant l'envoi d'une photo",
      heading: "Quatre vérifications avant de retoucher",
      description: "Identifiez les droits sur l'image, la modification prévue et le traitement du fichier par le service choisi.",
      items: [
        { title:"Un accord pour cette modification précise", body:"Accepter une prise de vue ou une publication sur les réseaux ne vaut pas accord pour une retouche par IA. Décrivez la nouvelle tenue et la diffusion envisagée." },
        { title:"Des personnes clairement majeures", body:"Écartez les âges incertains, les souvenirs d'enfance et les images où figurent des tiers. Si l'identité n'apporte rien, préférez un mannequin." },
        { title:"Conservation, entraînement et effacement", body:"Lisez les conditions propres au service. La politique actuelle de Photoroom prévoit par exemple l'utilisation de photos envoyées dans l'application pour améliorer des modèles, avec une possibilité d'opposition." },
        { title:"Un résultat toujours habillé", body:"Définissez le vêtement visible à ajouter ou remplacer. Contrôlez visage, morphologie, décor et signes de marque; n'utilisez pas l'outil pour imaginer une anatomie cachée." },
      ],
    },
    comparison: {
      kicker:"04 / Cinq comparatifs", heading:"De ClothOff AI à un choix réellement utile",
      description:"Les deux premières options sont des méthodes, pas des marques. Les trois autres sont des produits dont les fonctions et conditions diffèrent.",
      columns:{ option:"Option", fit:"Usage pertinent", distinction:"À ne pas confondre", article:"Analyse" },
      baseline:{ label:"Recherche ClothOff AI", fit:"Comprendre les risques de consentement, de vie privée et d'image synthétique", distinction:"Ce site n'accepte pas de photo et ne retire pas de vêtements" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"Changement de tenue par IA", fit:"Remplacer un vêtement visible", distinction:"Une catégorie d'édition, pas un éditeur unique", cta:"Comparer le changement de tenue" },
        "clothoff-ai-vs-virtual-try-on":{ label:"Essayage virtuel", fit:"Prévisualiser un vêtement avant l'achat", distinction:"Ne garantit ni taille ni ajustement", cta:"Comparer l'essayage" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"Retoucher une zone sélectionnée", distinction:"Vérifier les règles d'usage et la provenance selon l'export", cta:"Comparer Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"Modifier tenue ou fond dans une création graphique", distinction:"Les droits de la photo source restent applicables", cta:"Comparer Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"Photo produit et mannequins de mode IA", distinction:"L'application et l'API d'essayage pour entreprises diffèrent", cta:"Comparer Photoroom" },
      },
    },
    research: {
      kicker:"05 / Critères de décision", heading:"L'objectif, les droits et les données avant les fonctions",
      description:"L'étiquette « éditeur IA » ne dit pas qui est représenté, quel résultat sera créé ni où l'original sera conservé.",
      blocks:[
        { heading:"Identifier le rôle du site consulté", paragraphs:["Un résultat ClothOff AI peut être un service, un comparatif ou un guide indépendant. Ici, nous expliquons les risques et les alternatives; aucun portrait n'est traité et nous ne représentons aucun générateur.","Pour un projet mode, décrivez d'abord le vêtement visible et les images que vous avez le droit d'utiliser. Une fonction séduisante n'efface pas les droits du photographe ni l'accord de la personne photographiée."] },
        { heading:"Un essayage généré ne remplace pas les mesures", paragraphs:["Il aide à imaginer une couleur ou une silhouette, mais Google Shopping précise que ses images ne garantissent pas l'ajustement réel. Consultez mensurations, matière, avis et retours.","Pour une fiche produit, vérifiez col, coutures, motif et logo. Une image plaisante mais infidèle peut donner une idée trompeuse de l'article vendu."] },
        { heading:"La confidentialité dépend du fournisseur", paragraphs:["Comparez durée de conservation, usage pour entraîner les modèles, sous-traitants, visibilité et suppression des originaux comme des résultats. Une API professionnelle peut relever de conditions différentes d'une application grand public.","Au stade du concept, une photo de vêtement, un mannequin ou un modèle synthétique sous licence peuvent éviter de transmettre un vrai portrait. Si une personne est identifiable, convenez de la retouche et de sa diffusion."] },
      ],
    },
    blog:{ kicker:"06 / Comparatifs", heading:"Comparer avant de transmettre une image", cta:"Lire les cinq comparatifs" },
    faq:{
      kicker:"07 / Questions fréquentes", heading:"Cinq réponses sur ClothOff AI",
      items:[
        { question:"Ce site peut-il enlever les vêtements sur une photo ?", answer:"Non. C'est une publication indépendante sans formulaire d'envoi ni générateur d'images." },
        { question:"Je veux seulement voir une autre tenue. Quelle option choisir ?", answer:"Comparez changement de tenue par IA, essayage virtuel ou visuel produit sur mannequin ou modèle synthétique. Une photo réelle demande droits et accord précis." },
        { question:"Une photo publiée sur les réseaux est-elle librement retouchable ?", answer:"Non. Sa visibilité ne donne pas l'autorisation de la modifier par IA. Vérifiez les droits et l'accord de la personne pour la retouche et la diffusion." },
        { question:"L'essayage virtuel indique-t-il la bonne taille ?", answer:"Il fournit une approximation visuelle, pas une mesure fiable. Consultez guide des tailles, fiche produit, avis et retours." },
        { question:"Que lire dans la politique de confidentialité d'un éditeur ?", answer:"Conservation des originaux et résultats, entraînement, partage, effacement et visibilité par défaut. Les règles diffèrent selon le service." },
      ],
    },
    final:{ heading:"Une image de mode réussie commence par le consentement", description:"Choisissez une source aux droits clairs et un objectif où le vêtement reste visible. Les cinq comparatifs montrent les forces et limites de chaque approche avant l'envoi d'une photo.", cta:"Comparer les approches responsables" },
  },
  ar: {
    metaDescription: "ClothOff AI: افهم الموافقة والخصوصية قبل تعديل الصور. قارن تغيير الملابس والتجربة الافتراضية وAdobe وCanva وPhotoroom دون رفع صور هنا.",
    hero: {
      eyebrow: "موقع مستقل يضع موافقة الشخص أولاً",
      tagline: "تعديل صور الأزياء يبدأ بموافقة من يظهر فيها.",
      description: "قد يقود البحث عن ClothOff AI إلى خدمات تصنع صورة توهم بإزالة الملابس. إن كان هدفك تصور إطلالة جديدة، فقارن طرق استبدال قطعة ملابس ظاهرة بأخرى. لا يستقبل هذا الموقع الصور ولا ينشئها.",
      primary: "تعرّف إلى بدائل أكثر أماناً",
      secondary: "اقرأ المقارنات",
    },
    intro: {
      kicker: "01 / فهم عبارة البحث",
      heading: "ما الذي ينبغي معرفته قبل البحث عن ClothOff AI؟",
      lead: "ترتبط العبارة أحياناً بأدوات تنتج صورة مركّبة لشخص حقيقي توحي بأنه بلا ملابس. إتاحة صورته للعامة لا تعني موافقته على هذا التعديل أو نشر النتيجة.",
      body: "هذا موقع تحريري توعوي مستقل، وليس الموقع الرسمي لأي خدمة تحمل اسماً مشابهاً. لا توجد هنا أداة لرفع الصور أو توليدها. إذا كان المطلوب تصميم إطلالة، فاستخدم صورتك أو صورة عارض بالغ وافق على الاستخدام المحدد أو دمية عرض أو شخصية اصطناعية، وغيّر لباساً ظاهراً بلباس آخر. قبل إرسال صورة إلى خدمة خارجية، راجع التخزين والتدريب والحذف في شروطها الخاصة.",
    },
    alternatives: {
      kicker: "02 / اختر حسب الغرض",
      heading: "أظهر لباساً جديداً، ولا تختلق جسداً مخفياً.",
      description: "تغيير الملابس بالذكاء الاصطناعي وتجربتها قبل الشراء وتصوير المنتجات أعمال مختلفة؛ لذلك تختلف معايير الحكم عليها.",
      cards: [
        { title:"تغيير الملابس بالذكاء الاصطناعي", description:"استبدال سترة أو فستان ظاهر في صورة مأذون بها لشخص بالغ بقطعة أخرى.", uses:["لون القماش وقصّته","ثبات الوجه والوضعية","حقوق استخدام الصورة الناتجة"] },
        { title:"تجربة الملابس افتراضياً", description:"تصوّر تقريبي لمظهر قطعة قبل شرائها، وليس ضماناً للمقاس أو الملاءمة الفعلية.", uses:["دقة تمثيل المنتج","جدول المقاسات والإرجاع","حذف الصورة المرفوعة"] },
        { title:"صور المنتجات والعارضون الاصطناعيون", description:"عندما لا تحتاج إلى هوية شخص حقيقي، ابدأ بصورة القطعة وحدها أو دمية عرض أو عارض اصطناعي بحقوق واضحة.", uses:["الخياطة والشعار كما هما","حق استعمال صورة العارض","مراجعة بشرية قبل النشر"] },
      ],
    },
    checklist: {
      kicker: "03 / قبل رفع أي صورة",
      heading: "أربع مراجعات قبل التحرير",
      description: "حدّد صاحب حقوق الصورة، والتغيير المطلوب، والجهة التي ستتلقى الملف قبل تجربة أي محرّر.",
      items: [
        { title:"موافقة على هذا التغيير تحديداً", body:"الإذن بالتصوير أو النشر على الشبكات الاجتماعية لا يشمل تلقائياً تعديل المظهر بالذكاء الاصطناعي. وضّح القطعة الجديدة وأماكن عرض النتيجة." },
        { title:"صور أشخاص بالغين بوضوح", body:"تجنّب الصور التي لا يُعرف عمر صاحبها، وصور الطفولة، واللقطات التي تضم أشخاصاً آخرين في الخلفية. يمكن الاستغناء عن هوية الشخص باستخدام دمية عرض." },
        { title:"التخزين والتدريب والحذف", body:"تختلف سياسات الخدمات. تذكر سياسة Photoroom الحالية إمكان استخدام الصور المرفوعة عبر التطبيق لتحسين النماذج وتدريبها مع خيار للانسحاب؛ ولا يصح تعميم ذلك على كل خدمة." },
        { title:"نتيجة تظل بملابس ظاهرة", body:"صف اللباس الذي تريد إضافته أو استبداله، وافحص الوجه وشكل الجسم والخلفية وعلامات المنتج. لا تجعل الهدف تخمين ما تخفيه الملابس." },
      ],
    },
    comparison: {
      kicker:"04 / خمس مقارنات", heading:"من البحث عن ClothOff AI إلى مهمة أزياء واضحة",
      description:"الخياران الأولان طريقتا عمل وليسا علامتين تجاريتين. أما المنتجات الثلاثة الأخرى فلكل منها وظائف وشروط مستقلة.",
      columns:{ option:"الخيار", fit:"الاستخدام الأنسب", distinction:"فرق مهم", article:"المقارنة" },
      baseline:{ label:"موضوع البحث ClothOff AI", fit:"فهم مخاطر الموافقة والخصوصية والصور المركّبة", distinction:"هذا الموقع لا يرفع الصور ولا يزيل الملابس منها" },
      options:{
        "clothoff-ai-vs-ai-outfit-changer":{ label:"تغيير الملابس بالذكاء الاصطناعي", fit:"استبدال قطعة ظاهرة", distinction:"فئة من أساليب التحرير وليست مزوّداً واحداً", cta:"قارن تغيير الملابس" },
        "clothoff-ai-vs-virtual-try-on":{ label:"التجربة الافتراضية", fit:"معاينة قطعة قبل الشراء", distinction:"الصورة لا تضمن المقاس أو الملاءمة", cta:"قارن التجربة الافتراضية" },
        "clothoff-ai-vs-adobe-firefly":{ label:"Adobe Firefly", fit:"تعديل منطقة محددة في الصورة", distinction:"تحقق من قواعد الاستخدام وبيانات المنشأ بحسب نوع التصدير", cta:"قارن Firefly" },
        "clothoff-ai-vs-canva-magic-edit":{ label:"Canva Magic Edit", fit:"تغيير اللباس أو الخلفية ضمن تصميم", distinction:"حقوق الصورة الأصلية لا تزول بعد التعديل", cta:"قارن Canva" },
        "clothoff-ai-vs-photoroom":{ label:"Photoroom", fit:"صور المنتجات والعارضون الاصطناعيون", distinction:"التطبيق وواجهة التجربة المخصصة للشركات مختلفان", cta:"قارن Photoroom" },
      },
    },
    research: {
      kicker:"05 / أسس القرار", heading:"الغرض والحقوق ومصير الصورة أولاً",
      description:"عبارة «محرّر صور بالذكاء الاصطناعي» لا تكشف من يظهر في الصورة أو أين تُحفظ أو ماذا سينتج عنها.",
      blocks:[
        { heading:"ميّز بين الموقع التوعوي والخدمة", paragraphs:["قد تجد عند البحث عن ClothOff AI أداة أو مراجعة أو مادة توعوية مستقلة. يشرح هذا الموقع المخاطر والبدائل المصرح بها، لكنه لا يعالج صور الأشخاص ولا يمثل خدمة توليد.","في مشروع أزياء، حدّد أولاً قطعة الملابس الظاهرة المطلوبة والمواد التي تملك حق استخدامها. كثرة الوظائف لا تعوّض غياب إذن صاحب الصورة وموافقة الشخص المصوّر."] },
        { heading:"التجربة الافتراضية ليست قياساً حقيقياً", paragraphs:["قد تساعد على تخيل اللون والتصميم، لكن Google Shopping يوضح أن الصورة المولّدة لا تضمن ملاءمة القطعة فعلياً. راجع المقاسات والخامة والآراء وشروط الإرجاع.","في صور المنتجات، افحص الياقة والخياطة والنقوش والشعار. صورة جذابة تغيّر تفاصيل السلعة قد تمنح المشتري انطباعاً خاطئاً."] },
        { heading:"الخصوصية تختلف من خدمة لأخرى", paragraphs:["اسأل عن مدة حفظ الأصل والنتيجة، واستخدامهما لتحسين النماذج، والجهات التي تعالجهما، وطريقة الحذف. قد تختلف شروط واجهة الشركات عن شروط تطبيق المستهلكين.","في مرحلة الفكرة قد تكفي صورة القطعة أو دمية عرض أو عارض اصطناعي مرخّص من دون إرسال صورة شخصية. وإذا كان شخص حقيقي قابلاً للتعرّف، فاتفق معه على التعديل والنشر على نحو محدد."] },
      ],
    },
    blog:{ kicker:"06 / مقالات المقارنة", heading:"قارن الخيارات قبل إرسال الصورة", cta:"اقرأ المقارنات الخمس" },
    faq:{
      kicker:"07 / أسئلة شائعة", heading:"خمس إجابات عن ClothOff AI",
      items:[
        { question:"هل يزيل هذا الموقع الملابس من الصور؟", answer:"لا. إنه موقع معلومات مستقل من دون رفع صور أو أداة لتوليدها." },
        { question:"أريد معاينة إطلالة أخرى، فما البديل؟", answer:"قارن تغيير الملابس بالذكاء الاصطناعي والتجربة الافتراضية وصور المنتجات على دمية عرض أو عارض اصطناعي. صورة الشخص الحقيقي تحتاج إلى حقوق وموافقة محددة." },
        { question:"هل يمكن تعديل صورة شخص منشورة على الشبكات؟", answer:"النشر لا يمنح إذناً بالتعديل بالذكاء الاصطناعي. تحقق من حقوق الصورة وموافقة الشخص على التغيير ونشر النتيجة." },
        { question:"هل تحدد التجربة الافتراضية المقاس المناسب؟", answer:"إنها تصور تقريبي لا قياس مضمون. راجع جدول المقاسات ووصف السلعة وآراء المشترين وسياسة الإرجاع." },
        { question:"ماذا أقرأ في سياسة خصوصية محرّر الصور؟", answer:"طريقة حفظ الصور الأصلية والنتائج، واستخدامها في التدريب، ومشاركتها، وحذفها، وإعدادات ظهورها الافتراضية. تختلف الإجابات حسب الخدمة." },
      ],
    },
    final:{ heading:"صورة أزياء جيدة تبدأ بالموافقة", description:"اختر مواد واضحة الحقوق وهدفاً يُظهر الملابس بدلاً من إزالتها. قبل رفع أي صورة، تعرّف إلى ما تقدمه الخيارات الخمسة وما لا تضمنه.", cta:"قارن الأساليب المسؤولة" },
  },
};
