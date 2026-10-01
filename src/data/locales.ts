// Published locale codes and route mappings; keep every cluster reciprocal.
export const locales = [
  { slug: "es", lang: "es", label: "Español", dir: "ltr" },
] as const;

export type Locale = typeof locales[number]["slug"];
export const comparisonSlugs = [
  "clothoff-ai-vs-ai-outfit-changer",
  "clothoff-ai-vs-virtual-try-on",
  "clothoff-ai-vs-adobe-firefly",
  "clothoff-ai-vs-canva-magic-edit",
  "clothoff-ai-vs-photoroom",
] as const;
export type ComparisonSlug = typeof comparisonSlugs[number];
export const infoPageKeys = ["about", "contact", "editorial-policy", "privacy", "terms"] as const;
export type InfoPageKey = typeof infoPageKeys[number];

export const routeFor = (locale: Locale | "", page = "") =>
  `${locale ? `/${locale}` : ""}/${page ? `${page.replace(/^\/+|\/+$/g, "")}/` : ""}`;
export const languageAlternates = (pathname: string) => {
  const englishPath = pathname.replace(/^\/(?:ja|ko|zh-hant|es|pt-br|ru|de|fr|ar)(?=\/)/, "") || "/";
  return [{ lang: "en", href: englishPath }, ...locales.map(({ slug, lang }) => ({ lang, href: `/${slug}${englishPath}` }))];
};

export interface UiText {
  language: string; home: string; safety: string; alternatives: string; compare: string; blog: string;
  about: string; contact: string; editorial: string; privacy: string; terms: string;
  read: string; sources: string; questions: string; allArticles: string; learnMore: string;
  independent: string; noUploads: string; adultsOnly: string; consentFirst: string;
  analyticsSettings: string; analyticsTitle: string; analyticsBody: string;
  analyticsDecline: string; analyticsAccept: string; analyticsPrivacy: string;
  analyticsStatusPrivacy: string; analyticsStatusOn: string; analyticsStatusOff: string;
  skip: string; navigation: string; menu: string; closeMenu: string; breadcrumb: string;
}

export const ui: Record<Locale, UiText> = {
  ja: {
    language:"言語", home:"ホーム", safety:"安全確認", alternatives:"安全な代替案", compare:"比較", blog:"比較記事",
    about:"このサイトについて", contact:"連絡先", editorial:"編集方針", privacy:"プライバシー", terms:"利用条件",
    read:"記事を読む", sources:"一次資料", questions:"よくある質問", allArticles:"比較記事一覧", learnMore:"詳しく見る",
    independent:"ClothOff AI を扱う独立した安全情報サイトです。画像のアップロードや衣服の除去機能はありません。",
    noUploads:"画像のアップロードなし", adultsOnly:"成人向けの安全情報", consentFirst:"同意を最優先",
    analyticsSettings:"アクセス解析の設定", analyticsTitle:"任意のアクセス解析",
    analyticsBody:"記事改善のため Google Analytics を使用してもよいですか。広告追跡は行いません。",
    analyticsDecline:"許可しない", analyticsAccept:"解析を許可", analyticsPrivacy:"プライバシーの詳細",
    analyticsStatusPrivacy:"ブラウザーのプライバシー設定を尊重し、アクセス解析を停止しています。",
    analyticsStatusOn:"アクセス解析は有効です。「許可しない」を選ぶと同意を撤回できます。",
    analyticsStatusOff:"アクセス解析は無効です。この選択は当サイトにのみ適用されます。",
    skip:"本文へ移動", navigation:"メインナビゲーション", menu:"メニューを開く", closeMenu:"メニューを閉じる", breadcrumb:"現在位置"
  },
  ko: {
    language:"언어", home:"홈", safety:"안전 점검", alternatives:"안전한 대안", compare:"비교", blog:"비교 글",
    about:"사이트 소개", contact:"연락처", editorial:"편집 원칙", privacy:"개인정보", terms:"이용 조건",
    read:"글 읽기", sources:"공식 자료", questions:"자주 묻는 질문", allArticles:"비교 글 목록", learnMore:"자세히 보기",
    independent:"ClothOff AI 검색어를 다루는 독립 안전 정보 사이트입니다. 사진 업로드나 의복 제거 기능은 제공하지 않습니다.",
    noUploads:"사진 업로드 없음", adultsOnly:"성인 대상 안전 정보", consentFirst:"동의 우선",
    analyticsSettings:"방문 분석 설정", analyticsTitle:"선택적 방문 분석",
    analyticsBody:"글 개선을 위해 Google Analytics를 사용해도 될까요? 광고 추적은 하지 않습니다.",
    analyticsDecline:"동의하지 않음", analyticsAccept:"분석 허용", analyticsPrivacy:"개인정보 안내",
    analyticsStatusPrivacy:"브라우저의 개인정보 보호 신호를 존중하여 방문 분석을 끕니다.",
    analyticsStatusOn:"방문 분석이 켜져 있습니다. ‘동의하지 않음’을 선택하면 동의를 철회할 수 있습니다.",
    analyticsStatusOff:"방문 분석이 꺼져 있습니다. 이 선택은 이 웹사이트에만 적용됩니다.",
    skip:"본문으로 이동", navigation:"주요 메뉴", menu:"메뉴 열기", closeMenu:"메뉴 닫기", breadcrumb:"현재 위치"
  },
  "zh-hant": {
    language:"語言", home:"首頁", safety:"安全檢查", alternatives:"安全替代方案", compare:"比較", blog:"比較文章",
    about:"關於本站", contact:"聯絡方式", editorial:"編輯政策", privacy:"隱私", terms:"使用條款",
    read:"閱讀文章", sources:"第一手資料", questions:"常見問題", allArticles:"比較文章一覽", learnMore:"了解更多",
    independent:"本站為討論 ClothOff AI 搜尋議題的獨立安全資訊網站，不提供上傳照片或移除衣物的功能。",
    noUploads:"無照片上傳", adultsOnly:"成人安全資訊", consentFirst:"同意優先",
    analyticsSettings:"流量分析設定", analyticsTitle:"選擇性流量分析",
    analyticsBody:"是否允許 Google Analytics 協助改善本站文章？本站不做廣告追蹤。",
    analyticsDecline:"不同意", analyticsAccept:"允許分析", analyticsPrivacy:"隱私詳情",
    analyticsStatusPrivacy:"本站尊重瀏覽器的隱私訊號，流量分析已關閉。",
    analyticsStatusOn:"流量分析已啟用；選擇「不同意」即可撤回同意。",
    analyticsStatusOff:"流量分析已關閉；此選擇只適用於本站。",
    skip:"跳至主要內容", navigation:"主要導覽", menu:"開啟選單", closeMenu:"關閉選單", breadcrumb:"導覽路徑"
  },
  es: {
    language:"Idioma", home:"Inicio", safety:"Seguridad", alternatives:"Alternativas seguras", compare:"Comparar", blog:"Comparativas",
    about:"Acerca de", contact:"Contacto", editorial:"Política editorial", privacy:"Privacidad", terms:"Condiciones",
    read:"Leer artículo", sources:"Fuentes originales", questions:"Preguntas frecuentes", allArticles:"Todas las comparativas", learnMore:"Más información",
    independent:"Publicación independiente sobre la búsqueda ClothOff AI. No permite subir fotos ni quitar ropa de imágenes.",
    noUploads:"Sin subida de fotos", adultsOnly:"Información para adultos", consentFirst:"Consentimiento primero",
    analyticsSettings:"Preferencias de analítica", analyticsTitle:"Analítica opcional",
    analyticsBody:"¿Nos permites usar Google Analytics para mejorar los artículos? Sin seguimiento publicitario.",
    analyticsDecline:"No, gracias", analyticsAccept:"Permitir analítica", analyticsPrivacy:"Detalles de privacidad",
    analyticsStatusPrivacy:"Respetamos la señal de privacidad del navegador; la analítica está desactivada.",
    analyticsStatusOn:"La analítica está activa. Elige «No, gracias» para retirar tu consentimiento.",
    analyticsStatusOff:"La analítica está desactivada. Tu elección solo se aplica a este sitio.",
    skip:"Ir al contenido", navigation:"Navegación principal", menu:"Abrir menú", closeMenu:"Cerrar menú", breadcrumb:"Ruta de navegación"
  },
  "pt-br": {
    language:"Idioma", home:"Início", safety:"Segurança", alternatives:"Alternativas seguras", compare:"Comparar", blog:"Comparações",
    about:"Sobre", contact:"Contato", editorial:"Política editorial", privacy:"Privacidade", terms:"Termos",
    read:"Ler artigo", sources:"Fontes originais", questions:"Perguntas frequentes", allArticles:"Todas as comparações", learnMore:"Saiba mais",
    independent:"Publicação independente sobre a busca ClothOff AI. Não aceita fotos nem remove roupas de imagens.",
    noUploads:"Sem envio de fotos", adultsOnly:"Informação para adultos", consentFirst:"Consentimento em primeiro lugar",
    analyticsSettings:"Preferências de análise", analyticsTitle:"Análise opcional",
    analyticsBody:"Podemos usar o Google Analytics para melhorar os artigos? Sem rastreamento publicitário.",
    analyticsDecline:"Não, obrigado", analyticsAccept:"Permitir análise", analyticsPrivacy:"Detalhes de privacidade",
    analyticsStatusPrivacy:"Respeitamos o sinal de privacidade do navegador; a análise está desligada.",
    analyticsStatusOn:"A análise está ativa. Escolha ‘Não, obrigado’ para retirar o consentimento.",
    analyticsStatusOff:"A análise está desligada. Sua escolha vale apenas para este site.",
    skip:"Pular para o conteúdo", navigation:"Navegação principal", menu:"Abrir menu", closeMenu:"Fechar menu", breadcrumb:"Caminho de navegação"
  },
  ru: {
    language:"Язык", home:"Главная", safety:"Безопасность", alternatives:"Безопасные варианты", compare:"Сравнение", blog:"Статьи",
    about:"О проекте", contact:"Контакты", editorial:"Редакционная политика", privacy:"Конфиденциальность", terms:"Условия",
    read:"Читать статью", sources:"Первоисточники", questions:"Частые вопросы", allArticles:"Все сравнения", learnMore:"Подробнее",
    independent:"Независимый материал о запросе ClothOff AI. Мы не принимаем фотографии и не удаляем одежду с изображений.",
    noUploads:"Без загрузки фото", adultsOnly:"Информация для взрослых", consentFirst:"Сначала согласие",
    analyticsSettings:"Настройки аналитики", analyticsTitle:"Необязательная аналитика",
    analyticsBody:"Разрешите Google Analytics для улучшения статей? Без рекламного отслеживания.",
    analyticsDecline:"Нет, спасибо", analyticsAccept:"Разрешить аналитику", analyticsPrivacy:"О конфиденциальности",
    analyticsStatusPrivacy:"Мы учитываем сигнал приватности браузера: аналитика отключена.",
    analyticsStatusOn:"Аналитика включена. Нажмите «Нет, спасибо», чтобы отозвать согласие.",
    analyticsStatusOff:"Аналитика отключена. Ваш выбор действует только на этом сайте.",
    skip:"Перейти к содержанию", navigation:"Главное меню", menu:"Открыть меню", closeMenu:"Закрыть меню", breadcrumb:"Навигационная цепочка"
  },
  de: {
    language:"Sprache", home:"Startseite", safety:"Sicherheitscheck", alternatives:"Sichere Alternativen", compare:"Vergleich", blog:"Vergleiche",
    about:"Über uns", contact:"Kontakt", editorial:"Redaktionsgrundsätze", privacy:"Datenschutz", terms:"Nutzungsbedingungen",
    read:"Artikel lesen", sources:"Primärquellen", questions:"Häufige Fragen", allArticles:"Alle Vergleiche", learnMore:"Mehr erfahren",
    independent:"Unabhängige Informationen zur Suche nach ClothOff AI. Diese Website nimmt keine Fotos an und entfernt keine Kleidung aus Bildern.",
    noUploads:"Keine Foto-Uploads", adultsOnly:"Informationen für Erwachsene", consentFirst:"Einwilligung zuerst",
    analyticsSettings:"Analyse-Einstellungen", analyticsTitle:"Optionale Analyse",
    analyticsBody:"Dürfen wir Google Analytics zur Verbesserung der Artikel nutzen? Keine Werbeverfolgung.",
    analyticsDecline:"Nein, danke", analyticsAccept:"Analyse erlauben", analyticsPrivacy:"Datenschutzdetails",
    analyticsStatusPrivacy:"Das Datenschutzsignal Ihres Browsers wird beachtet; die Analyse ist aus.",
    analyticsStatusOn:"Die Analyse ist aktiv. Mit „Nein, danke“ können Sie Ihre Einwilligung widerrufen.",
    analyticsStatusOff:"Die Analyse ist aus. Ihre Entscheidung gilt nur für diese Website.",
    skip:"Zum Inhalt springen", navigation:"Hauptnavigation", menu:"Menü öffnen", closeMenu:"Menü schließen", breadcrumb:"Navigationspfad"
  },
  fr: {
    language:"Langue", home:"Accueil", safety:"Sécurité", alternatives:"Options responsables", compare:"Comparer", blog:"Comparatifs",
    about:"À propos", contact:"Contact", editorial:"Politique éditoriale", privacy:"Confidentialité", terms:"Conditions",
    read:"Lire l'article", sources:"Sources primaires", questions:"Questions fréquentes", allArticles:"Tous les comparatifs", learnMore:"En savoir plus",
    independent:"Publication indépendante sur la recherche ClothOff AI. Aucun téléversement de photo ni retrait de vêtements sur ce site.",
    noUploads:"Aucun téléversement", adultsOnly:"Informations pour adultes", consentFirst:"Consentement d'abord",
    analyticsSettings:"Préférences d'analyse", analyticsTitle:"Mesure d'audience facultative",
    analyticsBody:"Autorisez-vous Google Analytics pour améliorer les articles ? Aucun suivi publicitaire.",
    analyticsDecline:"Non merci", analyticsAccept:"Autoriser l'analyse", analyticsPrivacy:"Détails de confidentialité",
    analyticsStatusPrivacy:"Le signal de confidentialité du navigateur est respecté : la mesure d'audience est désactivée.",
    analyticsStatusOn:"La mesure d'audience est active. Choisissez « Non merci » pour retirer votre accord.",
    analyticsStatusOff:"La mesure d'audience est désactivée. Votre choix ne concerne que ce site.",
    skip:"Aller au contenu", navigation:"Navigation principale", menu:"Ouvrir le menu", closeMenu:"Fermer le menu", breadcrumb:"Fil d'Ariane"
  },
  ar: {
    language:"اللغة", home:"الرئيسية", safety:"فحص السلامة", alternatives:"بدائل أكثر أماناً", compare:"المقارنة", blog:"مقالات المقارنة",
    about:"حول الموقع", contact:"التواصل", editorial:"السياسة التحريرية", privacy:"الخصوصية", terms:"شروط الاستخدام",
    read:"اقرأ المقال", sources:"المصادر الأصلية", questions:"أسئلة شائعة", allArticles:"جميع المقارنات", learnMore:"اعرف المزيد",
    independent:"موقع مستقل يشرح البحث عن ClothOff AI. لا نستقبل الصور ولا نقدّم إزالة الملابس من الصور.",
    noUploads:"لا رفع للصور", adultsOnly:"معلومات للبالغين", consentFirst:"الموافقة أولاً",
    analyticsSettings:"إعدادات التحليلات", analyticsTitle:"تحليلات اختيارية",
    analyticsBody:"هل تسمح باستخدام Google Analytics لتحسين المقالات؟ لا نستخدم تتبعاً إعلانياً.",
    analyticsDecline:"لا، شكراً", analyticsAccept:"السماح بالتحليلات", analyticsPrivacy:"تفاصيل الخصوصية",
    analyticsStatusPrivacy:"نحترم إشارة الخصوصية في متصفحك، والتحليلات متوقفة.",
    analyticsStatusOn:"التحليلات مفعلة. اختر «لا، شكراً» لسحب موافقتك.",
    analyticsStatusOff:"التحليلات متوقفة. يسري اختيارك على هذا الموقع فقط.",
    skip:"الانتقال إلى المحتوى", navigation:"التنقل الرئيسي", menu:"فتح القائمة", closeMenu:"إغلاق القائمة", breadcrumb:"مسار التنقل"
  },
};
