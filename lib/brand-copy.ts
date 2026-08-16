import type { Locale } from './site';

type ProofStat = { value: string; label: string };
type JourneyStep = { no: string; title: string; body: string };
type StandardCard = { code: string; title: string; body: string };
type TrustPoint = { title: string; body: string };
type FaqItem = { question: string; answer: string };

type PremiumBrandCopy = {
  home: {
    heroTitle: string;
    heroBody: string;
    storyTitle: string;
    storyBody: string;
    qualityTitle: string;
    qualityBody: string;
    qualityStats: ProofStat[];
  };
  quality: {
    heroEyebrow: string;
    heroTitle: string;
    heroIntro: string;
    processEyebrow: string;
    processTitle: string;
    processBody: string;
    processVisualTitle: string;
    processVisualBody: string;
    steps: JourneyStep[];
    standardsEyebrow: string;
    standardsTitle: string;
    standardsBody: string;
    standards: StandardCard[];
    testingEyebrow: string;
    testingTitle: string;
    testingBody: string;
    testingMetric: string;
    testingMetricLabel: string;
    trustPoints: TrustPoint[];
    closingTitle: string;
    closingBody: string;
    faqTitle: string;
    faqIntro: string;
    faq: FaqItem[];
  };
};

const ar: PremiumBrandCopy = {
  home: {
    heroTitle: 'نقاء طبيعي.\nثقة راسخة.',
    heroBody: 'من بغداد إلى تفاصيل يومك، اللؤلؤة مياه عراقية منقاة تجمع بين الانتعاش، الجودة المستقرة، وعناية تبدأ من داخل المعمل وتوصل للعبوة بين إيديك.',
    storyTitle: 'اسم عراقي مألوف، حاضر بتفاصيل يومنا.',
    storyBody: 'اللؤلؤة مو مجرد عبوة ماء. هي اسم عرفته البيوت، المكاتب والضيافة العراقية؛ واليوم نقدم هذا الإرث بصورة أنظف، أهدأ، وأقرب لمستوى المنتج نفسه.',
    qualityTitle: '7 خطوات للنقاء.\nفحص كل ساعتين.',
    qualityBody: 'الجودة عند اللؤلؤة مو عبارة تنكتب على الليبل. من عملية التنقية ذات السبع خطوات إلى الفحص الدوري داخل مختبرات المعمل، كل تفصيل معمول حتى تبقى التجربة ثابتة وواضحة.',
    qualityStats: [
      { value: '7', label: 'خطوات ضمن عملية التنقية' },
      { value: '2h', label: 'فحص دوري للماء داخل المعمل' },
      { value: 'FDA · USP', label: 'معايير جودة منشورة من الشركة' },
    ],
  },
  quality: {
    heroEyebrow: 'النقاء والجودة',
    heroTitle: 'الجودة مو مجرد وعد.\nهي عملية تتكرر بكل عبوة.',
    heroIntro: 'اللؤلؤة تعلن عن عملية تنقية من 7 خطوات، وفحص للماء المنتج كل ساعتين داخل مختبرات المعمل، إلى جانب فحوص مستقلة وضوابط صحية للتعبئة والتشغيل.',
    processEyebrow: 'رحلة النقاء',
    processTitle: 'سبع محطات. هدف واحد: ماء تطمّن له.',
    processBody: 'من المصدر المحلي إلى التعبئة، تمر رحلة اللؤلؤة بسلسلة مترابطة من التصفية والتنقية والتقطير والفحص والتعامل الصحي مع المنتج. التجربة أدناه تربط كل مرحلة بحركة السكرول حتى تنقري القصة خطوة بخطوة.',
    processVisualTitle: '7-Step Purification',
    processVisualBody: 'رحلة متدرجة من الماء الخام إلى عبوة جاهزة لعائلتك.',
    steps: [
      { no: '01', title: 'المصدر المحلي', body: 'تبدأ الرحلة من مياه مصدرها محلي، ضمن منظومة إنتاج مخصصة لمياه الشرب المعبأة والمنقاة.' },
      { no: '02', title: 'التصفية الأولية', body: 'تدخل المياه مراحل تصفية لإزالة الشوائب وتهيئتها للمراحل اللاحقة ضمن عملية المعالجة.' },
      { no: '03', title: 'التنقية المتقدمة', body: 'تستمر المعالجة بتقنيات تنقية مصممة للوصول إلى مستوى ثابت من الصفاء والجودة.' },
      { no: '04', title: 'التقطير والمعالجة النهائية', body: 'تستخدم اللؤلؤة تقنيات تصفية وتقطير ضمن منظومة التنقية للوصول إلى مواصفات المياه المنقاة.' },
      { no: '05', title: 'الفحص المختبري', body: 'يتم فحص الماء المنتج كل ساعتين داخل مختبرات المعمل، مع الاعتماد أيضاً على مختبرات مستقلة.' },
      { no: '06', title: 'التعبئة الصحية', body: 'تلتزم فرق التشغيل بممارسات صحية وجداول تعقيم للمعدات أثناء مراحل التعبئة والتعامل مع المنتج.' },
      { no: '07', title: 'عبوة موثوقة', body: 'تستخدم مواد تعبئة معتمدة وخالية من المواد المعادة، ثم تخضع العبوة للتدقيق قبل وصولها للسوق.' },
    ],
    standardsEyebrow: 'معايير منشورة',
    standardsTitle: 'معايير واضحة، مو كلام عام.',
    standardsBody: 'بحسب المعلومات المنشورة من الشركة، بُني نظام الجودة بالاستناد إلى إرشادات تصنيع المياه لدى الجهات الصحية الأمريكية والعراقية، مع الإشارة إلى معايير محددة للمياه المنقاة.',
    standards: [
      { code: 'FDA §165.110', title: 'معيار المياه المنقاة', body: 'تذكر اللؤلؤة أن مياهها تطابق معيار المياه المنقاة لدى إدارة الغذاء والدواء الأمريكية بموجب 21 CFR §165.110.' },
      { code: 'USP 23', title: 'دستور الأدوية الأمريكي', body: 'كما تشير معلومات الشركة إلى مطابقة معيار USP 23 للمياه المنقاة، وهو معيار صارم لنوعية المياه.' },
      { code: 'Iraq MOH', title: 'وزارة الصحة العراقية', body: 'تؤكد الشركة أن معاييرها وضعت وفق إرشادات وزارة الصحة العراقية وأن مياه اللؤلؤة مصادق عليها من الوزارة.' },
    ],
    testingEyebrow: 'مختبرات الجودة',
    testingTitle: 'كل ساعتين، نرجع نقيس.',
    testingBody: 'الماء المنتج يُفحص دورياً داخل مختبرات المعمل كل ساعتين، إضافة إلى الفحص بواسطة مختبرات مستقلة. الفكرة بسيطة: الجودة تنقاس باستمرار، مو بالانطباع.',
    testingMetric: '02:00',
    testingMetricLabel: 'ساعتان بين دورات الفحص داخل المعمل',
    trustPoints: [
      { title: 'تعقيم منتظم', body: 'جداول تعقيم صارمة للمعدات وخطوط التشغيل.' },
      { title: 'ممارسات صحية', body: 'تدريب الموظفين على الممارسات الصحية داخل بيئة الإنتاج.' },
      { title: 'مواد تعبئة بكر', body: 'استخدام مواد تعبئة معتمدة وخالية من المواد المعادة بحسب معلومات الشركة.' },
    ],
    closingTitle: 'نقاء تقدر تشوف قصته، مو بس تقرأ اسمه.',
    closingBody: 'من عملية التنقية إلى المختبر والتعبئة، هدف اللؤلؤة واحد: تقديم ماء نقي، آمن ومنعش للعائلة العراقية بثبات تستحق تثق به.',
    faqTitle: 'أسئلة عن الجودة',
    faqIntro: 'مختصر واضح لأهم ما تنشره اللؤلؤة عن عملية التنقية والفحوص والمعايير.',
    faq: [
      { question: 'كم مرحلة تستخدم اللؤلؤة في التنقية؟', answer: 'تذكر اللؤلؤة أن مياهها تُنقى باستخدام عملية من 7 خطوات للوصول إلى مياه نقية وصحية ومنعشة.' },
      { question: 'كم مرة يتم فحص المياه؟', answer: 'بحسب معلومات الشركة، يتم فحص الماء المنتج كل ساعتين داخل مختبرات المعمل، إضافة إلى فحوص بواسطة مختبرات مستقلة.' },
      { question: 'ما المعايير التي تشير إليها اللؤلؤة؟', answer: 'تشير الشركة إلى معيار FDA للمياه المنقاة تحت 21 CFR §165.110 وإلى USP 23، إلى جانب إرشادات وزارة الصحة العراقية.' },
      { question: 'ماذا عن العبوات والنظافة؟', answer: 'تذكر الشركة التزامها بجداول تعقيم للمعدات، تدريب الموظفين على الممارسات الصحية، واستخدام مواد تعبئة معتمدة وخالية من المواد المعادة.' },
    ],
  },
};

const en: PremiumBrandCopy = {
  home: {
    heroTitle: 'Natural Purity.\nTrusted Quality.',
    heroBody: 'From Baghdad into the rhythm of everyday life, Pearl is Iraqi purified water shaped by consistent quality, refreshing simplicity and care that starts inside the plant and continues all the way to the bottle in your hand.',
    storyTitle: 'A familiar Iraqi name, made for everyday moments.',
    storyBody: 'Pearl is more than a water format. It is a familiar name across Iraqi homes, workplaces and hospitality — now presented with a cleaner digital experience that reflects the product behind it.',
    qualityTitle: '7 purification steps.\nTesting every 2 hours.',
    qualityBody: 'Quality at Pearl is not just a line on a label. The published process combines a seven-step purification journey with regular on-site laboratory testing and disciplined production practices.',
    qualityStats: [
      { value: '7', label: 'steps in the purification process' },
      { value: '2h', label: 'on-site water testing cycle' },
      { value: 'FDA · USP', label: 'published quality references' },
    ],
  },
  quality: {
    heroEyebrow: 'Purity & quality',
    heroTitle: 'Quality is not a promise.\nIt is a routine repeated in every bottle.',
    heroIntro: 'Pearl publishes a seven-step purification process, testing of produced water every two hours in on-site laboratories, independent laboratory checks and disciplined sanitation practices.',
    processEyebrow: 'The purity journey',
    processTitle: 'Seven stages. One goal: water you can trust.',
    processBody: 'From a local source through filtration, purification, distillation, testing and hygienic handling, Pearl describes a controlled journey built around consistency. Scroll through the process stage by stage.',
    processVisualTitle: '7-Step Purification',
    processVisualBody: 'A controlled journey from source water to a bottle ready for your family.',
    steps: [
      { no: '01', title: 'Local source', body: 'The journey begins with locally sourced water entering a production system dedicated to purified bottled drinking water.' },
      { no: '02', title: 'Initial filtration', body: 'Water moves through filtration stages that remove impurities and prepare it for the next treatment steps.' },
      { no: '03', title: 'Advanced purification', body: 'Further purification supports a consistent profile of clarity, freshness and quality.' },
      { no: '04', title: 'Distillation & final treatment', body: 'Pearl describes the use of filtration and distillation technologies as part of its purification system.' },
      { no: '05', title: 'Laboratory testing', body: 'Produced water is tested every two hours in on-site laboratories and is also checked by independent laboratories.' },
      { no: '06', title: 'Hygienic filling', body: 'Production teams follow sanitation schedules and hygienic practices throughout filling and product handling.' },
      { no: '07', title: 'Trusted packaging', body: 'Pearl states that approved virgin packaging materials are used before bottles are released to the market.' },
    ],
    standardsEyebrow: 'Published standards',
    standardsTitle: 'Specific standards, not vague claims.',
    standardsBody: 'According to Pearl’s published company information, its quality system was established around strict U.S. FDA and Iraq Ministry of Health manufacturing guidance, with specific purified-water references.',
    standards: [
      { code: 'FDA §165.110', title: 'Purified water standard', body: 'Pearl states that its purified water meets the U.S. Food and Drug Administration standard under 21 CFR §165.110.' },
      { code: 'USP 23', title: 'U.S. Pharmacopoeia', body: 'Pearl also references the United States Pharmacopoeia 23 standard for Purified Water.' },
      { code: 'Iraq MOH', title: 'Iraq Ministry of Health', body: 'The company states that its quality standards follow Iraq Ministry of Health guidance and that Pearl Purified Water is approved by the ministry.' },
    ],
    testingEyebrow: 'Quality laboratories',
    testingTitle: 'Every two hours, quality gets measured again.',
    testingBody: 'Produced water is routinely tested in the plant’s on-site laboratories every two hours, alongside independent laboratory checks. The principle is simple: quality should be measured continuously, not assumed.',
    testingMetric: '02:00',
    testingMetricLabel: 'hours between on-site testing cycles',
    trustPoints: [
      { title: 'Strict sanitation', body: 'Scheduled sanitation procedures across production equipment.' },
      { title: 'Hygienic practices', body: 'Staff training focused on sanitary production practices.' },
      { title: 'Virgin packaging', body: 'Approved virgin packaging materials, with no recycled material according to the company’s published information.' },
    ],
    closingTitle: 'Purity with a process you can understand.',
    closingBody: 'From purification to laboratory testing and packaging, Pearl’s goal is straightforward: safe, pure and refreshing water with dependable consistency for Iraqi families.',
    faqTitle: 'Quality questions',
    faqIntro: 'Clear answers based on Pearl’s published information about purification, testing and standards.',
    faq: [
      { question: 'How many purification steps does Pearl use?', answer: 'Pearl states that its premium water is purified using a seven-step process designed to deliver pure, healthy and refreshing water.' },
      { question: 'How often is the water tested?', answer: 'According to the company, produced water is tested every two hours in on-site laboratories and is also checked by independent laboratories.' },
      { question: 'Which standards does Pearl reference?', answer: 'Pearl references the FDA purified-water standard under 21 CFR §165.110, USP 23 and Iraq Ministry of Health manufacturing guidance.' },
      { question: 'What does Pearl say about sanitation and packaging?', answer: 'The company states that it follows strict sanitation schedules, trains staff in hygienic practices and uses approved virgin packaging materials.' },
    ],
  },
};

const ku: PremiumBrandCopy = {
  home: {
    heroTitle: 'پاکی سروشتی.\nکوالێتی جێی متمانە.',
    heroBody: 'لە بەغداوە بۆ وردەکارییەکانی ژیانی ڕۆژانە، Pearl ئاوی پاککراوی عێراقییە کە پاکی، تازەیی و کوالێتیی یەکسان لە ناو کارگەوە تا بوتڵەکە کۆدەکاتەوە.',
    storyTitle: 'ناوێکی عێراقیی ئاشنا، بۆ ساتە ڕۆژانەکان.',
    storyBody: 'Pearl تەنها بوتڵێک ئاو نییە؛ ناوێکی ئاشنایە لە ماڵ، کار و میوانداریی عێراقی. ئێستا ئەو ناسنامەیە بە ئەزموونێکی دیجیتاڵی پاکتر و مۆدێرنتر پێشکەش دەکرێت.',
    qualityTitle: '7 هەنگاو بۆ پاکی.\nپشکنین هەر 2 کاتژمێر.',
    qualityBody: 'کوالێتی لە Pearl تەنها وشەیەک لەسەر لیبڵ نییە. پرۆسەی پاککردنەوەی حەوت هەنگاو و پشکنینی بەردەوام لە تاقیگەکانی کارگە بنەمای ئەو متمانەیەن.',
    qualityStats: [
      { value: '7', label: 'هەنگاو لە پرۆسەی پاککردنەوە' },
      { value: '2h', label: 'خولی پشکنینی ئاو لە تاقیگەی کارگە' },
      { value: 'FDA · USP', label: 'ستانداردە بڵاوکراوەکانی کوالێتی' },
    ],
  },
  quality: {
    heroEyebrow: 'پاکی و کوالێتی',
    heroTitle: 'کوالێتی تەنها بەڵێن نییە.\nڕوتینێکە لە هەر بوتڵێکدا دووبارە دەبێتەوە.',
    heroIntro: 'Pearl باس لە پرۆسەی پاککردنەوەی حەوت هەنگاو، پشکنینی ئاو هەر دوو کاتژمێر لە تاقیگەکانی ناو کارگە، پشکنینی سەربەخۆ و ڕێنماییە توندەکانی پاکوخاوێنی دەکات.',
    processEyebrow: 'گەشتی پاکی',
    processTitle: 'حەوت قۆناغ. یەک ئامانج: ئاوێک کە متمانەی پێ بکەیت.',
    processBody: 'لە سەرچاوەی ناوخۆیی تا پاڵاوتن، پاککردنەوە، تقطیر، پشکنین و پڕکردنەوەی پاک، Pearl گەشتێکی کۆنترۆڵکراو بۆ کوالێتی باس دەکات.',
    processVisualTitle: '7-Step Purification',
    processVisualBody: 'گەشتێکی ڕێکخراو لە سەرچاوەوە تا بوتڵێک کە بۆ خێزان ئامادەیە.',
    steps: [
      { no: '01', title: 'سەرچاوەی ناوخۆیی', body: 'گەشتەکە بە ئاوێکی سەرچاوەی ناوخۆیی دەست پێدەکات کە دەچێتە ناو سیستەمی بەرهەمهێنانی ئاوی پاککراو.' },
      { no: '02', title: 'پاڵاوتنی سەرەتایی', body: 'ئاو بە قۆناغەکانی پاڵاوتندا تێدەپەڕێت بۆ کەمکردنەوەی پیسی و ئامادەکردنی بۆ چارەسەری دواتر.' },
      { no: '03', title: 'پاککردنەوەی پێشکەوتوو', body: 'قۆناغەکانی زیاتر یارمەتیدەدەن پاکی و کوالێتییەکی یەکسان بەدەست بهێنرێت.' },
      { no: '04', title: 'تقطیر و چارەسەری کۆتایی', body: 'Pearl باس لە بەکارهێنانی تەکنەلۆژیای پاڵاوتن و تقطیر لە ناو سیستەمی پاککردنەوە دەکات.' },
      { no: '05', title: 'پشکنینی تاقیگە', body: 'ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە تاقیگەکانی ناو کارگە پشکنین دەکرێت و تاقیگەی سەربەخۆش بەکاردێت.' },
      { no: '06', title: 'پڕکردنەوەی پاک', body: 'تیمی بەرهەمهێنان پابەندی خشتەی پاککردنەوە و ڕەفتاری تەندروستی لە کاتی پڕکردنەوەی بوتڵەکانە.' },
      { no: '07', title: 'پاکەتکردنی جێی متمانە', body: 'کۆمپانیا دەڵێت تەنها مادەی پاکەتکردنی پەسەندکراو و نوێ بەکاردەهێنێت پێش ناردنی بەرهەم بۆ بازاڕ.' },
    ],
    standardsEyebrow: 'ستانداردە بڵاوکراوەکان',
    standardsTitle: 'ستانداردی دیاریکراو، نەک وتەی گشتی.',
    standardsBody: 'بەپێی زانیارییە بڵاوکراوەکانی Pearl، سیستەمی کوالێتی لەسەر ڕێنماییەکانی FDA و وەزارەتی تەندروستی عێراق دامەزراوە و ئاماژە بە ستانداردی دیاریکراوی ئاوی پاککراو دەکات.',
    standards: [
      { code: 'FDA §165.110', title: 'ستانداردی ئاوی پاککراو', body: 'Pearl دەڵێت ئاوی پاککراوی خۆی لەگەڵ ستانداردی FDA لە ژێر 21 CFR §165.110 یەکدەگرێتەوە.' },
      { code: 'USP 23', title: 'United States Pharmacopoeia', body: 'Pearl هەروەها ئاماژە بە ستانداردی USP 23 بۆ Purified Water دەکات.' },
      { code: 'Iraq MOH', title: 'وەزارەتی تەندروستی عێراق', body: 'کۆمپانیا دەڵێت ستانداردەکانی کوالێتی لەگەڵ ڕێنمایی وەزارەتی تەندروستی عێراق دانراون و بەرهەمەکە پەسەندکراوە.' },
    ],
    testingEyebrow: 'تاقیگەکانی کوالێتی',
    testingTitle: 'هەر دوو کاتژمێر، کوالێتی دووبارە پێوانە دەکرێت.',
    testingBody: 'ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە تاقیگەکانی ناو کارگە پشکنین دەکرێت، لەگەڵ پشکنینی تاقیگەی سەربەخۆ. واتە کوالێتی بەردەوام پێوانە دەکرێت، نەک تەنها گومان لێبکرێت.',
    testingMetric: '02:00',
    testingMetricLabel: 'کاتژمێر لە نێوان خولەکانی پشکنینی ناو کارگە',
    trustPoints: [
      { title: 'پاککردنەوەی ڕێکخراو', body: 'خشتەی توندی پاککردنەوە بۆ ئامێر و هێڵەکانی بەرهەمهێنان.' },
      { title: 'ڕەفتاری تەندروستی', body: 'ڕاهێنانی کارمەندان لەسەر ممارسە پاک و تەندروستییەکان.' },
      { title: 'مادەی پاکەتکردنی نوێ', body: 'بەکارهێنانی مادەی پاکەتکردنی پەسەندکراو و نوێ بەپێی زانیارییەکانی کۆمپانیا.' },
    ],
    closingTitle: 'پاکییەک کە دەتوانیت چیرۆکەکەی ببینیت.',
    closingBody: 'لە پاککردنەوە تا تاقیگە و پاکەتکردن، ئامانجی Pearl ڕوونە: ئاوی پاک، سەلامەت و تازە بە کوالێتیی یەکسان بۆ خێزانی عێراقی.',
    faqTitle: 'پرسیارەکانی کوالێتی',
    faqIntro: 'وەڵامی ڕوون بەپێی زانیارییە بڵاوکراوەکانی Pearl دەربارەی پاککردنەوە، پشکنین و ستانداردەکان.',
    faq: [
      { question: 'Pearl چەند هەنگاوی پاککردنەوە بەکاردەهێنێت؟', answer: 'Pearl دەڵێت ئاوی خۆی بە پرۆسەی پاککردنەوەی حەوت هەنگاو پاک دەکات.' },
      { question: 'ئاو چەند جار پشکنین دەکرێت؟', answer: 'بەپێی کۆمپانیا، ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە تاقیگەکانی ناو کارگە پشکنین دەکرێت و تاقیگەی سەربەخۆش بەکاردێت.' },
      { question: 'Pearl ئاماژە بە کام ستانداردانە دەکات؟', answer: 'کۆمپانیا ئاماژە بە FDA 21 CFR §165.110، USP 23 و ڕێنمایی وەزارەتی تەندروستی عێراق دەکات.' },
      { question: 'لەبارەی پاکوخاوێنی و پاکەتکردن چی دەڵێت؟', answer: 'کۆمپانیا باس لە خشتەی پاککردنەوە، ڕاهێنانی کارمەندان و بەکارهێنانی مادەی پاکەتکردنی پەسەندکراو و نوێ دەکات.' },
    ],
  },
};

const copy: Record<Locale, PremiumBrandCopy> = { ar, en, ku };

export function getBrandCopy(locale: Locale): PremiumBrandCopy {
  return copy[locale];
}
