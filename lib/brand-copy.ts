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
    heroBody: 'من مائدة البيت إلى يوم العمل والضيافة، اللؤلؤة مياه عراقية منقاة ترافق تفاصيل يومك بانتعاش بسيط وجودة تهتم بالتفاصيل من المعمل إلى العبوة.',
    storyTitle: 'عراقية من الاسم إلى التفاصيل.',
    storyBody: 'اللؤلؤة اسم مألوف في البيوت والمكاتب والضيافة العراقية. تُنتج في بغداد لتكون قريبة من تفاصيل يوم الناس، بهوية واضحة وأحجام عملية لمواقف مختلفة.',
    qualityTitle: '7 مراحل للنقاء.\nفحص كل ساعتين.',
    qualityBody: 'رحلة اللؤلؤة تبدأ من التصفية والتنقية والتقطير، وتستمر داخل المختبر ثم التعبئة الصحية والتدقيق قبل وصول المنتج للسوق.',
    qualityStats: [
      { value: '7', label: 'مراحل في رحلة التنقية والجودة' },
      { value: '2h', label: 'بين دورات الفحص داخل المعمل' },
      { value: '4', label: 'أحجام تناسب تفاصيل يومك' },
    ],
  },
  quality: {
    heroEyebrow: 'الجودة في كل تفصيل',
    heroTitle: 'النقاء يبدأ قبل ما تفتح العبوة.',
    heroIntro: 'من التصفية والتنقية إلى الفحص والتعبئة، تمر اللؤلؤة برحلة منظمة هدفها واحد: مياه منقاة ومنعشة تقدر تعتمد عليها كل يوم.',
    processEyebrow: 'رحلة النقاء',
    processTitle: '7 مراحل بين مصدر الماء والعبوة.',
    processBody: 'تبدأ الرحلة بمياه محلية المصدر، ثم تنتقل عبر التصفية والتنقية والتقطير، وبعدها الفحص داخل المعمل والتعبئة الصحية والتدقيق النهائي. كل مرحلة تكمل اللي قبلها حتى تبقى تجربة اللؤلؤة ثابتة وواضحة.',
    processVisualTitle: 'رحلة اللؤلؤة',
    processVisualBody: 'من الماء الخام إلى عبوة جاهزة ليومك.',
    steps: [
      { no: '01', title: 'المصدر المحلي', body: 'تبدأ اللؤلؤة بمياه مصدرها محلي، تدخل منظومة الإنتاج ضمن بيئة مخصصة لمعالجة وتعبئة مياه الشرب.' },
      { no: '02', title: 'التصفية الأولية', body: 'تمر المياه بمرحلة تصفية أولى لتقليل الشوائب والجسيمات وتهيئتها للمراحل الأدق.' },
      { no: '03', title: 'التصفية الدقيقة', body: 'تستمر التصفية عبر حواجز أدق للمساعدة على الوصول إلى ماء أكثر صفاءً واستقراراً قبل مرحلة التنقية الرئيسية.' },
      { no: '04', title: 'التنقية والتقطير', body: 'تعتمد اللؤلؤة على تقنيات التصفية والتقطير ضمن رحلة التنقية للوصول إلى مياه منقاة بجودة ثابتة.' },
      { no: '05', title: 'فحص الجودة', body: 'يُفحص الماء المنتج كل ساعتين داخل مختبرات المعمل، مع فحوص إضافية بواسطة مختبرات مستقلة.' },
      { no: '06', title: 'التعبئة الصحية', body: 'تعمل فرق الإنتاج وفق جداول تعقيم وممارسات صحية أثناء التعبئة والتعامل مع العبوات والمعدات.' },
      { no: '07', title: 'التدقيق قبل السوق', body: 'تكتمل الرحلة بتدقيق المنتج والعبوة قبل خروجها للسوق، حتى تصل اللؤلؤة بصورة نظيفة ومتسقة.' },
    ],
    standardsEyebrow: 'معايير الجودة',
    standardsTitle: 'الثقة تحتاج معياراً واضحاً.',
    standardsBody: 'تجمع منظومة الجودة في اللؤلؤة بين الفحص داخل المعمل، الفحوص المستقلة، والانضباط الصحي في الإنتاج، إلى جانب المراجع والمعايير التي اعتمدتها الشركة لمياهها المنقاة.',
    standards: [
      { code: 'FDA §165.110', title: 'مواصفات المياه المعبأة', body: 'تعتمد اللؤلؤة مرجع إدارة الغذاء والدواء الأمريكية للمياه المعبأة والمنقاة ضمن معايير الجودة المعلنة للمنتج.' },
      { code: 'USP 23', title: 'مرجع لنقاوة المياه', body: 'تذكر اللؤلؤة معيار USP 23 ضمن مراجعها لنوعية المياه المنقاة، كجزء من منظومة الجودة التي بنت عليها المنتج.' },
      { code: 'Iraq MOH', title: 'وزارة الصحة العراقية', body: 'مياه اللؤلؤة المنقاة مصادق عليها من وزارة الصحة العراقية وفق المعلومات التي تعلنها الشركة.' },
    ],
    testingEyebrow: 'مختبرات الجودة',
    testingTitle: 'كل ساعتين، نرجع نتأكد.',
    testingBody: 'الفحص المستمر يخلي الجودة عملية يومية مو مجرد عبارة على الليبل. الماء المنتج يُفحص داخل مختبرات المعمل كل ساعتين، إضافة إلى الفحص بواسطة مختبرات مستقلة.',
    testingMetric: '02:00',
    testingMetricLabel: 'ساعتان بين كل دورة فحص داخل المعمل',
    trustPoints: [
      { title: 'تعقيم منتظم', body: 'جداول تعقيم واضحة للمعدات وخطوط التشغيل.' },
      { title: 'ممارسات صحية', body: 'عناية بالنظافة والانضباط أثناء الإنتاج والتعبئة.' },
      { title: 'تعبئة موثوقة', body: 'مواد تعبئة معتمدة وتدقيق قبل خروج المنتج للسوق.' },
    ],
    closingTitle: 'نقاء تقدر تشوف شلون نوصل له.',
    closingBody: 'من أول مرحلة بالتصفية إلى آخر تدقيق على العبوة، رحلة اللؤلؤة مبنية حتى تحافظ على تجربة ماء نظيفة، منعشة ومألوفة للعائلة العراقية.',
    faqTitle: 'أسئلة عن الجودة',
    faqIntro: 'أهم التفاصيل عن التنقية والفحص والتعبئة بصورة مختصرة وواضحة.',
    faq: [
      { question: 'كم مرحلة تمر بها رحلة التنقية؟', answer: 'تعتمد اللؤلؤة رحلة من سبع مراحل تجمع التصفية والتنقية والتقطير والفحص والتعبئة الصحية والتدقيق النهائي.' },
      { question: 'كم مرة يتم فحص المياه؟', answer: 'يتم فحص الماء المنتج كل ساعتين داخل مختبرات المعمل، إضافة إلى فحوص بواسطة مختبرات مستقلة.' },
      { question: 'شنو اللي يميز منظومة الجودة؟', answer: 'استمرار الفحص، التعقيم المنتظم، الممارسات الصحية، والتدقيق على المنتج والعبوة قبل وصولها للسوق.' },
      { question: 'وين تُنتج مياه اللؤلؤة؟', answer: 'اللؤلؤة علامة عراقية تُنتج في بغداد، العراق.' },
    ],
  },
};

const en: PremiumBrandCopy = {
  home: {
    heroTitle: 'Natural Purity.\nTrusted Quality.',
    heroBody: 'From the family table to workdays and hospitality, Pearl is Iraqi purified water made to fit everyday life with simple refreshment and care that starts inside the plant.',
    storyTitle: 'Iraqi by name, place and purpose.',
    storyBody: 'Pearl is a familiar name across Iraqi homes, workplaces and hospitality. Produced in Baghdad, it stays close to everyday life through a clear identity and four practical formats.',
    qualityTitle: '7 stages of purity.\nTesting every 2 hours.',
    qualityBody: 'Pearl’s journey moves through filtration, purification and distillation, then laboratory checks, hygienic filling and a final review before the product reaches the market.',
    qualityStats: [
      { value: '7', label: 'stages across purification and quality' },
      { value: '2h', label: 'between on-site testing cycles' },
      { value: '4', label: 'formats for everyday moments' },
    ],
  },
  quality: {
    heroEyebrow: 'Quality in every detail',
    heroTitle: 'Purity starts before you open the bottle.',
    heroIntro: 'From filtration and purification to testing and filling, Pearl follows a structured journey built around one goal: clean, refreshing purified water you can rely on every day.',
    processEyebrow: 'The purity journey',
    processTitle: '7 stages between source and bottle.',
    processBody: 'The journey begins with locally sourced water, then moves through filtration, purification and distillation before laboratory testing, hygienic filling and final inspection. Each stage builds on the one before it.',
    processVisualTitle: 'The Pearl journey',
    processVisualBody: 'From source water to a format ready for your day.',
    steps: [
      { no: '01', title: 'Local source', body: 'Pearl begins with locally sourced water entering a production environment dedicated to treating and bottling drinking water.' },
      { no: '02', title: 'Initial filtration', body: 'An initial filtration stage helps reduce impurities and particles and prepares the water for finer treatment.' },
      { no: '03', title: 'Fine filtration', body: 'Finer barriers support a clearer, more consistent water profile before the main purification stage.' },
      { no: '04', title: 'Purification & distillation', body: 'Pearl uses filtration and distillation technologies as part of the purification journey to produce purified water consistently.' },
      { no: '05', title: 'Quality testing', body: 'Produced water is tested every two hours in on-site laboratories, with additional independent laboratory checks.' },
      { no: '06', title: 'Hygienic filling', body: 'Production teams follow sanitation schedules and hygienic practices while filling and handling containers and equipment.' },
      { no: '07', title: 'Final review', body: 'The journey ends with a final product and packaging review before Pearl leaves for the market.' },
    ],
    standardsEyebrow: 'Quality standards',
    standardsTitle: 'Trust is stronger when the standard is clear.',
    standardsBody: 'Pearl’s quality approach combines on-site testing, independent checks and disciplined production hygiene with the references the company uses for purified water quality.',
    standards: [
      { code: 'FDA §165.110', title: 'Bottled-water quality reference', body: 'Pearl uses the U.S. FDA bottled and purified water reference within the quality standards communicated for the product.' },
      { code: 'USP 23', title: 'Purified-water reference', body: 'Pearl also identifies USP 23 among the quality references used for purified water.' },
      { code: 'Iraq MOH', title: 'Iraq Ministry of Health', body: 'Pearl Purified Water is approved by the Iraq Ministry of Health according to the company’s published information.' },
    ],
    testingEyebrow: 'Quality laboratories',
    testingTitle: 'Every two hours, we check again.',
    testingBody: 'Continuous testing turns quality into a daily routine rather than a line on a label. Produced water is tested every two hours on site, alongside independent laboratory checks.',
    testingMetric: '02:00',
    testingMetricLabel: 'hours between on-site testing cycles',
    trustPoints: [
      { title: 'Regular sanitation', body: 'Scheduled sanitation across equipment and production lines.' },
      { title: 'Hygienic practice', body: 'Clean production and filling practices throughout the process.' },
      { title: 'Trusted packaging', body: 'Approved packaging materials and final checks before market release.' },
    ],
    closingTitle: 'Purity with a journey you can understand.',
    closingBody: 'From the first filtration stage to the final packaging review, Pearl’s process is designed around a clean, refreshing and familiar water experience for Iraqi families.',
    faqTitle: 'Quality questions',
    faqIntro: 'A clear look at purification, testing and filling at Pearl.',
    faq: [
      { question: 'How many stages are in the Pearl journey?', answer: 'Pearl follows a seven-stage journey combining filtration, purification, distillation, laboratory testing, hygienic filling and final review.' },
      { question: 'How often is the water tested?', answer: 'Produced water is tested every two hours in on-site laboratories and is also checked by independent laboratories.' },
      { question: 'What supports the quality routine?', answer: 'Regular testing, sanitation schedules, hygienic practices and product and packaging checks all support consistency.' },
      { question: 'Where is Pearl produced?', answer: 'Pearl is an Iraqi water brand produced in Baghdad, Iraq.' },
    ],
  },
};

const ku: PremiumBrandCopy = {
  home: {
    heroTitle: 'پاکی سروشتی.\nکوالێتی جێی متمانە.',
    heroBody: 'لە مێزی خێزانەوە بۆ کار و میوانداری، Pearl ئاوی پاککراوی عێراقییە کە بۆ ژیانی ڕۆژانە و تازەییەکی سادە دروستکراوە.',
    storyTitle: 'عێراقی بە ناو و شوێن و ئامانج.',
    storyBody: 'Pearl ناوێکی ئاشنایە لە ماڵ و کار و میوانداریی عێراقی. لە بەغدا بەرهەم دەهێنرێت و بە چوار قەبارەی پراکتیکی لەگەڵ ژیانی ڕۆژانە دەگونجێت.',
    qualityTitle: '7 قۆناغی پاکی.\nپشکنین هەر 2 کاتژمێر.',
    qualityBody: 'گەشتی Pearl لە پاڵاوتن و پاککردنەوە و تقطیرەوە دەست پێدەکات و بە تاقیگە، پڕکردنەوەی پاک و پشکنینی کۆتایی تەواو دەبێت.',
    qualityStats: [
      { value: '7', label: 'قۆناغ لە گەشتی پاکی و کوالێتی' },
      { value: '2h', label: 'لە نێوان خولەکانی پشکنینی ناو کارگە' },
      { value: '4', label: 'قەبارە بۆ ساتەکانی ڕۆژانە' },
    ],
  },
  quality: {
    heroEyebrow: 'کوالێتی لە هەر وردەکارییەکدا',
    heroTitle: 'پاکی پێش کردنەوەی بوتڵەکە دەست پێدەکات.',
    heroIntro: 'لە پاڵاوتن و پاککردنەوە تا پشکنین و پڕکردنەوە، Pearl گەشتێکی ڕێکخراو هەیە بۆ ئاوی پاک و تازەی ڕۆژانە.',
    processEyebrow: 'گەشتی پاکی',
    processTitle: '7 قۆناغ لە سەرچاوە تا پاکەت.',
    processBody: 'گەشتەکە بە ئاوی سەرچاوەی ناوخۆیی دەست پێدەکات، پاشان لە پاڵاوتن و پاککردنەوە و تقطیر تێدەپەڕێت، دوای ئەوە پشکنینی تاقیگە، پڕکردنەوەی پاک و پشکنینی کۆتایی دێت.',
    processVisualTitle: 'گەشتی Pearl',
    processVisualBody: 'لە ئاوەوە تا پاکەتێک بۆ ڕۆژەکەت.',
    steps: [
      { no: '01', title: 'سەرچاوەی ناوخۆیی', body: 'Pearl بە ئاوی سەرچاوەی ناوخۆیی دەست پێدەکات کە دەچێتە ناو سیستەمی چارەسەر و پڕکردنەوە.' },
      { no: '02', title: 'پاڵاوتنی سەرەتایی', body: 'قۆناغی سەرەتایی بۆ کەمکردنەوەی پیسی و دانەکان و ئامادەکردنی ئاو بۆ چارەسەری وردتر.' },
      { no: '03', title: 'پاڵاوتنی ورد', body: 'پاڵاوتنی وردتر یارمەتیدەدات ئاو پاکتر و یەکسانتر بێت پێش قۆناغی سەرەکیی پاککردنەوە.' },
      { no: '04', title: 'پاککردنەوە و تقطیر', body: 'Pearl تەکنەلۆژیای پاڵاوتن و تقطیر بەشێک لە گەشتی پاککردنەوەی ئاوی پاککراو دادەنێت.' },
      { no: '05', title: 'پشکنینی کوالێتی', body: 'ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە تاقیگەی ناو کارگە پشکنین دەکرێت و تاقیگەی سەربەخۆش بەکاردێت.' },
      { no: '06', title: 'پڕکردنەوەی پاک', body: 'تیمەکانی بەرهەمهێنان خشتەی پاککردنەوە و ڕەفتاری تەندروستی لە کاتی پڕکردنەوە پەیڕەو دەکەن.' },
      { no: '07', title: 'پشکنینی کۆتایی', body: 'پێش ناردنی Pearl بۆ بازاڕ، بەرهەم و پاکەتەکە پشکنینی کۆتایی تێدەپەڕێنن.' },
    ],
    standardsEyebrow: 'ستانداردەکانی کوالێتی',
    standardsTitle: 'متمانە بە ستانداردی ڕوون بەهێزترە.',
    standardsBody: 'Pearl پشکنینی ناو کارگە، تاقیگەی سەربەخۆ و پاکوخاوێنی بەرهەمهێنان لەگەڵ سەرچاوەکانی ستانداردی ئاوی پاککراو کۆدەکاتەوە.',
    standards: [
      { code: 'FDA §165.110', title: 'سەرچاوەی کوالێتی ئاوی پێچراو', body: 'Pearl ئەم سەرچاوەی FDA ـە لە ناو ستانداردە بڵاوکراوەکانی کوالێتی بەکاردەهێنێت.' },
      { code: 'USP 23', title: 'سەرچاوەی ئاوی پاککراو', body: 'Pearl هەروەها USP 23 وەک یەکێک لە سەرچاوەکانی کوالێتی ئاوی پاککراو ناساندووە.' },
      { code: 'Iraq MOH', title: 'وەزارەتی تەندروستی عێراق', body: 'بەپێی زانیارییەکانی کۆمپانیا، ئاوی پاککراوی Pearl لەلایەن وەزارەتی تەندروستی عێراقەوە پەسەندکراوە.' },
    ],
    testingEyebrow: 'تاقیگەکانی کوالێتی',
    testingTitle: 'هەر دوو کاتژمێر، دووبارە دڵنیادەبینەوە.',
    testingBody: 'پشکنینی بەردەوام کوالێتی دەکاتە کارێکی ڕۆژانە. ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە کارگە پشکنین دەکرێت و تاقیگەی سەربەخۆش هەیە.',
    testingMetric: '02:00',
    testingMetricLabel: 'کاتژمێر لە نێوان خولەکانی پشکنینی ناو کارگە',
    trustPoints: [
      { title: 'پاککردنەوەی ڕێکخراو', body: 'خشتەی پاککردنەوە بۆ ئامێر و هێڵەکانی بەرهەمهێنان.' },
      { title: 'ڕەفتاری تەندروستی', body: 'پاکوخاوێنی و ڕێکخستن لە کاتی بەرهەمهێنان و پڕکردنەوە.' },
      { title: 'پاکەتی جێی متمانە', body: 'مادەی پەسەندکراو و پشکنینی کۆتایی پێش بازاڕ.' },
    ],
    closingTitle: 'پاکییەک کە گەشتەکەی دەتوانیت ببینیت.',
    closingBody: 'لە یەکەم قۆناغی پاڵاوتنەوە تا پشکنینی کۆتایی، Pearl بۆ ئاوی پاک و تازە و جێی متمانە کار دەکات.',
    faqTitle: 'پرسیارەکانی کوالێتی',
    faqIntro: 'پوختەیەکی ڕوون لە پاککردنەوە و پشکنین و پڕکردنەوە.',
    faq: [
      { question: 'گەشتی Pearl چەند قۆناغە؟', answer: 'گەشتی Pearl حەوت قۆناغە و پاڵاوتن، پاککردنەوە، تقطیر، پشکنین، پڕکردنەوە و پشکنینی کۆتایی لەخۆدەگرێت.' },
      { question: 'ئاو چەند جار پشکنین دەکرێت؟', answer: 'ئاوی بەرهەمهاتوو هەر دوو کاتژمێر لە تاقیگەی ناو کارگە پشکنین دەکرێت و تاقیگەی سەربەخۆش بەکاردێت.' },
      { question: 'چی پشتگیری لە کوالێتی دەکات؟', answer: 'پشکنینی بەردەوام، خشتەی پاککردنەوە، ڕەفتاری تەندروستی و پشکنینی بەرهەم و پاکەت.' },
      { question: 'Pearl لە کوێ بەرهەم دەهێنرێت؟', answer: 'Pearl براندێکی ئاوی عێراقییە کە لە بەغدا بەرهەم دەهێنرێت.' },
    ],
  },
};

const copy: Record<Locale, PremiumBrandCopy> = { ar, en, ku };

export function getBrandCopy(locale: Locale): PremiumBrandCopy {
  return copy[locale];
}
