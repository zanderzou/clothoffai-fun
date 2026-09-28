import type { Locale } from "./locales";

export interface BlogCopy {
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  readerHeading: string;
  readerParagraphs: [string, string];
  categoryHeading: string;
  categoryParagraph: string;
  productHeading: string;
  productParagraph: string;
  closing: string;
}

// Draft-only copy. Do not link any locale route until all five localized VS
// articles and the corresponding information pages have passed publication QA.
export const localizedBlog: Record<Locale, BlogCopy> = {
  ja: {
    metaDescription: "ClothOff AI の検索から、安全なファッション画像編集へ。AI着せ替え、バーチャル試着、Adobe Firefly、Canva Magic Edit、Photoroomを目的と同意・プライバシーで比較。",
    eyebrow: "ClothOff AI / 比較記事",
    heading: "五つの比較で、目的に合う編集方法を選ぶ",
    intro: "衣服を消す加工ではなく、許可を得た画像で服を着せ替える方法、買い物の試着イメージ、商品写真制作を比べます。この記事群は画像のアップロード先ではありません。",
    readerHeading: "まず用途を決める",
    readerParagraphs: [
      "自分の服を試したいのか、許諾済みのモデル画像を制作したいのか、商品写真を整えたいのかで、必要な道具は変わります。見た目が似た出力でも、編集の自由度、実際のサイズ判断、商用利用の条件は同じではありません。",
      "各記事では、良い点だけでなく、向かない場面、元画像の権利、保存・学習・削除の条件、費用を確認する手順を示します。料金や機能は変わり得るため、購入やアップロードの前に提供元の現行資料を確認してください。",
    ],
    categoryHeading: "着せ替えと試着は製品名ではない",
    categoryParagraph: "AI Outfit Changer と AI Virtual Try-On は比較のための作業カテゴリーです。前者は見える服の置き換え、後者は買い物時の見た目の参考であり、どちらも特定企業の性能や価格を保証する名称ではありません。",
    productHeading: "三つの製品は別の視点で読む",
    productParagraph: "Adobe Firefly は選択範囲の生成編集と利用規則、Canva Magic Edit はデザイン制作と元写真の権利、Photoroom は商品撮影・モデル生成とアップロード画像の扱いを中心に検討します。企業向け API と一般向けアプリを混同しません。",
    closing: "写真に写る成人本人の明確な同意を確認できない場合は、その写真を編集ツールへ送らないでください。",
  },
  ko: {
    metaDescription: "ClothOff AI 검색 의도에서 출발해 AI 옷 갈아입히기, 가상 피팅, Adobe Firefly, Canva Magic Edit, Photoroom을 동의·개인정보·용도별로 비교합니다.",
    eyebrow: "ClothOff AI / 비교 글",
    heading: "다섯 가지 비교로 목적에 맞는 방법 찾기",
    intro: "옷을 없애는 편집이 아니라 허락받은 사진에서 보이는 의상을 바꾸거나, 쇼핑용 착용 모습을 살피거나, 상품 이미지를 만드는 방법을 비교합니다. 이 사이트는 사진을 받지 않습니다.",
    readerHeading: "무엇을 만들려는지 먼저 정하세요",
    readerParagraphs: [
      "내 옷차림을 미리 보고 싶은지, 사용 허가가 있는 모델 사진을 편집하려는지, 판매용 상품 이미지를 정리하려는지에 따라 적합한 작업 방식이 다릅니다. 화면에 비슷해 보여도 의상 교체와 사이즈 판단, 상업적 이용 범위는 별개의 문제입니다.",
      "각 글은 장점뿐 아니라 적합하지 않은 상황, 원본 사진의 권리, 업로드 후 보관·학습·삭제 조건, 실제 비용을 확인할 질문을 다룹니다. 기능과 요금은 바뀌므로 결제나 업로드 전에 제공업체의 최신 안내를 직접 확인하세요.",
    ],
    categoryHeading: "처음 두 항목은 서비스 이름이 아닙니다",
    categoryParagraph: "AI Outfit Changer는 눈에 보이는 의상을 바꾸는 작업 범주, AI Virtual Try-On은 쇼핑에서 착용 모습을 참고하는 범주입니다. 두 표현만으로 특정 업체의 정확도나 요금, 개인정보 처리를 단정할 수 없습니다.",
    productHeading: "세 제품은 서로 다른 기준으로 살펴봅니다",
    productParagraph: "Adobe Firefly는 선택 영역 편집과 이용 규칙, Canva Magic Edit는 디자인 흐름과 원본 사진 권리, Photoroom은 상품 이미지·패션 모델 제작과 업로드 사진 정책을 중심으로 봅니다. 기업용 API 기능을 일반 앱 기능처럼 소개하지 않습니다.",
    closing: "사진 속 성인 당사자의 명확한 동의를 확인할 수 없다면 그 사진을 편집 서비스에 올리지 마세요.",
  },
  "zh-hant": {
    metaDescription: "從 ClothOff AI 的搜尋需求出發，比較 AI 換裝、虛擬試穿、Adobe Firefly、Canva Magic Edit 與 Photoroom 的用途、同意、圖片權利及隱私風險。",
    eyebrow: "ClothOff AI／比較文章",
    heading: "用五種比較，找對負責任的影像流程",
    intro: "本站比較的是經授權照片的可見衣物替換、購物試穿預覽與商品圖製作，不提供去除衣物或上傳照片的功能。",
    readerHeading: "先釐清要完成的工作",
    readerParagraphs: [
      "想預覽自己的穿搭、編輯已取得授權的成人模特兒照片，或製作商品展示圖，所需工具並不相同。影像看起來相似，也不代表試穿圖能判斷真實尺寸，或所有生成內容都可直接商用。",
      "每篇文章會分別檢視適合與不適合的情境、原始照片權利、上傳後的保存和模型訓練條件，以及費用的判讀方法。功能與政策會變動；付費或上傳前，請再核對服務商最新的第一手資料。",
    ],
    categoryHeading: "先區分流程與品牌",
    categoryParagraph: "AI Outfit Changer 與 AI Virtual Try-On 在這裡是工作類別，不是特定供應商。前者聚焦更換看得見的服裝，後者輔助購物視覺化；名稱本身不保證效果、售價或資料保護。",
    productHeading: "三款產品各有審視重點",
    productParagraph: "Adobe Firefly 著重選取範圍編輯與使用規則；Canva Magic Edit 著重設計流程與來源照片權利；Photoroom 著重商品攝影、AI 模特兒以及上傳圖片政策。企業 API 與一般網頁版必須分開看。",
    closing: "無法確認照片中成年當事人已明確同意時，不要把該照片送進第三方影像工具。",
  },
  es: {
    metaDescription: "Compara ClothOff AI con cambio de ropa con IA, probador virtual, Adobe Firefly, Canva Magic Edit y Photoroom: consentimiento, privacidad, límites y usos reales.",
    eyebrow: "ClothOff AI / comparativas",
    heading: "Cinco comparativas para elegir según tu objetivo",
    intro: "Estas lecturas se centran en cambiar prendas visibles con permiso, visualizar ropa antes de comprar y preparar imágenes de producto. Aquí no se suben fotos ni se eliminan prendas.",
    readerHeading: "Define el uso antes de elegir herramienta",
    readerParagraphs: [
      "No es lo mismo imaginar cómo te quedaría un conjunto, editar la foto autorizada de una modelo adulta o preparar un catálogo. Un resultado visual parecido tampoco equivale a una talla fiable ni concede por sí solo derechos comerciales sobre la foto original.",
      "Cada comparativa explica cuándo conviene la opción, cuándo no, qué comprobar sobre consentimiento y derechos, cómo revisar conservación o entrenamiento de imágenes y qué gastos pueden aparecer. Las prestaciones y los precios cambian: consulta siempre la información vigente del proveedor.",
    ],
    categoryHeading: "Dos opciones son categorías, no marcas",
    categoryParagraph: "AI Outfit Changer designa un proceso de sustitución de prendas visibles; AI Virtual Try-On, una previsualización para compras. Ninguno es aquí un proveedor concreto, por lo que no atribuimos a la categoría funciones, precios ni garantías de privacidad.",
    productHeading: "Tres productos, tres preguntas distintas",
    productParagraph: "En Adobe Firefly examinamos la edición por selección y sus normas de uso; en Canva Magic Edit, el flujo de diseño y los derechos de la fotografía de partida; en Photoroom, las fotos de producto, los modelos de moda y el tratamiento de imágenes subidas. Distinguimos su API empresarial de la aplicación habitual.",
    closing: "Si no puedes verificar el consentimiento explícito de la persona adulta que aparece en una foto, no la envíes a un editor externo.",
  },
  "pt-br": {
    metaDescription: "Compare ClothOff AI com troca de roupa com IA, provador virtual, Adobe Firefly, Canva Magic Edit e Photoroom por uso, consentimento, privacidade e custo.",
    eyebrow: "ClothOff AI / comparações",
    heading: "Cinco comparações para escolher pelo objetivo",
    intro: "O foco é trocar roupas visíveis em fotos autorizadas, visualizar looks antes da compra e montar imagens de produtos. Este site não recebe fotos nem remove roupas de imagens.",
    readerHeading: "Comece pelo trabalho que precisa fazer",
    readerParagraphs: [
      "Experimentar um look na própria foto, editar a imagem licenciada de uma modelo adulta e preparar um catálogo são tarefas diferentes. Um resultado parecido na tela não confirma o caimento real da peça nem resolve sozinho o direito de uso comercial da foto original.",
      "Cada comparação aponta vantagens, limites e situações inadequadas, além de perguntas sobre consentimento, direitos da imagem, retenção, treinamento e custo. Recursos e preços mudam; confira as páginas atuais de cada fornecedor antes de assinar ou enviar arquivos.",
    ],
    categoryHeading: "Duas opções são tipos de processo",
    categoryParagraph: "AI Outfit Changer significa substituir peças que continuam visíveis; AI Virtual Try-On é uma visualização para compras. Aqui são categorias, não marcas, e não lhes atribuímos uma política única de privacidade, preço ou precisão.",
    productHeading: "Três produtos pedem critérios diferentes",
    productParagraph: "Adobe Firefly é analisado pela edição de áreas selecionadas e regras de uso; Canva Magic Edit, pelo fluxo de design e direitos da foto de origem; Photoroom, pelas imagens de produto, modelos de moda e política para fotos enviadas. A API empresarial não é tratada como recurso automático do aplicativo comum.",
    closing: "Sem consentimento claro da pessoa adulta retratada, não envie a foto para um serviço de edição externo.",
  },
  ru: {
    metaDescription: "Сравнение ClothOff AI с заменой одежды, виртуальной примеркой, Adobe Firefly, Canva Magic Edit и Photoroom: согласие, права на фото, приватность и ограничения.",
    eyebrow: "ClothOff AI / сравнения",
    heading: "Пять сравнений — для пяти разных решений",
    intro: "Мы разбираем замену видимой одежды на разрешённом снимке, примерку для покупки и подготовку товарных изображений. Этот сайт не принимает фото и не предлагает удалять одежду с изображений.",
    readerHeading: "Сначала определите задачу",
    readerParagraphs: [
      "Предварительно оценить собственный образ, отредактировать лицензированное фото взрослой модели и оформить карточку товара — разные задачи. Похожая картинка не подтверждает реальный размер вещи и не даёт автоматически права использовать исходное фото в рекламе.",
      "В каждой статье есть сильные и слабые стороны, вопросы о согласии и правах на изображение, о хранении, обучении моделей и расходах. Возможности и тарифы меняются; перед загрузкой и оплатой сверьтесь с актуальными документами поставщика.",
    ],
    categoryHeading: "Первые два сравнения — не названия сервисов",
    categoryParagraph: "AI Outfit Changer обозначает процесс замены видимого предмета одежды, AI Virtual Try-On — визуализацию для выбора товара. Это категории, поэтому нельзя приписывать им общую цену, точность или политику обработки фотографий.",
    productHeading: "Три продукта — три отдельных аспекта",
    productParagraph: "Для Adobe Firefly важны выделение области, правила применения и происхождение контента; для Canva Magic Edit — дизайнерский процесс и права на исходное фото; для Photoroom — предметная съёмка, модные модели и условия работы с загруженными изображениями. Корпоративный API не выдаём за обычную функцию приложения.",
    closing: "Если явное согласие взрослого человека на фото не подтверждено, не загружайте снимок в сторонний редактор.",
  },
  de: {
    metaDescription: "ClothOff AI im Vergleich mit KI-Outfit-Wechsel, virtueller Anprobe, Adobe Firefly, Canva Magic Edit und Photoroom: Einwilligung, Bildrechte, Datenschutz und Grenzen.",
    eyebrow: "ClothOff AI / Vergleiche",
    heading: "Fünf Vergleiche für unterschiedliche Vorhaben",
    intro: "Hier geht es um den Austausch sichtbarer Kleidung in freigegebenen Bildern, Kaufvorschauen und Produktfotos. Diese Website nimmt keine Bilder entgegen und entfernt keine Kleidung.",
    readerHeading: "Erst den Anwendungsfall klären",
    readerParagraphs: [
      "Ein eigenes Outfit vorab anzusehen, ein lizenziertes Foto eines erwachsenen Models zu bearbeiten und ein Produktbild für einen Shop zu erstellen, erfordert unterschiedliche Abläufe. Ähnliche Ergebnisse auf dem Bildschirm belegen weder die Passform eines Kleidungsstücks noch die Nutzungsrechte am Ausgangsfoto.",
      "Jeder Vergleich beschreibt Stärken, Schwächen und ungeeignete Fälle. Dazu kommen Prüffragen zu Einwilligung, Bildrechten, Speicherung, Modelltraining und Kosten. Funktionen und Preise können sich ändern; maßgeblich sind die aktuellen Unterlagen des jeweiligen Anbieters.",
    ],
    categoryHeading: "Zwei Vergleiche betreffen Arbeitsweisen",
    categoryParagraph: "AI Outfit Changer steht hier für den Wechsel sichtbarer Kleidungsstücke, AI Virtual Try-On für eine Einkaufs-Vorschau. Beides sind Kategorien, keine konkreten Anbieter; eine gemeinsame Preis- oder Datenschutzgarantie lässt sich daraus nicht ableiten.",
    productHeading: "Drei Produkte mit eigenen Prüfpunkten",
    productParagraph: "Bei Adobe Firefly betrachten wir Auswahlbearbeitung und Nutzungsregeln, bei Canva Magic Edit den Designablauf und Rechte am Quellfoto, bei Photoroom Produktbilder, Mode-Models und den Umgang mit Uploads. Eine Unternehmens-API wird nicht als Standardfunktion der Web-App dargestellt.",
    closing: "Liegt keine eindeutige Einwilligung der abgebildeten erwachsenen Person vor, laden Sie das Foto nicht bei einem externen Bilddienst hoch.",
  },
  fr: {
    metaDescription: "ClothOff AI face au changement de tenue, à l'essayage virtuel, à Adobe Firefly, Canva Magic Edit et Photoroom : usages, consentement, droits, vie privée et limites.",
    eyebrow: "ClothOff AI / comparatifs",
    heading: "Cinq comparatifs pour cinq choix concrets",
    intro: "Nous examinons le remplacement de vêtements visibles sur des images autorisées, l'essayage pour l'achat et la création de visuels produits. Ce site ne reçoit pas de photos et ne retire pas de vêtements.",
    readerHeading: "Commencer par le besoin réel",
    readerParagraphs: [
      "Visualiser sa propre tenue, modifier le portrait autorisé d'un mannequin adulte ou préparer un catalogue ne relèvent pas du même outil. Une image convaincante ne garantit pas la bonne taille d'un vêtement et ne règle pas les droits commerciaux sur la photo source.",
      "Chaque comparatif expose les atouts, les limites et les usages déconseillés, puis les points à vérifier sur le consentement, les droits à l'image, la conservation, l'entraînement et les coûts. Avant tout envoi ou abonnement, relisez les informations à jour du fournisseur.",
    ],
    categoryHeading: "Deux catégories, pas deux marques",
    categoryParagraph: "AI Outfit Changer désigne le remplacement d'une tenue visible ; AI Virtual Try-On, une prévisualisation d'achat. Ce sont des méthodes générales, sans tarif, précision ni politique de confidentialité communs à tous les services.",
    productHeading: "Trois produits, des critères distincts",
    productParagraph: "Adobe Firefly est abordé sous l'angle de l'édition par sélection et des règles d'utilisation ; Canva Magic Edit, sous celui du graphisme et des droits sur l'image source ; Photoroom, sous celui du visuel produit, des mannequins IA et du traitement des images importées. Nous distinguons l'API d'entreprise de l'application courante.",
    closing: "Sans accord explicite de la personne adulte représentée, n'envoyez pas sa photo à un éditeur tiers.",
  },
  ar: {
    metaDescription: "مقارنة ClothOff AI مع تبديل الملابس بالذكاء الاصطناعي والقياس الافتراضي وAdobe Firefly وCanva Magic Edit وPhotoroom من حيث الموافقة والخصوصية وحدود الاستخدام.",
    eyebrow: "ClothOff AI / مقالات المقارنة",
    heading: "خمس مقارنات لاختيار مسار يناسب غرضك",
    intro: "نقارن تبديل الملابس الظاهرة في صور مصرح بها، ومعاينة القطع قبل الشراء، وإعداد صور المنتجات. لا يستقبل هذا الموقع الصور ولا يزيل الملابس من أي صورة.",
    readerHeading: "حدد المهمة قبل اختيار الأداة",
    readerParagraphs: [
      "معاينة إطلالتك على صورتك، وتعديل صورة مرخصة لعارضة بالغة، وتجهيز صورة لمتجر إلكتروني مهام مختلفة. تشابه النتيجة البصرية لا يثبت ملاءمة المقاس الحقيقي ولا يمنح تلقائياً حق استخدام الصورة الأصلية تجارياً.",
      "توضح كل مقالة مواطن القوة والقصور والحالات غير المناسبة، ثم أسئلة عن موافقة الشخص المصوَّر وحقوق الصورة والاحتفاظ بالملفات وتدريب النماذج والتكلفة. قد تتغير الشروط والميزات؛ راجع وثائق المزود الحالية قبل الدفع أو رفع الصور.",
    ],
    categoryHeading: "الخياران الأولان فئتان لا شركتان",
    categoryParagraph: "يشير AI Outfit Changer إلى مسار تغيير قطعة ملابس ظاهرة، بينما يشير AI Virtual Try-On إلى معاينة تسوق. لا يمثل أي منهما مزوداً واحداً، لذلك لا نفترض سعراً أو دقة أو سياسة خصوصية موحدة.",
    productHeading: "ثلاثة منتجات بأسئلة مختلفة",
    productParagraph: "نراجع Adobe Firefly من زاوية تعديل المناطق المحددة وقواعد الاستخدام، وCanva Magic Edit من زاوية التصميم وحقوق الصورة المصدر، وPhotoroom من زاوية صور المنتجات والنماذج وسياسة الصور المرفوعة. ونفصل بين واجهة المؤسسة البرمجية والتطبيق المعتاد.",
    closing: "إذا لم تتأكد من الموافقة الصريحة للشخص البالغ الظاهر في الصورة، فلا ترفعها إلى خدمة تحرير خارجية.",
  },
};
