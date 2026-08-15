import type { Locale, PageKey } from './site';

type Content = {
  brandLine: string;
  descriptor: string;
  nav: Record<PageKey, string>;
  common: {
    explore: string; discover: string; call: string; directions: string; learnMore: string; viewProducts: string;
    contact: string; madeInIraq: string; sizes: string;
  };
  home: {
    eyebrow: string; title: string; body: string; primary: string; secondary: string;
    pillarsTitle: string; pillarsBody: string; pillars: { title: string; body: string }[];
    productsKicker: string; productsTitle: string; productsBody: string;
    storyKicker: string; storyTitle: string; storyBody: string; storyQuote: string;
    qualityKicker: string; qualityTitle: string; qualityBody: string;
    ctaTitle: string; ctaBody: string;
  };
  about: {
    eyebrow: string; title: string; intro: string; heritageTitle: string; heritageBody: string;
    promiseTitle: string; promiseBody: string; values: { title: string; body: string }[];
  };
  products: {
    eyebrow: string; title: string; intro: string;
    items: Record<'1000' | '500' | '330' | '200', { size: string; name: string; use: string; body: string }>;
  };
  quality: {
    eyebrow: string; title: string; intro: string;
    steps: { no: string; title: string; body: string }[];
    closingTitle: string; closingBody: string;
    faq: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string; title: string; intro: string; sales: string; location: string; locationBody: string; callBody: string;
  };
  meta: Record<PageKey, { title: string; description: string }>;
};

const en: Content = {
  brandLine: 'Natural Purity. Trusted Quality.',
  descriptor: 'Purified Water',
  nav: { home: 'Home', about: 'Our Story', products: 'Products', quality: 'Quality', contact: 'Contact' },
  common: {
    explore: 'Explore', discover: 'Discover', call: 'Call Pearl', directions: 'Get directions', learnMore: 'Learn more',
    viewProducts: 'View products', contact: 'Contact us', madeInIraq: 'Proudly Iraqi', sizes: 'Four practical formats',
  },
  home: {
    eyebrow: 'Pearl Purified Water · Iraq',
    title: 'Natural Purity.\nTrusted Quality.',
    body: 'Pearl is an Iraqi purified water brand made for everyday life — at home, at work, on the move and wherever simple refreshment matters.',
    primary: 'Explore our products', secondary: 'Discover our story',
    pillarsTitle: 'A simple promise, every day.',
    pillarsBody: 'Pearl is built around the qualities people expect from the water they choose for themselves, their families and their guests.',
    pillars: [
      { title: 'Purity', body: 'A water-first approach centered on clean, refreshing drinking water.' },
      { title: 'Trust', body: 'Consistency, care and a familiar brand experience you can return to every day.' },
      { title: 'Freshness', body: 'Practical formats designed for daily hydration, hospitality and movement.' },
      { title: 'Iraqi heritage', body: 'A proudly Iraqi brand connected to the people and routines of the local market.' },
    ],
    productsKicker: 'Our range', productsTitle: 'One Pearl experience. Four sizes.',
    productsBody: 'From family tables to workdays, meetings and hospitality, Pearl offers four practical formats for different moments.',
    storyKicker: 'Proudly Iraqi', storyTitle: 'A familiar Iraqi name with a clear purpose.',
    storyBody: 'Pearl is produced by Bright Pearl for Purifying and Bottling Water. The brand is built around a straightforward idea: make purified drinking water easy to recognize, easy to choose and dependable in everyday use.',
    storyQuote: 'Pure. Trusted. Refreshing. Iraqi.',
    qualityKicker: 'Quality', qualityTitle: 'Purity starts with discipline.',
    qualityBody: 'From treatment and quality control to filling and packaging, every stage should support one goal: a consistent, clean Pearl experience.',
    ctaTitle: 'Find the Pearl format that fits your day.',
    ctaBody: 'Explore the full range, learn more about Pearl or get directions to the company in Baghdad.',
  },
  about: {
    eyebrow: 'Our Story', title: 'An Iraqi water brand made to be part of everyday life.',
    intro: 'Pearl brings together a familiar local identity, practical product formats and a clear commitment to purified drinking water for Iraqi consumers.',
    heritageTitle: 'Built close to the people we serve.',
    heritageBody: 'From Baghdad, Pearl serves the daily moments where clean drinking water matters — family tables, offices, hospitality, meetings, events and life on the move. The brand stays recognizably local while presenting itself with clarity and confidence.',
    promiseTitle: 'What guides Pearl', promiseBody: 'Purity, trust, freshness, quality, Iraqi heritage, reliability and care.',
    values: [
      { title: 'Purity', body: 'The product, the communication and the visual experience all begin with clarity.' },
      { title: 'Reliability', body: 'A consistent experience across sizes, touchpoints and everyday use.' },
      { title: 'Care', body: 'Attention to the details that shape how people experience the product.' },
      { title: 'Heritage', body: 'Proudly Iraqi, expressed in a modern and confident way.' },
    ],
  },
  products: {
    eyebrow: 'Products', title: 'Four formats for the rhythm of everyday life.',
    intro: 'Pearl is available in four practical sizes, each designed around a clear everyday use while keeping one consistent brand experience.',
    items: {
      '1000': { size: '1000 ml', name: 'Family Bottle', use: 'Tables · meals · sharing', body: 'A larger bottle for family tables, meals, gatherings and longer moments.' },
      '500': { size: '500 ml', name: 'Everyday Bottle', use: 'Work · commute · active days', body: 'A versatile personal size for work, commuting and everyday hydration.' },
      '330': { size: '330 ml', name: 'Compact Bottle', use: 'Meetings · cafés · events', body: 'A compact format suited to meetings, cafés, events and shorter occasions.' },
      '200': { size: '200 ml', name: 'Hospitality Cup', use: 'Hospitality · events · service', body: 'A convenient single-serve format for hospitality, service and events.' },
    },
  },
  quality: {
    eyebrow: 'Quality', title: 'Consistency matters at every stage.',
    intro: 'Pearl communicates quality through a disciplined process, clean presentation and verifiable information rather than exaggerated claims.',
    steps: [
      { no: '01', title: 'Water treatment', body: 'The process begins with controlled treatment designed for purified drinking water.' },
      { no: '02', title: 'Purification', body: 'Purification stages support a clean and consistent water profile.' },
      { no: '03', title: 'Quality checks', body: 'Production quality is supported by routine controls and documented checks.' },
      { no: '04', title: 'Filling & packaging', body: 'The final stage focuses on clean filling, practical packaging and consistent presentation.' },
    ],
    closingTitle: 'Evidence over exaggeration.',
    closingBody: 'Detailed certificates, approvals and technical process claims should always be published from current verified documents. Pearl keeps the message clear and the proof responsible.',
    faq: [
      { question: 'What sizes does Pearl offer?', answer: 'Pearl is presented in 1000 ml, 500 ml, 330 ml and 200 ml formats.' },
      { question: 'Is Pearl an Iraqi brand?', answer: 'Yes. Pearl is an Iraqi purified water brand produced by Bright Pearl for Purifying and Bottling Water.' },
      { question: 'Where is Pearl located?', answer: 'The company location is in Baghdad, Iraq. The contact page links directly to the map location.' },
      { question: 'Where can technical approvals be found?', answer: 'Current certificates and regulatory details should be published only after they are confirmed from the latest company documents.' },
    ],
  },
  contact: {
    eyebrow: 'Contact', title: 'Talk to Pearl.', intro: 'For sales, customer inquiries or directions, use the contact options below.',
    sales: 'Sales & customer service', location: 'Baghdad', locationBody: 'Open the map pin for directions to Pearl in Baghdad.',
    callBody: 'Call Pearl for product, sales and customer service inquiries.',
  },
  meta: {
    home: { title: 'Pearl Water Iraq | Purified Bottled Water', description: 'Pearl is an Iraqi purified bottled water brand offering 1000 ml, 500 ml, 330 ml and 200 ml formats in Baghdad, Iraq.' },
    about: { title: 'About Pearl Water | Iraqi Purified Water Brand', description: 'Discover Pearl Water, an Iraqi purified water brand produced by Bright Pearl for Purifying and Bottling Water.' },
    products: { title: 'Pearl Water Products | 1000 ml, 500 ml, 330 ml & 200 ml', description: 'Explore Pearl purified water in 1000 ml, 500 ml, 330 ml and 200 ml formats for everyday use and hospitality.' },
    quality: { title: 'Pearl Water Quality | Purified Water in Iraq', description: 'Learn about the quality approach behind Pearl purified bottled water, from treatment and purification to checks and packaging.' },
    contact: { title: 'Contact Pearl Water | Baghdad, Iraq', description: 'Contact Pearl Water in Baghdad for sales, customer service and directions.' },
  },
};

const ar: Content = {
  brandLine: 'نقاء طبيعي. ثقة راسخة.',
  descriptor: 'مياه منقاة',
  nav: { home: 'الرئيسية', about: 'قصتنا', products: 'المنتجات', quality: 'الجودة', contact: 'تواصل معنا' },
  common: {
    explore: 'اكتشف', discover: 'اكتشف', call: 'اتصل باللؤلؤة', directions: 'احصل على الاتجاهات', learnMore: 'اعرف أكثر',
    viewProducts: 'شاهد المنتجات', contact: 'تواصل معنا', madeInIraq: 'بكل فخر عراقية', sizes: 'أربعة أحجام عملية',
  },
  home: {
    eyebrow: 'مياه اللؤلؤة المنقاة · العراق',
    title: 'نقاء طبيعي.\nثقة راسخة.',
    body: 'اللؤلؤة علامة مياه عراقية منقاة صُممت لترافق تفاصيل الحياة اليومية — في البيت، العمل، الطريق، والضيافة.',
    primary: 'اكتشف منتجاتنا', secondary: 'اكتشف قصتنا',
    pillarsTitle: 'وعد بسيط، كل يوم.',
    pillarsBody: 'تقوم اللؤلؤة على الصفات التي يبحث عنها الناس بالماء الذي يختارونه لأنفسهم وعائلاتهم وضيوفهم.',
    pillars: [
      { title: 'النقاء', body: 'تركيز واضح على مياه شرب نظيفة ومنعشة.' },
      { title: 'الثقة', body: 'ثبات واهتمام وتجربة مألوفة يمكن الاعتماد عليها يومياً.' },
      { title: 'الانتعاش', body: 'أحجام عملية للاستخدام اليومي والحركة والضيافة.' },
      { title: 'الإرث العراقي', body: 'علامة عراقية مرتبطة بالناس وتفاصيل السوق والحياة المحلية.' },
    ],
    productsKicker: 'منتجاتنا', productsTitle: 'تجربة لؤلؤة واحدة. أربعة أحجام.',
    productsBody: 'من مائدة العائلة إلى يوم العمل والاجتماعات والضيافة، توفر اللؤلؤة أربعة أحجام عملية لمواقف مختلفة.',
    storyKicker: 'بكل فخر عراقية', storyTitle: 'اسم عراقي مألوف بهدف واضح.',
    storyBody: 'تنتج اللؤلؤة من شركة بريق اللؤلؤة لتنقية وتعبئة المياه. تقوم العلامة على فكرة بسيطة: مياه شرب منقاة، سهلة التمييز والاختيار، ومناسبة للاستخدام اليومي.',
    storyQuote: 'نقاء. ثقة. انتعاش. إرث عراقي.',
    qualityKicker: 'الجودة', qualityTitle: 'النقاء يبدأ من الانضباط.',
    qualityBody: 'من المعالجة وضبط الجودة إلى التعبئة والتغليف، كل مرحلة تدعم هدفاً واحداً: تجربة لؤلؤة نظيفة ومتسقة.',
    ctaTitle: 'اختر حجم اللؤلؤة المناسب ليومك.',
    ctaBody: 'اكتشف المجموعة الكاملة، تعرف أكثر على اللؤلؤة، أو احصل على اتجاهات الشركة في بغداد.',
  },
  about: {
    eyebrow: 'قصتنا', title: 'علامة مياه عراقية صُممت لتكون جزءاً من الحياة اليومية.',
    intro: 'تجمع اللؤلؤة بين هوية محلية مألوفة، أحجام عملية، ورسالة واضحة حول مياه الشرب المنقاة للمستهلك العراقي.',
    heritageTitle: 'قريبة من الناس الذين نخدمهم.',
    heritageBody: 'من بغداد، ترافق اللؤلؤة اللحظات اليومية التي يكون فيها الماء النظيف مهماً — مائدة العائلة، المكاتب، الضيافة، الاجتماعات، المناسبات، والحركة اليومية. هوية محلية مألوفة بتقديم واضح وواثق.',
    promiseTitle: 'ما الذي يقود اللؤلؤة', promiseBody: 'النقاء، الثقة، الانتعاش، الجودة، الإرث العراقي، الاعتمادية، والاهتمام.',
    values: [
      { title: 'النقاء', body: 'المنتج والتواصل والتجربة البصرية تبدأ جميعها من الوضوح.' },
      { title: 'الاعتمادية', body: 'تجربة متسقة عبر الأحجام ونقاط التواصل والاستخدام اليومي.' },
      { title: 'الاهتمام', body: 'عناية بالتفاصيل التي تصنع تجربة المستهلك مع المنتج.' },
      { title: 'الإرث', body: 'عراقية بفخر، بصورة حديثة وواثقة بعيداً عن المبالغة.' },
    ],
  },
  products: {
    eyebrow: 'المنتجات', title: 'أربعة أحجام لإيقاع الحياة اليومية.',
    intro: 'تتوفر اللؤلؤة بأربعة أحجام عملية، لكل منها استخدام واضح مع الحفاظ على تجربة واحدة للعلامة.',
    items: {
      '1000': { size: '1000 مل', name: 'عبوة العائلة', use: 'المائدة · الوجبات · المشاركة', body: 'عبوة أكبر لمائدة العائلة والوجبات والتجمعات واللحظات الأطول.' },
      '500': { size: '500 مل', name: 'العبوة اليومية', use: 'العمل · الطريق · النشاط اليومي', body: 'حجم شخصي عملي للعمل والطريق والترطيب خلال اليوم.' },
      '330': { size: '330 مل', name: 'العبوة المدمجة', use: 'الاجتماعات · المقاهي · المناسبات', body: 'حجم مدمج مناسب للاجتماعات والمقاهي والمناسبات واللحظات الأقصر.' },
      '200': { size: '200 مل', name: 'كوب الضيافة', use: 'الضيافة · المناسبات · الخدمة', body: 'حجم فردي مناسب للضيافة والخدمة والمناسبات.' },
    },
  },
  quality: {
    eyebrow: 'الجودة', title: 'الثبات مهم في كل مرحلة.',
    intro: 'تتحدث اللؤلؤة عن الجودة من خلال عملية منضبطة، تقديم نظيف، ومعلومات قابلة للتحقق بعيداً عن المبالغة.',
    steps: [
      { no: '01', title: 'معالجة المياه', body: 'تبدأ العملية بمعالجة مضبوطة مخصصة لمياه الشرب المنقاة.' },
      { no: '02', title: 'التنقية', body: 'تدعم مراحل التنقية الحصول على مياه نظيفة ومتسقة.' },
      { no: '03', title: 'فحوصات الجودة', body: 'تُدعم جودة الإنتاج بإجراءات رقابية وفحوصات موثقة ضمن العملية.' },
      { no: '04', title: 'التعبئة والتغليف', body: 'تركز المرحلة الأخيرة على التعبئة النظيفة، العبوات العملية، والتقديم المتسق.' },
    ],
    closingTitle: 'الدليل أهم من المبالغة.',
    closingBody: 'يجب نشر الشهادات والاعتمادات والتفاصيل التقنية من أحدث الوثائق المؤكدة لدى الشركة. رسالة اللؤلؤة تبقى واضحة ومسؤولة.',
    faq: [
      { question: 'ما هي أحجام مياه اللؤلؤة؟', answer: 'تتوفر اللؤلؤة بأحجام 1000 مل، 500 مل، 330 مل، و200 مل.' },
      { question: 'هل اللؤلؤة علامة عراقية؟', answer: 'نعم. اللؤلؤة علامة مياه عراقية منقاة تنتجها شركة بريق اللؤلؤة لتنقية وتعبئة المياه.' },
      { question: 'أين تقع شركة اللؤلؤة؟', answer: 'موقع الشركة في بغداد، العراق، ويمكن فتح الموقع مباشرة من صفحة التواصل.' },
      { question: 'أين يمكن الاطلاع على الاعتمادات الفنية؟', answer: 'تُنشر الشهادات والتفاصيل التنظيمية بعد تأكيدها من أحدث الوثائق الرسمية للشركة.' },
    ],
  },
  contact: {
    eyebrow: 'تواصل معنا', title: 'تواصل مع اللؤلؤة.', intro: 'للمبيعات، استفسارات العملاء، أو الوصول إلى الموقع، استخدم الخيارات أدناه.',
    sales: 'المبيعات وخدمة العملاء', location: 'بغداد', locationBody: 'افتح موقع الخريطة للحصول على الاتجاهات إلى شركة اللؤلؤة في بغداد.',
    callBody: 'اتصل باللؤلؤة للاستفسار عن المنتجات والمبيعات وخدمة العملاء.',
  },
  meta: {
    home: { title: 'مياه اللؤلؤة العراق | مياه شرب معبأة ومنقاة', description: 'اللؤلؤة علامة مياه عراقية منقاة تتوفر بأحجام 1000 مل و500 مل و330 مل و200 مل في بغداد، العراق.' },
    about: { title: 'عن مياه اللؤلؤة | علامة مياه عراقية منقاة', description: 'تعرف على قصة مياه اللؤلؤة، العلامة العراقية للمياه المنقاة التي تنتجها شركة بريق اللؤلؤة لتنقية وتعبئة المياه.' },
    products: { title: 'منتجات مياه اللؤلؤة | 1000 و500 و330 و200 مل', description: 'اكتشف أحجام مياه اللؤلؤة المنقاة: 1000 مل و500 مل و330 مل و200 مل للاستخدام اليومي والضيافة.' },
    quality: { title: 'جودة مياه اللؤلؤة | مياه منقاة في العراق', description: 'تعرف على نهج الجودة في مياه اللؤلؤة من المعالجة والتنقية إلى الفحوصات والتعبئة.' },
    contact: { title: 'تواصل مع مياه اللؤلؤة | بغداد، العراق', description: 'تواصل مع مياه اللؤلؤة في بغداد للمبيعات وخدمة العملاء والاتجاهات.' },
  },
};

const ku: Content = {
  brandLine: 'پاکی سروشتی. کوالێتی جێی متمانە.',
  descriptor: 'ئاوی پاککراو',
  nav: { home: 'سەرەکی', about: 'چیرۆکمان', products: 'بەرهەمەکان', quality: 'کوالێتی', contact: 'پەیوەندی' },
  common: {
    explore: 'بدۆزەوە', discover: 'بدۆزەوە', call: 'پەیوەندی بە Pearl', directions: 'ڕێنمایی شوێن', learnMore: 'زیاتر بزانە',
    viewProducts: 'بەرهەمەکان ببینە', contact: 'پەیوەندیمان پێوە بکە', madeInIraq: 'بە شانازییەوە عێراقی', sizes: 'چوار قەبارەی پراکتیکی',
  },
  home: {
    eyebrow: 'Pearl · ئاوی پاککراو · عێراق',
    title: 'پاکی سروشتی.\nکوالێتی جێی متمانە.',
    body: 'Pearl براندێکی عێراقیی ئاوی پاککراوە کە بۆ ژیانی ڕۆژانە دروست کراوە — لە ماڵ، کار، ڕێگا و میوانداری.',
    primary: 'بەرهەمەکان ببینە', secondary: 'چیرۆکمان بدۆزەوە',
    pillarsTitle: 'بەڵێنێکی سادە، هەموو ڕۆژێک.',
    pillarsBody: 'Pearl لەسەر ئەو تایبەتمەندییانە بنیاد نراوە کە خەڵک لە ئاوی ڕۆژانەیان چاوەڕێی دەکەن.',
    pillars: [
      { title: 'پاکی', body: 'سەرنجێکی ڕوون لەسەر ئاوی خواردنەوەی پاک و تازە.' },
      { title: 'متمانە', body: 'یەکسانی، گرنگیدان و ئەزموونێکی ئاشنا بۆ بەکارهێنانی ڕۆژانە.' },
      { title: 'تازەیی', body: 'قەبارەی پراکتیکی بۆ ڕۆژانە، جوڵە و میوانداری.' },
      { title: 'میراتی عێراقی', body: 'براندێکی عێراقی نزیک لە خەڵک و ژیانی ناوخۆ.' },
    ],
    productsKicker: 'بەرهەمەکانمان', productsTitle: 'یەک ئەزموونی Pearl. چوار قەبارە.',
    productsBody: 'لە مێزی خێزانەوە بۆ کار، کۆبوونەوە و میوانداری، Pearl چوار قەبارەی پراکتیکی پێشکەش دەکات.',
    storyKicker: 'بە شانازییەوە عێراقی', storyTitle: 'ناوێکی عێراقیی ئاشنا بە ئامانجێکی ڕوون.',
    storyBody: 'Pearl لەلایەن Bright Pearl for Purifying and Bottling Water بەرهەم دەهێنرێت. بیرۆکەکە سادەیە: ئاوی پاککراوی ئاسان بۆ ناسین و هەڵبژاردن و گونجاو بۆ ڕۆژانە.',
    storyQuote: 'پاکی. متمانە. تازەیی. میراتی عێراقی.',
    qualityKicker: 'کوالێتی', qualityTitle: 'پاکی لە ڕێکخستنەوە دەست پێدەکات.',
    qualityBody: 'لە چارەسەرکردن و کۆنترۆڵی کوالێتی تا پڕکردنەوە و پێچانەوە، هەر قۆناغێک بۆ ئەزموونێکی پاک و یەکسان کار دەکات.',
    ctaTitle: 'قەبارەی Pearlی گونجاو بۆ ڕۆژەکەت هەڵبژێرە.',
    ctaBody: 'هەموو بەرهەمەکان ببینە، زیاتر لە Pearl بزانە یان شوێنی کۆمپانیا لە بەغدا بدۆزەوە.',
  },
  about: {
    eyebrow: 'چیرۆکمان', title: 'براندێکی ئاوی عێراقی بۆ ژیانی ڕۆژانە.',
    intro: 'Pearl ناسنامەیەکی ناوخۆیی ئاشنا، قەبارەی پراکتیکی و پەیامێکی ڕوون سەبارەت بە ئاوی خواردنەوەی پاککراو کۆدەکاتەوە.',
    heritageTitle: 'نزیک لە خەڵکی خۆمان.',
    heritageBody: 'لە بەغدا، Pearl لەو ساتانەدا لەگەڵ خەڵکە کە ئاوی پاک گرنگە — ماڵ، کار، میوانداری، کۆبوونەوە و ژیانی ڕۆژانە.',
    promiseTitle: 'ئەو بەهایانەی Pearl ڕێنمایی دەکەن', promiseBody: 'پاکی، متمانە، تازەیی، کوالێتی، میراتی عێراقی، پشتپێبەستن و گرنگیدان.',
    values: [
      { title: 'پاکی', body: 'بەرهەم و پەیام و دیزاین هەموویان لە ڕوونییەوە دەست پێدەکەن.' },
      { title: 'پشتپێبەستن', body: 'ئەزموونێکی یەکسان لە قەبارە و بەکارهێنانی جیاوازدا.' },
      { title: 'گرنگیدان', body: 'گرنگیدان بە وردەکارییەکانی ئەزموونی بەکارهێنەر.' },
      { title: 'میرات', body: 'بە شانازییەوە عێراقی، بە شێوەیەکی مۆدێرن و دڵنیابەخش.' },
    ],
  },
  products: {
    eyebrow: 'بەرهەمەکان', title: 'چوار قەبارە بۆ ڕیتمی ژیانی ڕۆژانە.',
    intro: 'Pearl بە چوار قەبارەی پراکتیکی بەردەستە؛ هەر یەک بۆ بەکارهێنانێکی دیاریکراو و بە هەمان ئەزموونی براند.',
    items: {
      '1000': { size: '1000 مل', name: 'بوتڵی خێزان', use: 'مێز · خواردن · هاوبەشکردن', body: 'قەبارەی گەورەتر بۆ مێزی خێزان، خواردن و کۆبوونەوە.' },
      '500': { size: '500 مل', name: 'بوتڵی ڕۆژانە', use: 'کار · ڕێگا · جوڵە', body: 'قەبارەی تاکەکەسی بۆ کار، ڕێگا و ئاودانەوەی ڕۆژانە.' },
      '330': { size: '330 مل', name: 'بوتڵی کۆمپاکت', use: 'کۆبوونەوە · کافێ · بۆنە', body: 'قەبارەیەکی بچووک و گونجاو بۆ کۆبوونەوە و بۆنەکان.' },
      '200': { size: '200 مل', name: 'کوپی میوانداری', use: 'میوانداری · بۆنە · خزمەتگوزاری', body: 'قەبارەی تاکەکەسی بۆ میوانداری و خزمەتگوزاری.' },
    },
  },
  quality: {
    eyebrow: 'کوالێتی', title: 'یەکسانی لە هەر قۆناغێکدا گرنگە.',
    intro: 'Pearl کوالێتی بە ڕێگای پرۆسەیەکی ڕێکخراو، پێشکەشکردنی پاک و زانیاریی پشتڕاستکراو دەخاتەڕوو.',
    steps: [
      { no: '01', title: 'چارەسەرکردنی ئاو', body: 'پرۆسەکە بە چارەسەرکردنی کۆنترۆڵکراو بۆ ئاوی خواردنەوە دەست پێدەکات.' },
      { no: '02', title: 'پاککردنەوە', body: 'قۆناغەکانی پاککردنەوە بۆ دۆخێکی پاک و یەکسانی ئاو کار دەکەن.' },
      { no: '03', title: 'پشکنینی کوالێتی', body: 'کوالێتی بە کۆنترۆڵ و پشکنینی بەڵگەدار پشتگیری دەکرێت.' },
      { no: '04', title: 'پڕکردنەوە و پێچانەوە', body: 'قۆناغی کۆتایی سەرنج دەدات بە پڕکردنەوەی پاک و پێشکەشکردنی یەکسان.' },
    ],
    closingTitle: 'بەڵگە گرنگترە لە مبالغە.',
    closingBody: 'بڕوانامە و زانیاریی تەکنیکی تەنها دوای پشتڕاستکردنەوە لە بەڵگە نوێ و فەرمییەکانی کۆمپانیا دەبێت بڵاو بکرێنەوە.',
    faq: [
      { question: 'Pearl چ قەبارەیەکی هەیە؟', answer: 'Pearl بە قەبارەکانی 1000 مل، 500 مل، 330 مل و 200 مل بەردەستە.' },
      { question: 'Pearl براندێکی عێراقییە؟', answer: 'بەڵێ. Pearl براندێکی عێراقیی ئاوی پاککراوە.' },
      { question: 'شوێنی کۆمپانیا لە کوێیە؟', answer: 'شوێنی کۆمپانیا لە بەغدا، عێراقە و لینکەکە لە پەڕەی پەیوەندی بەردەستە.' },
      { question: 'زانیاریی فەرمیی کوالێتی لە کوێ بڵاو دەکرێتەوە؟', answer: 'بڕوانامە و زانیاریی ڕێکخراوی دوای پشتڕاستکردنەوە لە نوێترین بەڵگەکانی کۆمپانیا بڵاو دەکرێنەوە.' },
    ],
  },
  contact: {
    eyebrow: 'پەیوەندی', title: 'پەیوەندی بە Pearl بکە.', intro: 'بۆ فرۆشتن، پرسیاری کڕیار یان ڕێنمایی شوێن، ئەم هەڵبژاردنانە بەکاربهێنە.',
    sales: 'فرۆشتن و خزمەتگوزاری کڕیار', location: 'بەغدا', locationBody: 'لینکی نەخشە بکەرەوە بۆ گەیشتن بە Pearl لە بەغدا.',
    callBody: 'بۆ پرسیار لەسەر بەرهەم و فرۆشتن پەیوەندی بکە.',
  },
  meta: {
    home: { title: 'Pearl Water Iraq | ئاوی پاککراوی پێچراو', description: 'Pearl براندێکی عێراقیی ئاوی پاککراوە بە قەبارەکانی 1000، 500، 330 و 200 مل لە بەغدا.' },
    about: { title: 'دەربارەی Pearl Water | براندی ئاوی عێراقی', description: 'چیرۆک و بەهاکانی Pearl Water، براندی عێراقیی ئاوی پاککراو، بدۆزەوە.' },
    products: { title: 'بەرهەمەکانی Pearl Water | 1000، 500، 330 و 200 مل', description: 'قەبارەکانی Pearl Water بۆ ڕۆژانە و میوانداری ببینە.' },
    quality: { title: 'کوالێتی Pearl Water | ئاوی پاککراو لە عێراق', description: 'زیاتر بزانە لەسەر پرۆسەی کوالێتی Pearl لە چارەسەرکردن و پاککردنەوە تا پێچانەوە.' },
    contact: { title: 'پەیوەندی بە Pearl Water | بەغدا، عێراق', description: 'بۆ فرۆشتن، خزمەتگوزاری و ڕێنمایی شوێن پەیوەندی بە Pearl Water بکە.' },
  },
};

const content: Record<Locale, Content> = { en, ar, ku };

export function getContent(locale: Locale): Content {
  return content[locale];
}
