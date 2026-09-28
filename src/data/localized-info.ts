import type { InfoPageKey, Locale } from "./locales";

export interface InfoCopy {
  title: string;
  description: string;
  lead: string;
  blocks: [string, string][];
}

// Source-only drafts. The full set of 45 information pages must be complete
// and checked before any locale route or alternate-language link is published.
export const localizedInfo: Partial<Record<Locale, Record<InfoPageKey, InfoCopy>>> = {
  ja: {
    about: {
      title: "このサイトについて",
      description: "ClothOff AI を扱う独立情報サイトの目的、画像の同意、安全なファッション編集と五つの比較記事の位置づけ。",
      lead: "このサイトは画像を加工するサービスではなく、写真に写る人の同意を起点に選択肢を整理する出版物です。",
      blocks: [
        ["独立した立場", "ClothOff AI という検索語に関連するプライバシーと画像改変の問題を説明します。同名または類似名のツールの公式サイトではありません。画像アップロード、衣服の除去、生成、アカウント登録や決済機能もありません。"],
        ["比較の範囲", "AI着せ替えとバーチャル試着は特定の製品ではなく方法として扱います。Adobe Firefly、Canva Magic Edit、Photoroom はそれぞれ編集操作、デザイン制作、商品画像という異なる用途で検討します。見た目の良し悪しだけでなく権利、保存条件、費用を確認します。"],
        ["答えられないこと", "第三者のツールが安全だと保証したり、生成結果やサイズ適合を実測したかのようには書きません。各社の機能や規約は変わるため、利用前に提供元の現行資料を読んでください。個別の法的助言も提供しません。"],
      ],
    },
    contact: {
      title: "連絡先",
      description: "ClothOff AI の記事に関する訂正、一次資料の更新、肖像権やプライバシーの懸念を伝える際の注意点。",
      lead: "訂正を求める場合は、ページの URL、問題の箇所と確認可能な一次資料を文字で示してください。",
      blocks: [
        ["予定しているメール", "support@clothoffai.fun は予定している編集部アドレスですが、現在は受信設定が確認されていません。到達を前提とする窓口ではないため、緊急の依頼や機密情報を送らないでください。"],
        ["画像を送らない", "訂正依頼に本人の写真、身分証、非公開の画像、AIプロンプトは不要です。無断改変画像が問題なら、その画像そのものを再配布せず、公開可能な範囲で該当ページと懸念を説明してください。"],
        ["製品への問い合わせ", "Adobe、Canva、Photoroom その他の製品におけるアカウント、料金、画像削除の相談は、それぞれの提供元へ。当サイトは外部サービスのデータにアクセスしたり削除したりできません。"],
      ],
    },
    "editorial-policy": {
      title: "編集方針",
      description: "ClothOff AI の比較記事における一次資料、独自の判断基準、同意の境界、訂正と更新の方法。",
      lead: "検索語を繰り返すのではなく、読者が画像を送る前に必要な判断をできる記事を作ります。",
      blocks: [
        ["記事ごとに異なる問い", "着せ替えは見える服の差し替え、試着は買い物の参考、Firefly は選択範囲編集、Canva はデザイン制作、Photoroom は商品画像とアップロード条件を中心に書きます。最初の二つを企業名のようには扱いません。"],
        ["根拠と限界", "製品の機能、規約、データ処理については提供元の資料を優先して示します。Photoroom のアプリ画像と企業向け API の条件を混同せず、Adobe の Content Credentials がすべての編集に自動付与されるとも断言しません。未実施の比較を実測結果として発表しません。"],
        ["安全と訂正", "実在人物の同意がない性的な画像改変、未成年者の画像利用、回避手順は扱いません。問題を見つけたら、該当文と一次資料を確認して訂正し、結論が変わる重要な更新は記事の更新情報へ反映します。AI支援の草稿も公開前に内容と重複を確認します。"],
      ],
    },
    privacy: {
      title: "プライバシー",
      description: "静的な clothoffai.fun の配信データ、画像を受け取らない仕組み、同意制 Google Analytics と外部リンクについて。",
      lead: "当サイトには画像アップロード、生成、ユーザーアカウント、チャット、決済の機能がありません。",
      blocks: [
        ["ページ配信", "ホスティングとセキュリティの提供元は、ページ配信や不正アクセス対策のため IP アドレス、アクセス時刻、要求 URL、ブラウザー情報などを処理することがあります。当サイトは訪問者の写真やプロンプトを収集・保存しません。"],
        ["許可後の解析", "Google Analytics 4 は許可を選んだ後にのみ読み込み、閲覧、スクロール、外部リンク、端末や参照元を測定します。広告パーソナライズと Google シグナルは使いません。選択はブラウザー内に最長180日保存され、各ページ下部から撤回できます。Global Privacy Control と Do Not Track を尊重します。"],
        ["Cookie、国外処理、外部サイト", "撤回時にはこのドメインから削除できる解析 Cookie を消しますが、Google が過去に処理したデータは消せません。データは国外で処理される可能性があります。外部の編集製品へ移動した後は、その運営元のプライバシー文書を確認してください。"],
      ],
    },
    terms: {
      title: "利用条件",
      description: "ClothOff AI の独立情報サイトの利用範囲、画像改変の安全上の制限、外部サービスと著作物について。",
      lead: "この出版物の文章は教育・比較のための情報であり、外部サービスの公式規約ではありません。",
      blocks: [
        ["判断の限界", "記事は法律、医療、その他の個別助言ではなく、第三者の安全性や利用可能性も保証しません。製品の機能、料金、ライセンスや規約は変わるため、申し込みやアップロードの前に現行の提供元資料を確認してください。"],
        ["責任ある利用", "本人の同意のない親密画像の合成、年齢が不明な人物や未成年者の性的描写、嫌がらせ、なりすまし、恐喝、権利侵害のために当サイトの内容を利用しないでください。ファッション編集でも、元写真の権利と本人の同意が必要です。"],
        ["独自コンテンツとリンク先", "当サイト独自の文章、比較方法、レイアウト、画像を許可なく大量再配布しないでください。引用は適用法と出典表示に従ってください。外部リンク先の利用、支払い、保存、削除にはその運営元の条件が適用されます。"],
      ],
    },
  },
  ko: {
    about: {
      title: "사이트 소개",
      description: "ClothOff AI를 다루는 독립 정보 사이트의 목적과 동의 중심 이미지 편집, 다섯 비교 글의 범위를 설명합니다.",
      lead: "이곳은 이미지를 처리하는 서비스가 아니라 사진 속 사람의 동의를 출발점으로 선택지를 설명하는 매체입니다.",
      blocks: [
        ["독립적인 출판물", "ClothOff AI라는 검색어와 관련된 사생활·사진 변형 문제를 다룹니다. 같은 이름이나 비슷한 이름을 쓰는 업체의 공식 사이트가 아닙니다. 사진 업로드, 의복 제거, 이미지 생성, 회원 가입, 결제 기능도 없습니다."],
        ["비교하는 다섯 대상", "AI 옷 갈아입히기와 가상 피팅은 특정 제품이 아닌 작업 방식입니다. Adobe Firefly, Canva Magic Edit, Photoroom은 각각 선택 영역 편집, 디자인 제작, 상품 이미지라는 다른 목적에서 살펴봅니다. 결과물뿐 아니라 사용 허락, 저장 정책, 비용을 함께 확인합니다."],
        ["할 수 없는 보증", "외부 서비스의 안전성, 생성 품질, 실제 옷 사이즈의 정확성을 보증하지 않습니다. 직접 수행하지 않은 테스트를 체험담으로 쓰지 않으며 개별 법률 자문도 제공하지 않습니다. 사용 전에는 제공업체의 최신 안내를 확인하세요."],
      ],
    },
    contact: {
      title: "연락처",
      description: "ClothOff AI 기사 정정, 공식 자료 변경, 초상권·개인정보 우려를 안전하게 알리는 방법입니다.",
      lead: "정정 요청에는 페이지 URL, 문제가 되는 문장, 확인 가능한 원자료를 글로 적어 주세요.",
      blocks: [
        ["예정된 메일 주소", "support@clothoffai.fun은 편집 연락처로 계획했지만 현재 수신 설정이 확인되지 않았습니다. 메시지가 도착한다고 가정하지 말고 긴급 사안이나 민감한 자료를 보내지 마세요."],
        ["민감한 사진은 보내지 마세요", "정정에 본인 사진, 신분증, 사적인 이미지나 AI 프롬프트는 필요하지 않습니다. 무단 합성물에 관한 우려라면 이미지를 다시 유포하지 말고 공개 가능한 범위에서 해당 글과 문제를 설명해 주세요."],
        ["제품 지원은 해당 업체에", "Adobe, Canva, Photoroom 등 외부 서비스의 계정, 결제, 업로드 삭제 요청은 각 업체의 지원 채널로 보내야 합니다. 이 사이트는 다른 서비스의 파일을 조회하거나 삭제할 권한이 없습니다."],
      ],
    },
    "editorial-policy": {
      title: "편집 원칙",
      description: "ClothOff AI 비교의 원자료, 서로 다른 평가 기준, 동의·안전 경계, 정정 절차를 설명합니다.",
      lead: "검색어를 반복하기보다 사진을 업로드하기 전에 확인할 근거와 질문을 제공합니다.",
      blocks: [
        ["글마다 다른 질문", "옷 갈아입히기는 보이는 의상 교체, 가상 피팅은 쇼핑 미리보기, Firefly는 선택 영역 편집, Canva는 디자인 흐름, Photoroom은 상품 이미지와 업로드 정책을 다룹니다. 앞의 두 범주를 가상의 회사처럼 소개하지 않습니다."],
        ["근거와 불확실성", "기능·규칙·데이터 처리에 관한 주장은 제공업체의 문서를 우선 인용합니다. Photoroom 앱과 기업용 API의 조건을 구별하고 모든 Firefly 편집물에 출처 정보가 자동으로 붙는다고 단정하지 않습니다. 직접 하지 않은 테스트는 결과처럼 제시하지 않습니다."],
        ["안전과 정정", "동의 없는 실존 인물의 친밀 이미지 합성, 아동이나 나이가 불분명한 사람의 성적 이미지, 안전장치 회피법은 다루지 않습니다. 중요한 오류는 원자료를 확인해 바로잡고 결론이 달라지면 수정 사실을 반영합니다. AI로 정리한 초안도 게시 전에 중복과 근거를 검토합니다."],
      ],
    },
    privacy: {
      title: "개인정보",
      description: "정적 사이트 clothoffai.fun의 접속 데이터, 사진을 받지 않는 구조, 동의 후 Google Analytics와 외부 링크 안내입니다.",
      lead: "이 사이트에는 사진 업로드, 이미지 생성, 계정, 대화창 또는 결제 기능이 없습니다.",
      blocks: [
        ["페이지 제공", "호스팅·보안 업체는 사이트 제공과 보호를 위해 IP 주소, 요청 주소, 시각, 브라우저 정보 같은 기술 데이터를 처리할 수 있습니다. 이 사이트는 방문자의 사진이나 AI 프롬프트를 받거나 저장하지 않습니다."],
        ["동의한 경우의 방문 분석", "Google Analytics 4는 허용을 선택한 뒤에만 로드하며 페이지 방문, 스크롤, 외부 링크, 기기와 유입 경로를 측정합니다. 광고 개인화와 Google 신호는 사용하지 않습니다. 선택은 브라우저에 최대 180일 저장되며 페이지 아래 설정에서 철회할 수 있습니다. Global Privacy Control과 Do Not Track 신호를 존중합니다."],
        ["쿠키와 외부 사이트", "철회하면 이 도메인에서 지울 수 있는 분석 쿠키를 삭제하지만 Google이 이미 처리한 과거 데이터까지 지우는 것은 아닙니다. 국외 처리가 있을 수 있습니다. 외부 편집 서비스로 이동하면 그 업체의 개인정보 안내를 따로 확인하세요."],
      ],
    },
    terms: {
      title: "이용 조건",
      description: "독립적인 ClothOff AI 정보 사이트의 이용 범위, 사진 변형 안전 경계, 저작물과 외부 서비스 조건입니다.",
      lead: "이 글은 교육과 비교를 위한 정보이며 외부 서비스의 공식 이용약관을 대신하지 않습니다.",
      blocks: [
        ["정보의 한계", "글은 개별 법률·의료 조언이 아니며 타사 도구의 안전성이나 이용 가능성을 보증하지 않습니다. 기능, 요금, 라이선스, 규칙은 바뀔 수 있으므로 가입하거나 사진을 보내기 전에 최신 원문을 확인하세요."],
        ["책임 있는 이용", "동의 없는 친밀 이미지 합성, 미성년자 또는 나이가 분명하지 않은 사람의 성적 묘사, 괴롭힘, 사칭, 협박, 초상권 침해에 이 정보를 이용하지 마세요. 일반적인 패션 편집에도 사진 권리와 당사자 동의가 필요합니다."],
        ["원본 콘텐츠와 외부 링크", "이 사이트 고유의 글, 비교 틀, 화면 구성, 사진을 허락 없이 대량 재배포하거나 자신의 것으로 표시하지 마세요. 짧은 인용은 관련 법과 출처 표시를 따라야 합니다. 외부 사이트의 이용·결제·저장·삭제에는 해당 업체의 조건이 적용됩니다."],
      ],
    },
  },
  "zh-hant": {
    about: {
      title: "關於本站",
      description: "說明 ClothOff AI 獨立資訊網站的定位、影像同意原則，以及五篇比較文章如何區分用途。",
      lead: "本站不是影像處理服務；我們從照片當事人的同意出發，整理較負責任的時尚影像選項。",
      blocks: [
        ["獨立資訊網站", "本站解釋 ClothOff AI 搜尋字詞牽涉的隱私和影像變造風險，並非任何同名或近名服務的官方網站。不提供照片上傳、移除衣物、生成圖片、帳號或付款功能。"],
        ["五種不同的比較", "AI 換裝與虛擬試穿在這裡是作業類別，不是兩家公司。Adobe Firefly、Canva Magic Edit、Photoroom 則分別從區域編輯、設計製作和商品影像出發。除了效果，也評估授權、資料保存和可能支出。"],
        ["不作出的保證", "本站不能保證第三方工具安全、生成圖片符合預期，或試穿預覽等於真實尺寸。不把尚未實測的結果寫成體驗報告，也不提供個別法律意見。使用前請查閱供應商最新資料。"],
      ],
    },
    contact: {
      title: "聯絡方式",
      description: "如何反映 ClothOff AI 文章錯誤、第一手資料更新、肖像權或隱私疑慮，並避免傳送敏感圖片。",
      lead: "提出更正時，請用文字標明頁面網址、需要修正的內容及可核對的原始資料。",
      blocks: [
        ["預定信箱", "support@clothoffai.fun 是規劃中的編輯聯絡地址，目前尚未確認收信設定。不要假設郵件一定送達，也請勿傳送緊急請求或機密資料。"],
        ["毋須提供私人照片", "更正文章不需要身分證件、個人照片、私密影像或 AI 提示詞。若涉及未經同意的合成影像，請勿再次散布圖片；只需在可公開的範圍內描述頁面和疑慮。"],
        ["產品問題請找原廠", "Adobe、Canva、Photoroom 等第三方服務的帳戶、付款及上傳圖片刪除，應向各自的官方支援提出。本站無法讀取或刪除其他服務所保存的資料。"],
      ],
    },
    "editorial-policy": {
      title: "編輯政策",
      description: "ClothOff AI 比較文章的一手來源、不同評估角度、影像同意界線，以及修正流程。",
      lead: "文章要協助讀者在送出圖片之前做判斷，而不是重複堆砌搜尋字詞。",
      blocks: [
        ["每篇回答不同問題", "換裝談可見衣物的替換；試穿談購物預覽；Firefly 談選取區域編輯；Canva 談設計流程；Photoroom 談商品圖及上傳政策。前兩者不會被當成具特定價格或隱私承諾的品牌。"],
        ["證據與不確定性", "涉及功能、使用規範和資料處理的陳述優先引用供應商原文。Photoroom 網頁應用與企業 API 的條件分開看；也不聲稱每張 Firefly 編輯圖都自動帶有內容憑證。未進行的測試僅作為讀者可採用的方法，不冒充結果。"],
        ["安全與更正", "本站不提供無同意的親密影像合成、未成年人或年齡不明者的性化影像，以及規避防護的方法。接獲具體錯誤時會核對原始資料並修正；若結論改變，應反映在文章更新資訊。AI 輔助草稿也必須檢查來源、用途和重複性。"],
      ],
    },
    privacy: {
      title: "隱私",
      description: "靜態網站 clothoffai.fun 的技術連線資料、不收照片的設計、須先同意的 Google Analytics 與外部連結。",
      lead: "本站沒有圖片上傳、生成、會員帳號、聊天或付款功能。",
      blocks: [
        ["網站傳送與防護", "主機和安全服務可能為了傳送頁面、防範濫用而處理 IP 位址、瀏覽器資料、請求網址和時間。本站不接收、處理或保存訪客照片與 AI 提示詞。"],
        ["同意後才啟用分析", "只有選擇允許後，才會載入 Google Analytics 4，記錄造訪、捲動、外連點擊、裝置及來源資訊。不啟用廣告個人化或 Google 信號。選擇最多在瀏覽器保存 180 天，可從各頁底部撤回；本站尊重 Global Privacy Control 與 Do Not Track 訊號。"],
        ["Cookie 與外部網站", "撤回同意後會清除本站可控制的分析 Cookie，但無法因此刪除 Google 過去已處理的資料。資料可能在境外處理。離開本站前往影像工具時，請另讀該服務自己的隱私政策。"],
      ],
    },
    terms: {
      title: "使用條款",
      description: "ClothOff AI 獨立資訊網站的教育用途、影像改變的安全界線、原創內容與第三方連結條件。",
      lead: "本站內容提供比較與教育資訊，不是任何外部影像服務的官方條款。",
      blocks: [
        ["資訊的限制", "文章不是個別法律或醫療建議，也不保證第三方工具安全、可用或符合特定目的。功能、價格、授權及規範可能變更；註冊、付款或上傳照片前，請核對供應商最新的正式文件。"],
        ["負責任使用", "請勿用本站資訊促成未經同意的親密影像、未成年或年齡不明者的性化呈現、騷擾、冒名、勒索或侵犯影像權利。即使是一般時尚編輯，也需要原始照片權利與當事人同意。"],
        ["原創作品與外連", "未經允許，不得大量重製本站原創文字、比較方法、版面或圖片，亦不得冒稱為自己的作品。簡短引用須遵守適用法律並註明來源。外部服務的使用、付款、保存與刪除，依各自營運者的條件辦理。"],
      ],
    },
  },
  es: {
    about: {
      title: "Acerca de este sitio",
      description: "Qué es esta publicación independiente sobre ClothOff AI, por qué exige consentimiento y cómo organiza sus cinco comparativas de edición de moda.",
      lead: "No somos un editor de imágenes: ayudamos a distinguir una idea de moda legítima de una modificación que vulnera a la persona retratada.",
      blocks: [
        ["Una publicación independiente", "Tratamos las dudas que genera la búsqueda ClothOff AI sobre privacidad, consentimiento y manipulación de fotos. No somos la web oficial de ningún servicio de nombre parecido. No aceptamos imágenes, no eliminamos prendas, no generamos resultados ni ofrecemos cuentas o pagos."],
        ["Cinco comparativas con propósitos distintos", "El cambio de ropa con IA y el probador virtual son tipos de proceso, no dos marcas. Analizamos Adobe Firefly por la edición de zonas seleccionadas, Canva Magic Edit por el diseño de piezas y Photoroom por imágenes de producto y modelos. El criterio incluye derechos sobre la foto, conservación de datos y costes, no solo apariencia."],
        ["Lo que no podemos prometer", "Una vista previa no demuestra la talla real de una prenda; tampoco garantizamos que un tercero sea seguro o apropiado para cada imagen. No presentamos pruebas que no hemos realizado como experiencias propias. Revisa la documentación actual del proveedor y solicita asesoramiento profesional para cuestiones jurídicas particulares."],
      ],
    },
    contact: {
      title: "Contacto",
      description: "Cómo comunicar una corrección, un cambio en fuentes oficiales o un problema de imagen y privacidad relacionado con ClothOff AI.",
      lead: "Para pedir una corrección, indica la URL, el fragmento concreto y una fuente original que permita comprobarlo.",
      blocks: [
        ["Dirección prevista", "support@clothoffai.fun es el correo editorial previsto, pero todavía no se ha confirmado que pueda recibir mensajes. No lo consideres un canal operativo para asuntos urgentes y no envíes información confidencial."],
        ["No envíes fotos sensibles", "Para revisar un artículo no hacen falta documentos de identidad, fotos personales, imágenes íntimas ni instrucciones de IA. Si denuncias una imagen alterada sin permiso, evita volver a difundirla; describe por escrito la página y el problema con el mínimo de datos necesario."],
        ["Soporte de otras empresas", "Las cuentas, facturas y solicitudes de borrado de Adobe, Canva, Photoroom u otro editor deben dirigirse al proveedor correspondiente. No podemos consultar ni eliminar archivos guardados por terceros."],
      ],
    },
    "editorial-policy": {
      title: "Política editorial",
      description: "Criterios de ClothOff AI para fuentes originales, comparativas diferenciadas, consentimiento, seguridad, correcciones y actualización de artículos.",
      lead: "Publicamos para ayudar a decidir antes de subir una foto, no para multiplicar páginas que repiten una palabra clave.",
      blocks: [
        ["Una pregunta diferente por artículo", "El cambio de ropa se centra en sustituir prendas visibles; el probador virtual, en visualizar compras; Firefly, en la edición por selección; Canva, en el trabajo de diseño; Photoroom, en fotos de producto y condiciones de carga. Las dos primeras son categorías, no empresas con una tarifa o política uniforme."],
        ["Fuentes y límites de las afirmaciones", "Priorizamos páginas y políticas del proveedor para características, derechos y tratamiento de datos. Distinguimos la aplicación de Photoroom de su API empresarial y no afirmamos que toda edición en Firefly lleve automáticamente credenciales de contenido. Una prueba sugerida al lector no se presenta como resultado medido por nosotros."],
        ["Seguridad y correcciones", "No damos métodos para crear imágenes íntimas de personas reales sin consentimiento, sexualizar menores o eludir protecciones. Si una afirmación es incorrecta, revisamos el fragmento y su fuente primaria; una corrección que cambie la conclusión debe reflejarse en la actualización del artículo. Los borradores asistidos por IA pasan revisión de utilidad, fuentes y duplicación."],
      ],
    },
    privacy: {
      title: "Privacidad",
      description: "Datos técnicos de la web estática clothoffai.fun, ausencia de subida de fotos, Google Analytics por consentimiento y enlaces externos.",
      lead: "Esta web no tiene cuentas, generador de imágenes, chat, pagos ni formulario para subir fotografías.",
      blocks: [
        ["Entrega y protección de páginas", "El proveedor de alojamiento y seguridad puede tratar datos técnicos como dirección IP, URL solicitada, hora y navegador para entregar el sitio y prevenir abusos. Nosotros no recibimos ni almacenamos imágenes o instrucciones de edición de los visitantes."],
        ["Medición solo si das permiso", "Google Analytics 4 se carga después de aceptar. Puede medir páginas vistas, desplazamiento, clics salientes, dispositivo y procedencia; no activamos personalización publicitaria ni Google signals. La preferencia se guarda en el navegador hasta 180 días y puede retirarse desde el pie de cualquier página. Respetamos Global Privacy Control y Do Not Track."],
        ["Cookies y webs externas", "Al retirar el consentimiento borramos las cookies de analítica accesibles desde este dominio, pero no los datos que Google ya haya tratado. El tratamiento puede ocurrir fuera de tu país. Antes de subir una imagen en un editor externo, consulta la política de privacidad de ese operador."],
      ],
    },
    terms: {
      title: "Condiciones de uso",
      description: "Uso educativo de la publicación independiente ClothOff AI, límites de manipulación de imágenes, contenido original y servicios externos.",
      lead: "Estos artículos sirven para informarse y comparar; no sustituyen las condiciones oficiales de ningún editor externo.",
      blocks: [
        ["Alcance de la información", "El contenido no es asesoramiento jurídico o médico individual ni garantiza la seguridad o disponibilidad de un tercero. Funciones, precios, licencias y políticas cambian. Contrasta los documentos vigentes del proveedor antes de contratar o subir una foto."],
        ["Uso responsable", "No utilices este sitio para facilitar imágenes íntimas sin consentimiento, contenido sexual de menores o personas de edad dudosa, acoso, suplantación, extorsión o vulneración de derechos de imagen. Incluso una edición de moda ordinaria requiere permiso de la persona retratada y derechos sobre la foto original."],
        ["Derechos y enlaces", "No reproduzcas en bloque nuestros textos, criterios comparativos, diseño o recursos visuales sin autorización ni los presentes como propios. Las citas breves deben respetar la ley aplicable y atribuir la fuente. Los servicios enlazados se rigen por sus propias reglas de uso, cobro, conservación y borrado."],
      ],
    },
  },
  "pt-br": {
    about: {
      title: "Sobre este site",
      description: "Conheça a publicação independente sobre ClothOff AI, seu foco em consentimento e o propósito de cada uma das cinco comparações de moda.",
      lead: "Não somos um editor de imagens; explicamos como avaliar uma ideia de moda sem violar a autonomia da pessoa fotografada.",
      blocks: [
        ["Publicação independente", "Tratamos das dúvidas ligadas à busca ClothOff AI sobre privacidade, consentimento e manipulação de fotos. Não somos o site oficial de nenhum serviço com nome parecido. Não recebemos imagens, não removemos roupas, não geramos resultados nem oferecemos contas ou pagamento."],
        ["Cinco comparações diferentes", "Troca de roupa com IA e provador virtual são tipos de processo, não marcas. Adobe Firefly é avaliado pela edição de áreas selecionadas, Canva Magic Edit pelo design de peças, e Photoroom pelas imagens de produtos e modelos. Direitos da foto, retenção de dados e despesas fazem parte da análise."],
        ["Limites das conclusões", "Uma simulação não confirma o caimento de uma peça; também não garantimos que um serviço de terceiros seja seguro para qualquer imagem. Não apresentamos testes que não realizamos como experiência própria. Confira a documentação atual do fornecedor e procure orientação adequada para questões jurídicas específicas."],
      ],
    },
    contact: {
      title: "Contato",
      description: "Como sugerir correções, apontar mudanças em fontes oficiais ou relatar uma preocupação com imagem e privacidade em ClothOff AI.",
      lead: "Para sugerir uma correção, informe a URL, a frase exata e uma fonte original que permita conferir o ponto.",
      blocks: [
        ["Endereço planejado", "support@clothoffai.fun é o endereço editorial planejado, mas o recebimento de mensagens ainda não foi configurado ou confirmado. Não conte com ele para casos urgentes e não envie dados confidenciais."],
        ["Não compartilhe fotos sensíveis", "Uma revisão editorial não exige documentos de identidade, retratos pessoais, imagens íntimas nem comandos de IA. Se a questão envolve uma imagem alterada sem permissão, evite divulgá-la de novo; descreva por escrito a página e o problema com o mínimo de dados necessário."],
        ["Suporte dos produtos", "Contas, cobrança e pedidos de exclusão em Adobe, Canva, Photoroom ou outro editor devem ser enviados ao suporte da própria empresa. Não conseguimos acessar nem apagar arquivos mantidos por serviços externos."],
      ],
    },
    "editorial-policy": {
      title: "Política editorial",
      description: "Padrões de ClothOff AI para fontes primárias, comparações diferentes, consentimento, segurança, correções e atualização.",
      lead: "O objetivo é ajudar o leitor antes de enviar uma foto, não publicar páginas repetidas para ocupar resultados de busca.",
      blocks: [
        ["Uma questão para cada texto", "Troca de roupa considera peças que continuam visíveis; provador virtual trata de visualização para compras; Firefly, de edição por seleção; Canva, de design; Photoroom, de imagens de produto e regras para uploads. As duas primeiras opções são categorias, não empresas com preços ou políticas uniformes."],
        ["Evidência e incerteza", "Quando falamos de recursos, direitos ou tratamento de dados, priorizamos a documentação de cada fornecedor. Distinguimos o aplicativo do Photoroom de sua API empresarial e não dizemos que toda edição no Firefly recebe automaticamente Content Credentials. Um teste sugerido ao leitor não é apresentado como resultado que medimos."],
        ["Segurança e correções", "Não fornecemos instruções para imagens íntimas de pessoas reais sem consentimento, sexualização de menores ou desvio de proteções. Ao receber uma correção, conferimos o trecho e a fonte original; uma mudança relevante de conclusão deve aparecer na atualização do artigo. Rascunhos auxiliados por IA também são revisados quanto a utilidade, fontes e duplicação."],
      ],
    },
    privacy: {
      title: "Privacidade",
      description: "Dados técnicos do site estático clothoffai.fun, ausência de envio de fotos, Google Analytics com consentimento e links externos.",
      lead: "Este site não tem conta de usuário, gerador de imagens, bate-papo, pagamento nem envio de fotografias.",
      blocks: [
        ["Entrega e proteção", "O serviço de hospedagem e segurança pode processar IP, URL solicitada, horário e informações do navegador para entregar as páginas e combater abusos. Nós não recebemos nem armazenamos fotos ou comandos de edição dos visitantes."],
        ["Análise somente após autorização", "Google Analytics 4 é carregado depois de você permitir. Pode medir páginas, rolagem, cliques externos, dispositivo e origem da visita; não ativamos personalização de anúncios nem Google signals. A preferência fica no navegador por até 180 dias e pode ser retirada no rodapé de qualquer página. Respeitamos Global Privacy Control e Do Not Track."],
        ["Cookies e sites externos", "Ao retirar a permissão, apagamos os cookies de análise acessíveis neste domínio, não os dados que o Google já processou. Esse processamento pode ocorrer fora do seu país. Antes de enviar uma imagem para um editor externo, leia a política de privacidade dele."],
      ],
    },
    terms: {
      title: "Termos de uso",
      description: "Uso educacional da publicação ClothOff AI, limites de edição de imagens, direitos do conteúdo original e condições de terceiros.",
      lead: "Os artigos informam e comparam; não substituem os termos oficiais de nenhum serviço externo.",
      blocks: [
        ["Limites da informação", "O conteúdo não é orientação jurídica ou médica individual e não garante a segurança ou disponibilidade de uma ferramenta. Recursos, preços, licenças e políticas podem mudar. Consulte os documentos atuais do fornecedor antes de contratar ou enviar fotos."],
        ["Uso responsável", "Não use o site para facilitar imagens íntimas sem consentimento, conteúdo sexual de menores ou pessoas de idade incerta, assédio, falsa identidade, extorsão ou violação do direito de imagem. Mesmo a edição de moda comum exige autorização da pessoa e direitos sobre a fotografia."],
        ["Conteúdo e links", "Não copie em massa nossos textos, critérios, layout ou imagens sem permissão nem os apresente como seus. Citações curtas devem respeitar a lei aplicável e indicar a fonte. Serviços externos têm suas próprias regras de uso, cobrança, retenção e exclusão."],
      ],
    },
  },
  ru: {
    about: {
      title: "О проекте",
      description: "Независимый сайт о ClothOff AI: зачем нужно согласие на изменение фото и чем отличаются пять сравнений модных редакторов.",
      lead: "Мы не редактируем изображения. Наша задача — помочь выбрать допустимый модный сценарий, не нарушая права человека на фотографии.",
      blocks: [
        ["Независимое издание", "Мы разбираем вопросы приватности, согласия и обработки снимков, связанные с запросом ClothOff AI. Это не официальный сайт одноимённого либо похожего сервиса. Здесь нельзя загрузить фото, удалить одежду, создать изображение, завести аккаунт или оплатить подписку."],
        ["Разные предметы сравнения", "Замена одежды и виртуальная примерка — способы работы, а не конкретные бренды. Adobe Firefly изучается как редактор выделенной области, Canva Magic Edit — как часть дизайнерского процесса, Photoroom — как инструмент товарных изображений и моделей. Помимо внешнего вида важны права на фото, хранение данных и расходы."],
        ["Чего мы не гарантируем", "Примерка на экране не подтверждает реальный размер вещи. Мы не можем гарантировать безопасность стороннего продукта и не выдаём непроведённые испытания за личный опыт. Перед использованием проверьте текущие документы поставщика; за индивидуальным юридическим советом обратитесь к специалисту."],
      ],
    },
    contact: {
      title: "Контакты",
      description: "Как сообщить об ошибке, изменении первоисточника или проблеме с правами на изображение и приватностью в материалах ClothOff AI.",
      lead: "Для исправления укажите адрес страницы, спорный фрагмент и первоисточник, по которому его можно проверить.",
      blocks: [
        ["Планируемый адрес", "support@clothoffai.fun указан как будущая редакционная почта, но приём сообщений пока не подтверждён. Не считайте его действующим срочным каналом и не отправляйте конфиденциальные сведения."],
        ["Не присылайте личные фото", "Для проверки статьи не нужны документы, частные снимки, интимные изображения или запросы к ИИ. Если вас беспокоит изображение, изменённое без разрешения, не распространяйте его повторно: опишите проблему текстом и оставьте только необходимые сведения."],
        ["Поддержка внешних продуктов", "Вопросы аккаунта, оплаты и удаления файлов в Adobe, Canva, Photoroom или другом редакторе направляйте соответствующему поставщику. У нас нет доступа к его пользовательским данным и возможности их удалить."],
      ],
    },
    "editorial-policy": {
      title: "Редакционная политика",
      description: "Первоисточники, разные критерии сравнений ClothOff AI, согласие на обработку фото, безопасность и порядок исправлений.",
      lead: "Материалы должны помогать принять решение до загрузки снимка, а не механически повторять поисковую фразу.",
      blocks: [
        ["Разные вопросы для пяти статей", "Замена одежды касается видимых предметов гардероба; примерка — покупки; Firefly — выделения и редактирования областей; Canva — дизайнерского процесса; Photoroom — товарных кадров и загруженных файлов. Первые два пункта — категории, а не вымышленные поставщики с единой ценой."],
        ["Подтверждаемые утверждения", "О функциях, правилах и данных пишем со ссылкой на документы поставщика. Различаем приложение и корпоративный API Photoroom, не утверждаем, что каждый отредактированный файл Firefly автоматически получает Content Credentials. Рекомендованный тест не называем собственным измерением."],
        ["Границы и исправления", "Мы не даём инструкций по созданию интимных подделок без согласия, сексуализации несовершеннолетних или обходу защит. Обнаруженные ошибки сверяем с первоисточником; существенное изменение вывода отражаем в информации об обновлении статьи. Черновики с участием ИИ проходят проверку на полезность, доказательства и повторы."],
      ],
    },
    privacy: {
      title: "Конфиденциальность",
      description: "Технические данные статического сайта clothoffai.fun, отсутствие загрузки фото, Google Analytics по согласию и переходы на внешние сайты.",
      lead: "Здесь нет загрузки изображений, генератора, пользовательского кабинета, чата или оплаты.",
      blocks: [
        ["Доставка и защита страниц", "Хостинг и служба безопасности могут обрабатывать IP-адрес, запрошенный URL, время и сведения о браузере, чтобы показать страницу и противодействовать злоупотреблениям. Мы не получаем и не храним фотографии посетителей или запросы для редактирования."],
        ["Аналитика только после разрешения", "Google Analytics 4 загружается лишь после согласия. Он может учитывать посещённые страницы, прокрутку, переходы по внешним ссылкам, устройство и источник визита. Рекламную персонализацию и Google signals мы не включаем. Выбор хранится в браузере до 180 дней и отзывается внизу любой страницы; сигналы Global Privacy Control и Do Not Track учитываются."],
        ["Cookie и внешние сайты", "После отказа мы удаляем доступные этому домену аналитические cookie, но не можем удалить данные, уже обработанные Google. Обработка возможна за пределами вашей страны. Перед загрузкой файла на сторонний сервис изучите его собственную политику."],
      ],
    },
    terms: {
      title: "Условия использования",
      description: "Образовательное назначение ClothOff AI, ограничения на изменение изображений, права на материалы и правила внешних сервисов.",
      lead: "Эти сравнения носят информационный характер и не заменяют официальные условия сторонних редакторов.",
      blocks: [
        ["Пределы информации", "Материалы не являются индивидуальной юридической или медицинской консультацией и не гарантируют безопасность либо доступность какого-либо сервиса. Функции, цены, лицензии и правила меняются; перед оплатой или загрузкой фото проверьте документы поставщика."],
        ["Ответственное использование", "Не используйте содержание для интимных подделок без согласия, сексуальных изображений детей или лиц неопределённого возраста, травли, выдачи себя за другого, вымогательства и нарушения прав на изображение. Даже обычное модное редактирование требует разрешения человека и прав на исходное фото."],
        ["Оригинальные материалы и ссылки", "Не воспроизводите массово наши тексты, методики сравнения, дизайн и изображения без согласия и не выдавайте их за свои. Краткие цитаты допускаются в рамках применимого права с указанием источника. Оплата, хранение и удаление файлов во внешних сервисах регулируются их собственными условиями."],
      ],
    },
  },
  de: {
    about: {
      title: "Über diese Website",
      description: "Wofür die unabhängige ClothOff AI-Publikation steht, warum Einwilligung zählt und wie sich die fünf Modebild-Vergleiche unterscheiden.",
      lead: "Wir bearbeiten keine Bilder, sondern helfen dabei, erlaubte Modeanwendungen von Eingriffen in die Rechte abgebildeter Personen zu unterscheiden.",
      blocks: [
        ["Unabhängige Einordnung", "Wir behandeln Fragen zu Privatsphäre, Einwilligung und Bildmanipulation rund um die Suche nach ClothOff AI. Dies ist nicht die offizielle Website eines gleich oder ähnlich benannten Dienstes. Es gibt weder Bild-Upload noch Kleiderentfernung, Bildgenerierung, Nutzerkonten oder Zahlungen."],
        ["Fünf verschiedene Vergleiche", "KI-Outfit-Wechsel und virtuelle Anprobe sind Arbeitsweisen, keine konkreten Anbieter. Adobe Firefly betrachten wir beim Bearbeiten ausgewählter Bereiche, Canva Magic Edit im Designablauf und Photoroom bei Produktbildern und Mode-Models. Bildrechte, Datenverarbeitung und Kosten zählen neben der Optik."],
        ["Grenzen unserer Aussagen", "Eine Vorschau belegt keine tatsächliche Passform; wir garantieren auch nicht, dass ein Drittanbieter für jedes Foto sicher ist. Nicht durchgeführte Tests werden nicht als eigene Erfahrung dargestellt. Prüfen Sie die aktuellen Anbieterunterlagen und holen Sie für individuelle Rechtsfragen fachlichen Rat ein."],
      ],
    },
    contact: {
      title: "Kontakt",
      description: "Hinweise auf Fehler, geänderte Originalquellen sowie Bildrechts- oder Datenschutzprobleme in ClothOff AI-Artikeln.",
      lead: "Nennen Sie für eine Korrektur die Seiten-URL, die betreffende Aussage und eine überprüfbare Primärquelle.",
      blocks: [
        ["Geplante E-Mail-Adresse", "support@clothoffai.fun ist als redaktionelle Adresse vorgesehen, doch der Empfang wurde noch nicht eingerichtet beziehungsweise bestätigt. Verlassen Sie sich bei dringenden Anliegen nicht darauf und senden Sie keine vertraulichen Daten."],
        ["Keine sensiblen Bilder schicken", "Für die Prüfung eines Artikels benötigen wir weder Ausweise noch private Fotos, intime Bilder oder KI-Prompts. Bei unbefugter Bildmanipulation sollten Sie das Bild nicht erneut verbreiten, sondern den betroffenen Text und das Problem mit möglichst wenigen personenbezogenen Angaben beschreiben."],
        ["Produktsupport anderer Unternehmen", "Fragen zu Konten, Rechnungen oder dem Löschen von Bildern bei Adobe, Canva, Photoroom oder anderen Editoren gehören an deren jeweilige Supportstellen. Wir können Dateien bei externen Diensten weder einsehen noch löschen."],
      ],
    },
    "editorial-policy": {
      title: "Redaktionsgrundsätze",
      description: "Primärquellen, unterschiedliche Vergleichsmaßstäbe, Einwilligung, Sicherheit und Korrekturen bei ClothOff AI.",
      lead: "Ein Beitrag soll vor einem Bild-Upload zu einer informierten Entscheidung verhelfen, statt Suchbegriffe lediglich zu vervielfachen.",
      blocks: [
        ["Je Artikel eine eigene Frage", "Outfit-Wechsel behandelt sichtbare Kleidungsstücke, virtuelle Anprobe eine Kaufvorschau, Firefly Auswahlbearbeitung, Canva den Designprozess und Photoroom Produktbilder samt Upload-Regeln. Die ersten beiden Begriffe sind Kategorien und keine fiktiven Firmen mit einheitlichem Preis."],
        ["Belege und Unsicherheit", "Bei Funktionen, Nutzungsregeln und Bilddaten ziehen wir die Dokumentation des Anbieters heran. Photoroom-App und Unternehmens-API unterscheiden sich; außerdem behaupten wir nicht, dass jede Firefly-Bearbeitung automatisch Content Credentials erhält. Ein vorgeschlagener Test wird nicht als eigene Messung ausgegeben."],
        ["Sicherheit und Berichtigungen", "Wir liefern keine Anleitung für intime Bildfälschungen ohne Einwilligung, sexualisierte Darstellungen Minderjähriger oder die Umgehung von Schutzmaßnahmen. Fehler prüfen wir anhand der Primärquelle; ändert eine Korrektur das Fazit, wird die Aktualisierung des Artikels angepasst. KI-unterstützte Entwürfe werden auf Nutzen, Quellen und Doppelungen geprüft."],
      ],
    },
    privacy: {
      title: "Datenschutz",
      description: "Technische Daten der statischen Website clothoffai.fun, keine Foto-Uploads, einwilligungsabhängiges Google Analytics und externe Links.",
      lead: "Diese Website bietet weder Bild-Upload oder Generierung noch Konten, Chat oder eine Bezahlfunktion.",
      blocks: [
        ["Auslieferung und Schutz", "Hosting- und Sicherheitsdienstleister können IP-Adresse, angeforderte URL, Zeitpunkt und Browserdaten verarbeiten, um Seiten auszuliefern und Missbrauch zu verhindern. Wir nehmen keine Fotos oder Bearbeitungs-Prompts von Besucherinnen und Besuchern entgegen."],
        ["Analyse erst nach Zustimmung", "Google Analytics 4 wird erst nach einer positiven Auswahl geladen und kann Seitenaufrufe, Scrollen, externe Links, Geräte und Herkunft erfassen. Werbepersonalisierung und Google signals sind nicht aktiviert. Die Einstellung bleibt bis zu 180 Tage im Browser und lässt sich unten auf jeder Seite widerrufen. Global Privacy Control und Do Not Track werden beachtet."],
        ["Cookies und fremde Websites", "Nach Widerruf entfernen wir die von dieser Domain erreichbaren Analyse-Cookies, nicht jedoch Daten, die Google schon verarbeitet hat. Eine Verarbeitung außerhalb Ihres Landes ist möglich. Vor dem Hochladen eines Bildes bei einem externen Anbieter lesen Sie dessen eigene Datenschutzhinweise."],
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      description: "Bildungszweck der ClothOff AI-Publikation, Grenzen bei Bildmanipulation, Rechte an Inhalten und Bedingungen externer Dienste.",
      lead: "Die Vergleiche dienen der Information und sind nicht die offiziellen Bedingungen eines verlinkten Bilddienstes.",
      blocks: [
        ["Informationsgrenzen", "Die Beiträge sind keine individuelle Rechts- oder medizinische Beratung und garantieren weder Sicherheit noch Verfügbarkeit eines Drittanbieters. Funktionen, Preise, Lizenzen und Regeln können sich ändern. Prüfen Sie die aktuellen Unterlagen vor einer Zahlung oder dem Hochladen eines Fotos."],
        ["Verantwortliche Nutzung", "Nutzen Sie diese Informationen nicht für intime Fälschungen ohne Zustimmung, sexualisierte Bilder Minderjähriger oder altersunklarer Personen, Belästigung, Identitätsmissbrauch, Erpressung oder die Verletzung von Bildrechten. Auch bei gewöhnlicher Modebearbeitung sind Einwilligung und Rechte am Ausgangsfoto nötig."],
        ["Eigene Inhalte und Links", "Texte, Vergleichsmethoden, Gestaltung und Bilder dieser Website dürfen ohne Erlaubnis nicht massenhaft übernommen oder als eigene Arbeit ausgegeben werden. Kurze Zitate richten sich nach geltendem Recht und Quellenangabe. Bei externen Diensten gelten deren Regeln für Nutzung, Zahlung, Speicherung und Löschung."],
      ],
    },
  },
  fr: {
    about: {
      title: "À propos de ce site",
      description: "La mission de cette publication indépendante sur ClothOff AI, le consentement et les cinq angles de comparaison des outils de mode.",
      lead: "Nous ne retouchons pas de photos : nous aidons à distinguer un projet de mode autorisé d'une modification qui porte atteinte à la personne représentée.",
      blocks: [
        ["Publication indépendante", "Nous examinons les questions de vie privée, de consentement et de manipulation d'images liées à la recherche ClothOff AI. Il ne s'agit du site officiel d'aucun service au nom identique ou voisin. Aucun dépôt de photo, retrait de vêtement, génération, compte utilisateur ou paiement n'est proposé ici."],
        ["Cinq comparatifs aux objectifs distincts", "Le changement de tenue et l'essayage virtuel sont des types de processus, pas des marques précises. Adobe Firefly est étudié pour l'édition d'une zone sélectionnée, Canva Magic Edit pour le travail graphique et Photoroom pour les images de produits et de mannequins. Les droits sur la photo, la conservation des données et les coûts comptent autant que le rendu."],
        ["Ce que nous ne garantissons pas", "Une prévisualisation ne prouve pas la taille réelle d'un vêtement, et nous ne garantissons pas la sécurité d'un prestataire pour chaque photo. Aucun test non effectué n'est présenté comme une expérience vécue. Consultez les documents actuels du fournisseur et sollicitez un conseil adapté aux questions juridiques individuelles."],
      ],
    },
    contact: {
      title: "Contact",
      description: "Signaler une erreur, une évolution des sources officielles ou un problème de droit à l'image et de confidentialité dans ClothOff AI.",
      lead: "Pour demander une correction, précisez l'adresse de la page, la phrase concernée et une source primaire vérifiable.",
      blocks: [
        ["Adresse envisagée", "support@clothoffai.fun est l'adresse prévue pour la rédaction, mais la réception des messages n'a pas encore été configurée ni confirmée. Ne l'utilisez pas pour une urgence et n'y envoyez pas d'informations confidentielles."],
        ["Pas de photos sensibles", "La vérification d'un article ne nécessite ni pièce d'identité, ni portrait privé, ni image intime, ni consigne pour une IA. Si le problème touche une image modifiée sans autorisation, évitez de la rediffuser ; décrivez plutôt la page et le préjudice avec le minimum de données personnelles."],
        ["Assistance des fournisseurs", "Pour un compte, une facture ou la suppression d'un fichier chez Adobe, Canva, Photoroom ou un autre éditeur, contactez le fournisseur concerné. Nous ne pouvons ni consulter ni supprimer les données stockées par un service tiers."],
      ],
    },
    "editorial-policy": {
      title: "Politique éditoriale",
      description: "Sources primaires, critères de comparaison distincts, consentement, sécurité et rectifications des contenus ClothOff AI.",
      lead: "Chaque article doit éclairer un choix avant l'envoi d'une photo, pas reproduire une page en changeant seulement des mots-clés.",
      blocks: [
        ["Une question par comparatif", "Le changement de tenue concerne les vêtements visibles, l'essayage la prévisualisation d'achat, Firefly l'édition d'une sélection, Canva la création graphique et Photoroom les visuels produits ainsi que les fichiers importés. Les deux premières entrées sont des catégories, non des entreprises fictives avec un tarif commun."],
        ["Preuves et nuances", "Les fonctions, règles et pratiques de traitement sont reliées aux documents du fournisseur. Nous distinguons l'application Photoroom de son API d'entreprise et n'affirmons pas que toute retouche Firefly reçoit automatiquement des Content Credentials. Un protocole suggéré au lecteur n'est pas un test que nous aurions réalisé."],
        ["Sécurité et corrections", "Nous n'indiquons pas comment fabriquer des images intimes sans consentement, sexualiser des mineurs ou contourner une protection. Une erreur est contrôlée avec sa source ; si la conclusion change, la mise à jour de l'article doit le refléter. Les brouillons aidés par IA sont relus pour leur utilité, leurs preuves et leurs répétitions."],
      ],
    },
    privacy: {
      title: "Confidentialité",
      description: "Données techniques du site statique clothoffai.fun, absence de dépôt d'images, Google Analytics soumis au consentement et liens tiers.",
      lead: "Ce site ne propose ni téléversement de photo, ni générateur, ni compte, ni conversation, ni paiement.",
      blocks: [
        ["Diffusion et sécurité", "L'hébergeur et le prestataire de sécurité peuvent traiter adresse IP, URL demandée, heure et informations du navigateur afin de diffuser les pages et prévenir les abus. Nous ne recevons ni ne stockons les photos et consignes d'édition des visiteurs."],
        ["Mesure d'audience après accord", "Google Analytics 4 ne se charge qu'après votre autorisation. Il peut mesurer pages consultées, défilement, clics externes, appareil et provenance. Nous n'activons ni personnalisation publicitaire ni Google signals. Votre choix reste dans le navigateur jusqu'à 180 jours et peut être retiré en bas de chaque page. Global Privacy Control et Do Not Track sont respectés."],
        ["Cookies et autres sites", "Le retrait supprime les cookies d'analyse accessibles à ce domaine, pas les données déjà traitées par Google. Un traitement hors de votre pays est possible. Avant de transmettre une photo à un éditeur externe, consultez ses propres règles de confidentialité."],
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      description: "Portée éducative de ClothOff AI, limites des retouches d'images, droits sur les contenus et conditions des sites tiers.",
      lead: "Ces comparaisons sont informatives et ne remplacent pas les conditions officielles d'un service externe.",
      blocks: [
        ["Limites de l'information", "Le contenu n'est pas un conseil juridique ou médical personnalisé et ne garantit ni la sécurité ni la disponibilité d'un fournisseur. Fonctions, prix, licences et règles peuvent changer. Vérifiez ses documents actuels avant un abonnement ou l'envoi d'une photo."],
        ["Utilisation responsable", "N'utilisez pas ces articles pour faciliter des images intimes sans accord, des représentations sexualisées de mineurs ou de personnes d'âge incertain, le harcèlement, l'usurpation d'identité, le chantage ou la violation du droit à l'image. Même une retouche de mode suppose l'accord de la personne et des droits sur le cliché."],
        ["Créations et liens", "Ne reproduisez pas massivement nos textes, grilles de comparaison, mise en page ou visuels sans permission et ne les présentez pas comme les vôtres. Une courte citation doit respecter la loi applicable et mentionner sa source. Les services externes appliquent leurs propres règles d'usage, de paiement, de conservation et de suppression."],
      ],
    },
  },
  ar: {
    about: {
      title: "حول هذا الموقع",
      description: "ما الذي تقدمه نشرة ClothOff AI المستقلة، ولماذا تضع موافقة صاحب الصورة أولاً، وكيف تختلف المقارنات الخمس.",
      lead: "لسنا خدمة تعديل صور؛ نشرح كيف تختار استخداماً مشروعاً في الموضة دون المساس بحقوق الشخص الظاهر في الصورة.",
      blocks: [
        ["منشور مستقل", "نوضح مسائل الخصوصية والموافقة وتعديل الصور التي ترتبط بالبحث عن ClothOff AI. لسنا الموقع الرسمي لأي خدمة تحمل الاسم نفسه أو اسماً مشابهاً. لا نوفر رفع الصور أو إزالة الملابس أو توليد النتائج أو الحسابات أو الدفع."],
        ["خمس مقارنات بأغراض مختلفة", "تبديل الملابس والقياس الافتراضي مساران عامان وليسا علامتين تجاريتين. ندرس Adobe Firefly في تعديل مناطق محددة، وCanva Magic Edit في التصميم، وPhotoroom في صور المنتجات والنماذج. وننظر إلى حقوق الصورة والاحتفاظ بالبيانات والتكلفة، لا إلى المظهر فقط."],
        ["حدود ما نقوله", "المعاينة لا تثبت المقاس الحقيقي للملابس، ولا نضمن أن أداة خارجية آمنة لكل صورة. لا نصف اختباراً لم نجْرِه بأنه تجربة شخصية. راجع وثائق المزود الحالية، واطلب استشارة مختصة للمسائل القانونية الفردية."],
      ],
    },
    contact: {
      title: "التواصل",
      description: "طريقة الإبلاغ عن خطأ أو تغير في مصدر رسمي أو قلق بشأن حقوق الصورة والخصوصية في محتوى ClothOff AI.",
      lead: "لطلب تصحيح، حدد رابط الصفحة والعبارة موضع الاعتراض ومصدراً أصلياً يمكن الرجوع إليه.",
      blocks: [
        ["عنوان مخطط له", "العنوان support@clothoffai.fun مخصص للتواصل التحريري مستقبلاً، لكن استقبال الرسائل لم يُضبط أو يُؤكد بعد. لا تعتمد عليه في أمر عاجل ولا ترسل إليه بيانات سرية."],
        ["لا ترسل صوراً حساسة", "لا نحتاج وثائق هوية أو صوراً شخصية أو صوراً حميمة أو أوامر ذكاء اصطناعي لمراجعة مقال. إذا تعلقت المشكلة بصورة معدلة دون إذن، فلا تعِد نشرها؛ صف الصفحة والضرر كتابة بأقل قدر من البيانات الشخصية."],
        ["دعم المنتجات الخارجية", "مشكلات الحساب أو الفواتير أو طلبات حذف الصور لدى Adobe وCanva وPhotoroom وغيرها تخص قنوات دعم تلك الشركات. لا نستطيع الاطلاع على ملفاتها أو حذفها."],
      ],
    },
    "editorial-policy": {
      title: "السياسة التحريرية",
      description: "المصادر الأصلية ومعايير المقارنة المختلفة والموافقة والسلامة وتصحيح مقالات ClothOff AI.",
      lead: "نكتب لمساعدة القارئ قبل رفع صورة، لا لنكرر عبارة بحث في صفحات متشابهة.",
      blocks: [
        ["سؤال مستقل في كل مقال", "تبديل الملابس يتناول القطع الظاهرة، والقياس الافتراضي يعين على معاينة الشراء، وFirefly يركز على تعديل التحديد، وCanva على التصميم، وPhotoroom على صور المنتجات وسياسات الرفع. أول موضوعين فئتان لا شركتان بسعر أو سياسة واحدة."],
        ["الدليل وحدود الادعاء", "نرجع إلى وثائق المزود في ما يخص الوظائف والقواعد والتعامل مع البيانات. نفرق بين تطبيق Photoroom وواجهته المؤسسية، ولا نزعم أن كل تعديل في Firefly يحمل بيانات اعتماد المحتوى تلقائياً. الاختبار المقترح للقارئ ليس نتيجة نقول إننا قسناها."],
        ["السلامة والتصحيح", "لا نقدم طريقة لصنع صور حميمة دون موافقة، أو لإظهار قاصرين بصورة جنسية، أو لتجاوز وسائل الحماية. نراجع الخطأ مع مصدره؛ وإذا تغير الاستنتاج نوضح التعديل في معلومات تحديث المقال. وتُفحص المسودات المدعومة بالذكاء الاصطناعي من حيث الفائدة والمصدر والتكرار."],
      ],
    },
    privacy: {
      title: "الخصوصية",
      description: "البيانات التقنية في موقع clothoffai.fun الثابت، وعدم استقبال الصور، وتحليلات Google بعد الموافقة، والروابط الخارجية.",
      lead: "لا يضم هذا الموقع رفع صور أو مولداً أو حسابات أو محادثة أو عملية دفع.",
      blocks: [
        ["تقديم الصفحات وحمايتها", "قد يعالج مزود الاستضافة والأمن عنوان IP والرابط المطلوب والوقت وبيانات المتصفح لتقديم الصفحات والحد من إساءة الاستخدام. لا نتلقى صور الزوار أو أوامر تعديل الصور ولا نخزنها."],
        ["التحليل بعد الإذن فقط", "لا يُحمّل Google Analytics 4 إلا بعد الموافقة، وقد يقيس الزيارات والتمرير والروابط الخارجية ونوع الجهاز ومصدر الوصول. لا نفعّل تخصيص الإعلانات أو Google signals. يبقى الاختيار في المتصفح حتى 180 يوماً ويمكن سحبه من أسفل أي صفحة. نحترم Global Privacy Control وDo Not Track."],
        ["ملفات الارتباط والمواقع الأخرى", "عند سحب الإذن نحذف ملفات التحليل التي يمكن لهذا النطاق الوصول إليها، لا البيانات التي سبق أن عالجتها Google. قد تجري المعالجة خارج بلدك. قبل رفع صورة إلى محرر خارجي، اقرأ سياسة الخصوصية الخاصة بمشغّله."],
      ],
    },
    terms: {
      title: "شروط الاستخدام",
      description: "نطاق الاستخدام التعليمي لمحتوى ClothOff AI وحدود تعديل الصور وحقوق المواد الأصلية وشروط الخدمات الخارجية.",
      lead: "هذه المقالات معلومات للمقارنة وليست الشروط الرسمية لأي خدمة صور خارجية.",
      blocks: [
        ["حدود المعلومات", "المحتوى ليس استشارة قانونية أو طبية فردية ولا يضمن سلامة أي طرف آخر أو توافره. قد تتغير الميزات والأسعار والتراخيص والقواعد؛ راجع وثائق المزود الحالية قبل الدفع أو رفع صورة."],
        ["الاستخدام المسؤول", "لا تستخدم هذه المعلومات لإنتاج صور حميمة دون موافقة، أو صور جنسية لقاصرين أو أشخاص غير واضحين في العمر، أو للتحرش وانتحال الهوية والابتزاز وانتهاك حقوق الصورة. حتى تعديل الأزياء العادي يحتاج إذن الشخص وحقوق الصورة الأصلية."],
        ["المحتوى الأصلي والروابط", "لا تعِد نشر نصوصنا ومنهج المقارنة والتصميم والصور على نطاق واسع دون إذن، ولا تنسبها لنفسك. يخضع الاقتباس القصير للقانون المعمول به وذكر المصدر. للخدمات المرتبطة قواعدها الخاصة بشأن الاستخدام والدفع والحفظ والحذف."],
      ],
    },
  },
};
