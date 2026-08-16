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
    qualityTitle: '7 مراحل للنقاء.\nجودة نتابعها باستمرار.',
    qualityBody: 'المعلومات المنشورة من اللؤلؤة تتحدث عن عملية تنقية من 7 مراحل وفحص للمياه كل ساعتين داخل مختبرات المعمل. بالموقع الجديد نخلي قصة الجودة واضحة بصرياً، ونربط التفاصيل الفنية النهائية بوثائق المصنع قبل التسليم العام.',
    qualityStats: [
      { value: '7', label: 'مراحل ضمن عملية التنقية المنشورة' },
      { value: '2h', label: 'وتيرة فحص منشورة من الشركة' },
      { value: '4', label: 'أحجام حالية مؤكدة' },
    ],
  },
  quality: {
    heroEyebrow: 'النقاء والجودة',
    heroTitle: 'الجودة مو مجرد وعد.\nهي شغل ينشاف ويتوثق.',
    heroIntro: 'تنشر اللؤلؤة أن مياهها تمر بعملية تنقية من 7 مراحل، وأن المياه المنتجة تُفحص كل ساعتين داخل مختبرات المعمل إلى جانب فحوص مستقلة وضوابط للنظافة والتشغيل. التفاصيل والاعتمادات النهائية تبقى مرتبطة بالوثائق الحالية من الشركة.',
    processEyebrow: 'رحلة النقاء',
    processTitle: 'سبع مراحل. قصة واحدة لازم تنشاف بوضوح.',
    processBody: 'الموقع الحالي للؤلؤة يؤكد وجود عملية تنقية من 7 مراحل، لكنه لا ينشر التسلسل الفني الكامل لكل مرحلة. لذلك نعرض الرحلة كقصة مرقمة وحساسة للسكرول من دون اختراع تقنيات أو أسماء عمليات غير موثقة، وتُستبدل العناوين الفنية فور تزويدنا بتفاصيل المصنع.',
    processVisualTitle: '7-Stage Purification',
    processVisualBody: 'تسلسل بصري لعملية التنقية المنشورة؛ التفاصيل الفنية لكل مرحلة تنتظر اعتماد المصنع.',
    steps: [
      { no: '01', title: 'المرحلة 1 من 7', body: 'بداية عملية التنقية كما تنشرها اللؤلؤة. الاسم الفني والمعدات المستخدمة في هذه المرحلة لا تُفترض قبل توثيقها من المصنع.' },
      { no: '02', title: 'المرحلة 2 من 7', body: 'جزء من التسلسل الداخلي لعملية التنقية. نحافظ على القصة واضحة بصرياً من دون اختراع طريقة معالجة غير منشورة.' },
      { no: '03', title: 'المرحلة 3 من 7', body: 'تستمر رحلة المياه ضمن العملية المعلنة ذات السبع مراحل، على أن تُضاف التفاصيل التقنية بعد اعتمادها من فريق الجودة.' },
      { no: '04', title: 'المرحلة 4 من 7', body: 'منتصف الرحلة البصرية للتنقية. هذا الموضع جاهز لاسم المرحلة الحقيقي وصورتها أو بياناتها فور تزويدنا بالمعلومة الرسمية.' },
      { no: '05', title: 'المرحلة 5 من 7', body: 'مرحلة ضمن العملية المنشورة. لا نربطها بتقنية محددة قبل وجود مرجع فني واضح من اللؤلؤة.' },
      { no: '06', title: 'المرحلة 6 من 7', body: 'قبل اكتمال رحلة التنقية، يستمر التسلسل الموثق بصرياً مع بقاء التفاصيل الفنية خاضعة لتأكيد المصنع.' },
      { no: '07', title: 'اكتمال المراحل السبع', body: 'هنا تكتمل قصة عملية التنقية المنشورة. الفحص، النظافة والتعبئة تُعرض في أقسام منفصلة لأنها نقاط جودة منشورة بحد ذاتها.' },
    ],
    standardsEyebrow: 'المعايير والمراجع',
    standardsTitle: 'نذكر المرجع، ونفصل بين المعلومة المنشورة والاعتماد الحالي.',
    standardsBody: 'الموقع السابق للؤلؤة يذكر مراجع FDA وUSP ووزارة الصحة العراقية. نحافظ على هذه المعلومات ضمن قصة الجودة، لكن صيغة المطابقة أو المصادقة النهائية لا تُعرض كاعتماد حديث إلا بعد مراجعة الوثائق الحالية من الشركة.',
    standards: [
      { code: 'FDA §165.110', title: 'مرجع FDA المنشور', body: 'تذكر اللؤلؤة في محتواها السابق 21 CFR §165.110 ضمن مرجع جودة المياه. يعتمد نص الامتثال النهائي فقط بعد مطابقة وثائق الشركة الحالية.' },
      { code: 'USP 23', title: 'مرجع USP التاريخي', body: 'ورد USP 23 في محتوى اللؤلؤة السابق. يحتفظ الموقع بالإشارة كمرجع منشور تاريخياً إلى حين توفير وثيقة حديثة تحدد الصيغة المعتمدة حالياً.' },
      { code: 'Iraq MOH', title: 'وزارة الصحة العراقية', body: 'تنشر الشركة أن معاييرها مرتبطة بإرشادات وزارة الصحة العراقية وأن المنتج مصادق عليه. عرض أي ختم أو شهادة فعلية ينتظر النسخة الحالية من الوثيقة.' },
    ],
    testingEyebrow: 'مختبرات الجودة',
    testingTitle: 'بحسب المعلومات المنشورة: فحص كل ساعتين.',
    testingBody: 'تذكر اللؤلؤة أن المياه المنتجة تُفحص كل ساعتين داخل مختبرات المعمل، إلى جانب فحوص من مختبرات مستقلة. نخلي هذه النقطة من أقوى لحظات الصفحة بصرياً، وتتحول إلى claim نهائي بعد مطابقة الإجراء والوثائق الحالية.',
    testingMetric: '02:00',
    testingMetricLabel: 'وتيرة الفحص المنشورة داخل المعمل',
    trustPoints: [
      { title: 'تعقيم منتظم', body: 'تذكر الشركة التزامها بجداول تعقيم صارمة للمعدات وخطوط التشغيل.' },
      { title: 'ممارسات صحية', body: 'تذكر الشركة تدريب الموظفين على الممارسات الصحية داخل بيئة الإنتاج.' },
      { title: 'مواد تعبئة معتمدة', body: 'يذكر المحتوى السابق استخدام مواد تعبئة معتمدة وخالية من المواد المعادة؛ المواصفة النهائية تُثبت من الشركة.' },
    ],
    closingTitle: 'نقاء نريدك تشوف الشغل اللي وراه.',
    closingBody: 'القيمة الحقيقية مو بكثرة الادعاءات؛ هي بعملية واضحة، صور حقيقية من المعمل، فحوص موثقة، ومعلومات الشركة الرسمية. هذا هو المستوى اللي نبني عليه تجربة اللؤلؤة الجديدة.',
    faqTitle: 'أسئلة عن الجودة',
    faqIntro: 'إجابات واضحة تفرق بين ما تنشره اللؤلؤة حالياً وبين ما يحتاج وثيقة محدثة قبل التسليم النهائي.',
    faq: [
      { question: 'كم مرحلة تستخدم اللؤلؤة في التنقية؟', answer: 'تنشر اللؤلؤة أن المياه تمر بعملية تنقية من 7 مراحل. تفاصيل المراحل الفنية لم تُنشر كاملة في المصدر الحالي، لذلك لا نخترع أسماءها.' },
      { question: 'كم مرة يتم فحص المياه؟', answer: 'المعلومات المنشورة من الشركة تذكر فحص المياه المنتجة كل ساعتين داخل مختبرات المعمل، إضافة إلى فحوص مختبرات مستقلة. يتم تأكيد الإجراء الحالي قبل التسليم العام.' },
      { question: 'ما المراجع التي تذكرها اللؤلؤة؟', answer: 'المحتوى السابق يشير إلى FDA تحت 21 CFR §165.110، وUSP 23، وإرشادات وزارة الصحة العراقية. صيغة الامتثال أو الاعتماد الحالية تحتاج الوثائق المحدثة من الشركة.' },
      { question: 'ماذا عن العبوات والنظافة؟', answer: 'تذكر الشركة جداول تعقيم للمعدات، تدريب الموظفين على الممارسات الصحية، واستخدام مواد تعبئة معتمدة. المواصفات التشغيلية النهائية تُثبت من المصدر الحالي للشركة.' },
    ],
  },
};

const en: PremiumBrandCopy = {
  home: {
    heroTitle: 'Natural Purity.\nTrusted Quality.',
    heroBody: 'From Baghdad into everyday life, Pearl is Iraqi purified water shaped by refreshing simplicity, consistent quality and care that begins inside the facility and continues to the product in your hand.',
    storyTitle: 'A familiar Iraqi name, present in everyday life.',
    storyBody: 'Pearl is more than a water format. It is a familiar name across Iraqi homes, workplaces and hospitality — now presented through a cleaner digital experience that better reflects the brand behind it.',
    qualityTitle: '7 purification stages.\nQuality followed continuously.',
    qualityBody: 'Pearl’s published information describes a seven-stage purification process and water testing every two hours in on-site laboratories. The new website makes the quality story visible while keeping technical detail tied to current facility documentation.',
    qualityStats: [
      { value: '7', label: 'published purification stages' },
      { value: '2h', label: 'published testing frequency' },
      { value: '4', label: 'confirmed current formats' },
    ],
  },
  quality: {
    heroEyebrow: 'Purity & quality',
    heroTitle: 'Quality is not just a promise.\nIt should be visible and documented.',
    heroIntro: 'Pearl publishes a seven-stage purification process, testing of produced water every two hours in on-site laboratories, independent laboratory checks and sanitation practices. Final technical and compliance wording remains tied to current company documentation.',
    processEyebrow: 'The purity journey',
    processTitle: 'Seven stages. One story, presented without invented technical detail.',
    processBody: 'Pearl’s current website confirms a seven-stage purification process but does not publish the full technical sequence for each stage. The experience therefore uses a numbered scroll narrative without assigning unverified treatment technologies. Technical labels can be replaced as soon as the facility confirms them.',
    processVisualTitle: '7-Stage Purification',
    processVisualBody: 'A visual sequence for Pearl’s published process; individual technical stages remain subject to facility confirmation.',
    steps: [
      { no: '01', title: 'Stage 1 of 7', body: 'The beginning of Pearl’s published purification journey. The exact technical method is intentionally not assumed without facility documentation.' },
      { no: '02', title: 'Stage 2 of 7', body: 'A second step within the published process, presented visually without assigning an unverified treatment technology.' },
      { no: '03', title: 'Stage 3 of 7', body: 'The purification journey continues. This position is ready for the verified technical name and supporting facility image or data.' },
      { no: '04', title: 'Stage 4 of 7', body: 'The midpoint of the seven-stage story. Technical detail will be added only from Pearl’s approved production information.' },
      { no: '05', title: 'Stage 5 of 7', body: 'A defined position in the published sequence, kept deliberately neutral until its actual production method is confirmed.' },
      { no: '06', title: 'Stage 6 of 7', body: 'The process approaches completion while the website preserves a clear distinction between verified facts and pending technical detail.' },
      { no: '07', title: 'Seven stages complete', body: 'The published purification sequence is complete. Laboratory testing, sanitation and packaging are presented separately as quality practices described by Pearl.' },
    ],
    standardsEyebrow: 'Standards & references',
    standardsTitle: 'Reference the source — and separate legacy wording from current certification.',
    standardsBody: 'Pearl’s legacy website references FDA, USP and Iraq Ministry of Health standards. Those references remain useful context, but final compliance or approval wording should only be presented as current after reviewing the company’s latest documentation.',
    standards: [
      { code: 'FDA §165.110', title: 'Published FDA reference', body: 'Pearl’s previous content references 21 CFR §165.110 in its water-quality story. Final compliance language is gated by current company documentation.' },
      { code: 'USP 23', title: 'Historical USP reference', body: 'USP 23 appears in Pearl’s previous content. The website treats it as a historical published reference until an updated document confirms the wording currently used by the company.' },
      { code: 'Iraq MOH', title: 'Iraq Ministry of Health', body: 'Pearl publishes that its standards follow Iraqi health guidance and that the product is approved. Any current seal or certificate will only be displayed from a supplied, verified document.' },
    ],
    testingEyebrow: 'Quality laboratories',
    testingTitle: 'Published by Pearl: testing every two hours.',
    testingBody: 'Pearl’s published information states that produced water is tested every two hours in on-site laboratories, alongside independent laboratory checks. The website makes this a strong visual proof point while keeping final claim wording subject to current procedure and documentation.',
    testingMetric: '02:00',
    testingMetricLabel: 'published on-site testing frequency',
    trustPoints: [
      { title: 'Scheduled sanitation', body: 'Pearl’s published information describes strict sanitation schedules for production equipment.' },
      { title: 'Hygienic practices', body: 'The company also describes staff training around hygienic production practices.' },
      { title: 'Approved packaging materials', body: 'Legacy company content states that approved non-recycled packaging materials are used; final specification remains subject to confirmation.' },
    ],
    closingTitle: 'Purity is stronger when people can see the work behind it.',
    closingBody: 'The strongest quality story is not the loudest claim. It is a clear process, authentic facility imagery, documented testing and current company evidence. That is the standard for the new Pearl experience.',
    faqTitle: 'Quality questions',
    faqIntro: 'Clear answers that distinguish Pearl’s published information from details requiring current documentation.',
    faq: [
      { question: 'How many purification stages does Pearl publish?', answer: 'Pearl states that its water goes through a seven-stage purification process. The current public source does not publish the complete technical sequence, so the website does not invent stage names.' },
      { question: 'How often does Pearl say the water is tested?', answer: 'Published company information states that produced water is tested every two hours in on-site laboratories, with additional independent laboratory checks. The current procedure should be confirmed before final public handoff.' },
      { question: 'Which standards does Pearl reference?', answer: 'Legacy Pearl content references FDA 21 CFR §165.110, USP 23 and Iraq Ministry of Health guidance. Current compliance or approval language requires updated company documentation.' },
      { question: 'What does Pearl publish about sanitation and packaging?', answer: 'The company describes sanitation schedules, staff hygiene training and approved packaging materials. Final operating specifications should be confirmed from current company information.' },
    ],
  },
};

const ku: PremiumBrandCopy = {
  home: {
    heroTitle: 'پاکی سروشتی.\nکوالێتی جێی متمانە.',
    heroBody: 'لە بەغداوە بۆ ژیانی ڕۆژانە، Pearl ئاوی پاککراوی عێراقییە کە تازەیی، کوالێتیی یەکسان و گرنگیدان لە ناو دامەزراوەوە تا بەرهەمەکە پێکەوە دەهێنێت.',
    storyTitle: 'ناوێکی عێراقیی ئاشنا، لە ناو ژیانی ڕۆژانە.',
    storyBody: 'Pearl تەنها قەبارەیەکی ئاو نییە؛ ناوێکی ئاشنایە لە ماڵ، کار و میوانداریی عێراقی. ئێستا ئەو ناسنامەیە بە ئەزموونێکی دیجیتاڵی پاکتر پێشکەش دەکرێت.',
    qualityTitle: '7 قۆناغی پاککردنەوە.\nچاودێری بەردەوامی کوالێتی.',
    qualityBody: 'زانیارییە بڵاوکراوەکانی Pearl باس لە پرۆسەی 7 قۆناغ و پشکنینی ئاو هەر 2 کاتژمێر لە تاقیگەکانی ناو کارگە دەکەن. وردەکارییە تەکنیکییە کۆتاییەکان بە بەڵگەنامەی نوێی کۆمپانیا پەیوەستن.',
    qualityStats: [
      { value: '7', label: 'قۆناغی پاککردنەوەی بڵاوکراو' },
      { value: '2h', label: 'کاتی پشکنینی بڵاوکراو' },
      { value: '4', label: 'قەبارەی ئێستای پشتڕاستکراو' },
    ],
  },
  quality: {
    heroEyebrow: 'پاکی و کوالێتی',
    heroTitle: 'کوالێتی تەنها بەڵێن نییە.\nدەبێت ببینرێت و بەڵگەدار بێت.',
    heroIntro: 'Pearl باس لە پرۆسەی پاککردنەوەی 7 قۆناغ، پشکنینی ئاو هەر 2 کاتژمێر لە تاقیگەکانی ناو کارگە، پشکنینی سەربەخۆ و پاکوخاوێنی دەکات. دەقی کۆتاییی فنی و پەسەندکردن پێویستی بە بەڵگەنامەی نوێی کۆمپانیا هەیە.',
    processEyebrow: 'گەشتی پاکی',
    processTitle: 'حەوت قۆناغ، بەبێ دروستکردنی وردەکاریی فنیی نەسەلمێنراو.',
    processBody: 'ماڵپەڕی Pearl پرۆسەی 7 قۆناغ پشتڕاست دەکات، بەڵام ناوی فنیی هەر قۆناغێک بە تەواوی بڵاونەکراوەتەوە. بۆیە ئەزموونی سکرۆڵ قۆناغەکان بە ژمارە پیشان دەدات و هیچ تەکنەلۆژیایەکی نەسەلمێنراو دانانرێت.',
    processVisualTitle: '7-Stage Purification',
    processVisualBody: 'تسلسلێکی بینراو بۆ پرۆسەی بڵاوکراو؛ وردەکاریی فنی پێویستی بە پشتڕاستکردنەوەی کارگە هەیە.',
    steps: [
      { no: '01', title: 'قۆناغی 1 لە 7', body: 'دەستپێکی گەشتی پاککردنەوەی بڵاوکراوی Pearl. ڕێگای فنی بەبێ بەڵگەنامەی کارگە دانانرێت.' },
      { no: '02', title: 'قۆناغی 2 لە 7', body: 'قۆناغێکی دیکە لە پرۆسەکە، بە شێوەی بینراو و بەبێ ناونانی تەکنەلۆژیای نەسەلمێنراو.' },
      { no: '03', title: 'قۆناغی 3 لە 7', body: 'گەشتی پاککردنەوە بەردەوامە و ئەم شوێنە بۆ ناوی فنی و زانیاریی پشتڕاستکراو ئامادەیە.' },
      { no: '04', title: 'قۆناغی 4 لە 7', body: 'نیوەی تسلسلی حەوت قۆناغ؛ وردەکاری تەنها لە زانیاریی پەسەندکراوی Pearl زیاد دەکرێت.' },
      { no: '05', title: 'قۆناغی 5 لە 7', body: 'شوێنێکی دیاریکراو لە پرۆسەی بڵاوکراو، بەبێ دانانی ڕێگای چارەسەری نەسەلمێنراو.' },
      { no: '06', title: 'قۆناغی 6 لە 7', body: 'پرۆسەکە نزیک دەبێتەوە لە کۆتایی و جیاوازی نێوان زانیاریی پشتڕاستکراو و وردەکاریی چاوەڕوانکراو پارێزراوە.' },
      { no: '07', title: 'تەواوبوونی 7 قۆناغ', body: 'تسلسلی پاککردنەوە تەواو دەبێت. پشکنین، پاکوخاوێنی و پاکەتکردن لە بەشە جیاوازەکانی کوالێتی پیشان دەدرێن.' },
    ],
    standardsEyebrow: 'ستاندارد و سەرچاوەکان',
    standardsTitle: 'سەرچاوەکە پیشان بدە و وتەی کۆن لە پەسەندکردنی نوێ جیا بکەرەوە.',
    standardsBody: 'ناوەڕۆکی پێشووی Pearl ئاماژە بە FDA، USP و وەزارەتی تەندروستی عێراق دەکات. ئەم ئاماژانە وەک زانیاریی بڵاوکراو دەمێننەوە، بەڵام دەقی پەسەندکردنی کۆتایی پێویستی بە بەڵگەنامەی نوێ هەیە.',
    standards: [
      { code: 'FDA §165.110', title: 'ئاماژەی بڵاوکراوی FDA', body: 'ناوەڕۆکی پێشووی Pearl ئاماژە بە 21 CFR §165.110 دەکات. دەقی کۆتاییی یەکگرتنەوە پێویستی بە بەڵگەنامەی نوێی کۆمپانیا هەیە.' },
      { code: 'USP 23', title: 'ئاماژەی مێژوویی USP', body: 'USP 23 لە ناوەڕۆکی پێشووی Pearl هاتووە. تا بەڵگەنامەی نوێ دابین نەکرێت وەک ئاماژەی مێژوویی مامەڵەی لەگەڵ دەکرێت.' },
      { code: 'Iraq MOH', title: 'وەزارەتی تەندروستی عێراق', body: 'کۆمپانیا باس لە پەیوەندیی ستانداردەکان بە ڕێنماییە تەندروستییە عێراقییەکان دەکات. پیشاندانی هەر بڕوانامەیەکی نوێ پێویستی بە بەڵگەی پشتڕاستکراو هەیە.' },
    ],
    testingEyebrow: 'تاقیگەکانی کوالێتی',
    testingTitle: 'بەپێی زانیاریی بڵاوکراو: پشکنین هەر 2 کاتژمێر.',
    testingBody: 'Pearl دەڵێت ئاوی بەرهەمهاتوو هەر 2 کاتژمێر لە تاقیگەکانی ناو کارگە پشکنین دەکرێت و پشکنینی سەربەخۆش هەیە. دەقی کۆتایی لەسەر ئەم پرۆسەیە دوای پشتڕاستکردنەوەی SOP و بەڵگەنامەکان دادەنرێت.',
    testingMetric: '02:00',
    testingMetricLabel: 'کاتی پشکنینی بڵاوکراو لە ناو کارگە',
    trustPoints: [
      { title: 'پاککردنەوەی ڕێکخراو', body: 'زانیاریی کۆمپانیا باس لە خشتەی پاککردنەوەی ئامێرەکانی بەرهەمهێنان دەکات.' },
      { title: 'ڕەفتاری تەندروستی', body: 'کۆمپانیا باس لە ڕاهێنانی کارمەندان لەسەر پاکوخاوێنی دەکات.' },
      { title: 'مادەی پاکەتکردنی پەسەندکراو', body: 'ناوەڕۆکی پێشوو باس لە مادەی پاکەتکردنی پەسەندکراو دەکات؛ وردەکاریی کۆتایی پێویستی بە پشتڕاستکردنەوە هەیە.' },
    ],
    closingTitle: 'پاکی بەهێزترە کاتێک کارەکەی پشتەوەی ببینرێت.',
    closingBody: 'چیرۆکی جۆرایەتی بە پرۆسەی ڕوون، وێنەی ڕاستەقینەی کارگە، پشکنینی بەڵگەدار و زانیاریی نوێی کۆمپانیا بەهێز دەبێت.',
    faqTitle: 'پرسیارەکانی کوالێتی',
    faqIntro: 'وەڵامە ڕوونەکان جیاوازی نێوان زانیاریی بڵاوکراو و وردەکاریی پێویست بە بەڵگەنامە دەردەخەن.',
    faq: [
      { question: 'Pearl چەند قۆناغی پاککردنەوە بڵاوکردووەتەوە؟', answer: 'Pearl دەڵێت ئاوەکە بە پرۆسەی 7 قۆناغ پاک دەکرێتەوە. تسلسلی فنیی تەواو لە سەرچاوەی گشتی بڵاونەکراوەتەوە، بۆیە ناوی قۆناغەکان دروست ناکرێن.' },
      { question: 'Pearl دەڵێت ئاو چەند جار پشکنین دەکرێت؟', answer: 'زانیاریی بڵاوکراو دەڵێت هەر 2 کاتژمێر لە تاقیگەکانی ناو کارگە پشکنین دەکرێت و پشکنینی سەربەخۆش هەیە. پرۆسەی ئێستا پێش وەشانی کۆتایی پشتڕاست دەکرێتەوە.' },
      { question: 'Pearl ئاماژە بە کام سەرچاوانە دەکات؟', answer: 'ناوەڕۆکی پێشوو ئاماژە بە FDA 21 CFR §165.110، USP 23 و ڕێنمایی وەزارەتی تەندروستی عێراق دەکات. دەقی پەسەندکردنی نوێ پێویستی بە بەڵگەنامەی نوێ هەیە.' },
      { question: 'لەبارەی پاکوخاوێنی و پاکەتکردن چی بڵاوکراوەتەوە؟', answer: 'کۆمپانیا باس لە خشتەی پاککردنەوە، ڕاهێنانی کارمەندان و مادەی پاکەتکردنی پەسەندکراو دەکات. وردەکاریی کۆتایی لە کۆمپانیا پشتڕاست دەکرێتەوە.' },
    ],
  },
};

const copy: Record<Locale, PremiumBrandCopy> = { ar, en, ku };

export function getBrandCopy(locale: Locale): PremiumBrandCopy {
  return copy[locale];
}
