import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Droplets, ShieldCheck, Sparkles, MapPin, Phone, Factory, Truck, HeartHandshake } from 'lucide-react';
import { getContent } from '@/lib/content';
import { getBrandCopy } from '@/lib/brand-copy';
import { mediaSources } from '@/lib/media';
import { localizedPath, localizedProductPath, productSizes, site, type Locale } from '@/lib/site';

const homeVoice = {
  en: {
    promiseTitle: 'Water you can feel good choosing every day.',
    promiseBody: 'Pearl keeps the experience simple: purified water, familiar quality and practical formats for the people and places that make up everyday life in Iraq.',
    pillars: [
      ['Purity', 'A clean, refreshing water experience built around careful treatment.'],
      ['Trust', 'A familiar Iraqi name supported by disciplined quality routines.'],
      ['Freshness', 'Practical formats that fit work, home, meetings and hospitality.'],
      ['Iraqi', 'Produced in Baghdad and shaped around the rhythm of life in Iraq.'],
    ],
    proofEyebrow: 'Inside the bottle',
    proofTitle: 'Seven stages, one clear goal: consistent water quality.',
    proofBody: 'Pearl’s journey brings together filtration, purification, distillation, laboratory testing and hygienic filling before the product reaches the market.',
    lifeEyebrow: 'Made for real moments',
    lifeTitle: 'From the table to the road, Pearl moves with the day.',
    lifeBody: 'Family meals, workdays, meetings and hospitality all ask for different formats. Pearl keeps the same familiar experience across all four.',
    distributionEyebrow: 'From Baghdad to everyday life',
    distributionTitle: 'Produced locally. Made to stay close.',
    distributionBody: 'Production, organized storage and distribution work together so Pearl can serve both everyday consumers and commercial customers.',
    distributionCta: 'Talk to sales',
    family: 'Family & home',
    active: 'Work & movement',
    visualAlt: 'Pearl purified water',
    ctaTitle: 'Find the Pearl format that fits your day.',
    ctaBody: 'Explore the range, learn more about Pearl or contact the team in Baghdad.',
    contacts: '5 contact lines',
  },
  ar: {
    promiseTitle: 'ماء ترتاح لاختياره كل يوم.',
    promiseBody: 'اللؤلؤة تبقي التجربة بسيطة: مياه منقاة، جودة مألوفة، وأحجام عملية للبيت، الدوام، الاجتماعات والضيافة.',
    pillars: [
      ['النقاء', 'مياه منقاة ومنعشة تبدأ رحلتها من معالجة تهتم بالتفاصيل.'],
      ['الثقة', 'اسم عراقي مألوف تدعمه متابعة جودة مستمرة داخل المعمل.'],
      ['الانتعاش', 'أحجام عملية تناسب البيت، الدوام، الاجتماعات والضيافة.'],
      ['عراقية', 'تُنتج في بغداد وتفهم تفاصيل الحياة اليومية في العراق.'],
    ],
    proofEyebrow: 'داخل العبوة',
    proofTitle: 'سبع مراحل، وهدف واحد: جودة ثابتة بكل عبوة.',
    proofBody: 'رحلة اللؤلؤة تجمع التصفية والتنقية والتقطير والفحص داخل المختبر، وبعدها التعبئة الصحية والتدقيق قبل وصول المنتج للسوق.',
    lifeEyebrow: 'لكل تفاصيل يومنا',
    lifeTitle: 'من سفرة البيت للطريق، اللؤلؤة تمشي ويا يومك.',
    lifeBody: 'البيت، الدوام، الاجتماعات والضيافة يحتاجون أحجام مختلفة. اللؤلؤة تحافظ على نفس التجربة المألوفة بكل حجم.',
    distributionEyebrow: 'من بغداد إلى يومك',
    distributionTitle: 'إنتاج محلي، وحضور قريب.',
    distributionBody: 'الإنتاج، التخزين والتوزيع يشتغلون كسلسلة واحدة حتى تبقى اللؤلؤة قريبة من المستهلك ومن احتياجات السوق.',
    distributionCta: 'تواصل مع المبيعات',
    family: 'العائلة والبيت',
    active: 'العمل والحركة',
    visualAlt: 'مياه اللؤلؤة المنقاة',
    ctaTitle: 'اختار حجم اللؤلؤة اللي يناسب يومك.',
    ctaBody: 'شوف المجموعة، تعرف أكثر على اللؤلؤة، أو تواصل ويانا في بغداد.',
    contacts: '5 أرقام للتواصل',
  },
  ku: {
    promiseTitle: 'ئاوێک کە هەموو ڕۆژێک بە ئارامی هەڵیدەبژێریت.',
    promiseBody: 'Pearl ئەزموونەکە سادە دەهێڵێتەوە: ئاوی پاککراو، کوالێتیی ئاشنا و قەبارەی پراکتیکی بۆ ماڵ و کار و میوانداری.',
    pillars: [
      ['پاکی', 'ئاوی پاک و تازە کە گەشتەکەی بە چارەسەرێکی وردبینانە دەست پێدەکات.'],
      ['متمانە', 'ناوێکی عێراقیی ئاشنا کە بە چاودێری کوالێتی پشتگیری دەکرێت.'],
      ['تازەیی', 'قەبارەی پراکتیکی بۆ ماڵ و کار و کۆبوونەوە و میوانداری.'],
      ['عێراقی', 'لە بەغدا بەرهەم دەهێنرێت و لەگەڵ ژیانی ڕۆژانەی عێراق دەگونجێت.'],
    ],
    proofEyebrow: 'لە ناو پاکەتەکە',
    proofTitle: 'حەوت قۆناغ، بۆ یەک ئامانج: کوالێتیی یەکسان.',
    proofBody: 'گەشتی Pearl پاڵاوتن و پاککردنەوە و تقطیر و پشکنینی تاقیگە و پڕکردنەوەی پاک پێکەوە دەهێنێت.',
    lifeEyebrow: 'بۆ ساتە ڕاستەقینەکان',
    lifeTitle: 'لە مێزی خێزانەوە بۆ ڕێگا، Pearl لەگەڵ ڕۆژەکەت دەجوڵێت.',
    lifeBody: 'ماڵ و کار و کۆبوونەوە و میوانداری قەبارەی جیاواز دەوێت؛ Pearl یەک ئەزموونی ئاشنا لە هەموویاندا دەهێڵێتەوە.',
    distributionEyebrow: 'لە بەغداوە بۆ ڕۆژەکەت',
    distributionTitle: 'بەرهەمهێنانی ناوخۆیی، حضوری نزیک.',
    distributionBody: 'بەرهەمهێنان و هەڵگرتن و دابەشکردن پێکەوە کار دەکەن بۆ نزیکبوونەوە لە کڕیار و بازاڕ.',
    distributionCta: 'پەیوەندی بە فرۆشتنەوە بکە',
    family: 'خێزان و ماڵ',
    active: 'کار و جوڵە',
    visualAlt: 'ئاوی پاککراوی Pearl',
    ctaTitle: 'قەبارەی Pearl ـی گونجاو بۆ ڕۆژەکەت هەڵبژێرە.',
    ctaBody: 'کۆمەڵەکە ببینە، Pearl بناسە یان لە بەغدا پەیوەندیمان پێوە بکە.',
    contacts: '5 هێڵی پەیوەندی',
  },
} as const;

const homeProductSources = {
  '1000': mediaSources.products.front1000,
  '500': mediaSources.products.front500,
  '330': mediaSources.products.front330,
  '200': mediaSources.products.front200,
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = getBrandCopy(locale);
  const x = homeVoice[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const icons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const storyLocation = locale === 'en' ? 'Baghdad · Iraq' : locale === 'ar' ? 'بغداد · العراق' : 'بەغدا · عێراق';

  return <>
    <section className="home-hero" data-page-enter>
      <div className="hero-ripples" aria-hidden="true"><i className="ripple-ring"/><i className="ripple-ring"/><i className="ripple-ring"/></div>
      <div className="hero-glow glow-a"/><div className="hero-glow glow-b"/>
      <div className="site-shell home-hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{c.home.eyebrow}</span>
          <h1>{p.home.heroTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{p.home.heroBody}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={localizedPath(locale, 'products')}>{c.home.primary}<Arrow size={18}/></Link>
            <Link className="btn btn-secondary" href={localizedPath(locale, 'about')}>{c.nav.about}</Link>
          </div>
          <div className="hero-proof"><span>{c.common.madeInIraq}</span><b>•</b><span>{c.common.sizes}</span></div>
        </div>
        <div className="hero-visual hero-visual-photo" data-parallax="7" data-asset-slot="IMG-HOME-HERO-01">
          <Image className="hero-scene-image" src={mediaSources.home.hero} alt={x.visualAlt} width={1122} height={1402} sizes="(max-width: 900px) 92vw, 46vw" quality={90} priority fetchPriority="high" referrerPolicy="no-referrer"/>
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl</span><h2>{x.promiseTitle}</h2></div><p>{x.promiseBody}</p></div>
        <div className="pillar-grid">
          {x.pillars.map((pillar, index) => { const Icon = icons[index]; return <article className="pillar-card" key={pillar[0]} data-reveal><div className="icon-box"><Icon size={23}/></div><span className="card-index">0{index + 1}</span><h3>{pillar[0]}</h3><p>{pillar[1]}</p></article>; })}
        </div>
        <div className="home-proof-feature" data-reveal>
          <div className="home-proof-media" data-parallax="4"><Image src={mediaSources.home.purity} alt={x.visualAlt} width={1200} height={900} sizes="(max-width: 900px) 92vw, 48vw" quality={88} referrerPolicy="no-referrer"/></div>
          <div className="home-proof-copy"><span className="eyebrow">{x.proofEyebrow}</span><h2>{x.proofTitle}</h2><p>{x.proofBody}</p><Link className="text-link" href={localizedPath(locale,'quality')} aria-label={c.common.learnMore + ': ' + c.nav.quality}>{c.common.learnMore}<Arrow size={17}/></Link></div>
        </div>
      </div>
    </section>

    <section className="product-story">
      <div className="site-shell product-story-grid">
        <div className="product-story-copy" data-reveal>
          <span className="eyebrow eyebrow-light">{c.home.productsKicker}</span><h2>{locale === 'ar' ? 'أربع أحجام، وكل لحظة إلها حجمها.' : locale === 'en' ? 'Four formats, each made for a different moment.' : 'چوار قەبارە بۆ ساتە جیاوازەکان.'}</h2><p>{c.home.productsBody}</p>
          <Link href={localizedPath(locale, 'products')} className="text-link light">{c.common.viewProducts}<Arrow size={17}/></Link>
        </div>
        <div className="product-story-list">
          {productSizes.map((key, index) => { const product = c.products.items[key]; return <Link href={localizedProductPath(locale, key)} key={key} className="story-product-card" aria-label={`${c.common.learnMore}: ${product.size}`}><div className="story-product-copy"><span>0{index + 1}</span><small>{product.use}</small><h3>{product.size}</h3><p>{product.body}</p><span className="story-product-link">{c.common.learnMore}<Arrow size={15}/></span></div><div className={`story-product-visual story-product-${key}`}><div className="product-halo"/><div className="story-product-image-shell"><Image src={homeProductSources[key]} alt={'Pearl ' + product.size} width={750} height={750} sizes="(max-width: 680px) 62vw, (max-width: 900px) 34vw, 190px" quality={88} referrerPolicy="no-referrer"/></div></div></Link>; })}
        </div>
      </div>
    </section>

    <section className="section story-home">
      <div className="site-shell story-home-grid">
        <figure className="story-photo" data-reveal data-parallax="4"><Image src={mediaSources.home.iraq} alt={storyLocation} width={1200} height={900} sizes="(max-width: 900px) 92vw, 50vw" quality={88} referrerPolicy="no-referrer"/><figcaption>{storyLocation}</figcaption></figure>
        <div data-reveal><span className="eyebrow">{c.home.storyKicker}</span><h2>{p.home.storyTitle}</h2><p className="lead">{p.home.storyBody}</p><blockquote>{c.home.storyQuote}</blockquote><Link href={localizedPath(locale, 'about')} className="text-link" aria-label={c.common.learnMore + ': ' + c.nav.about}>{c.common.learnMore}<Arrow size={17}/></Link></div>
      </div>
    </section>

    <section className="quality-home quality-home-premium">
      <div className="site-shell quality-home-grid quality-home-grid-media">
        <div className="quality-home-copy" data-reveal><span className="eyebrow eyebrow-light">{c.home.qualityKicker}</span><h2>{p.home.qualityTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</h2><p>{p.home.qualityBody}</p><Link className="btn btn-white" href={localizedPath(locale, 'quality')} aria-label={c.common.learnMore + ': ' + c.nav.quality}>{c.common.learnMore}<Arrow size={18}/></Link></div>
        <div className="quality-home-image" data-reveal data-parallax="4"><Image src={mediaSources.home.standards} alt={x.proofTitle} width={1200} height={900} sizes="(max-width: 900px) 92vw, 30vw" quality={88} referrerPolicy="no-referrer"/></div>
        <div className="quality-proof-grid">{p.home.qualityStats.map((stat, index) => <article className="quality-proof-card" key={stat.value} data-reveal><span>0{index + 1}</span><strong dir="ltr">{stat.value}</strong><p>{stat.label}</p></article>)}</div>
      </div>
    </section>

    <section className="section lifestyle-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">{x.lifeEyebrow}</span><h2>{x.lifeTitle}</h2></div><p>{x.lifeBody}</p></div>
        <div className="lifestyle-grid"><figure data-reveal data-parallax="3"><Image src={mediaSources.home.lifestyleFamily} alt={x.family} width={1200} height={1500} sizes="(max-width: 900px) 92vw, 52vw" quality={88} referrerPolicy="no-referrer"/><figcaption><HeartHandshake size={18}/><span>{x.family}</span></figcaption></figure><figure data-reveal data-parallax="5"><Image src={mediaSources.home.lifestyleActive} alt={x.active} width={1200} height={1500} sizes="(max-width: 900px) 92vw, 38vw" quality={88} referrerPolicy="no-referrer"/><figcaption><Sparkles size={18}/><span>{x.active}</span></figcaption></figure></div>
      </div>
    </section>

    <section className="section distribution-home">
      <div className="site-shell distribution-home-card" data-reveal><div className="distribution-home-media" data-parallax="5"><Image src={mediaSources.home.distribution} alt={x.distributionTitle} width={1600} height={900} sizes="92vw" quality={88} referrerPolicy="no-referrer"/></div><div className="distribution-home-copy"><span className="eyebrow">{x.distributionEyebrow}</span><h2>{x.distributionTitle}</h2><p>{x.distributionBody}</p><Link className="btn btn-primary" href={localizedPath(locale,'contact')}><Truck size={18}/>{x.distributionCta}</Link></div><div className="distribution-home-badge" aria-hidden="true"><Factory size={22}/><span>Pearl · Baghdad</span></div></div>
    </section>

    <section className="section contact-preview">
      <div className="site-shell contact-preview-card" data-reveal><div><span className="eyebrow">Pearl · Baghdad</span><h2>{x.ctaTitle}</h2><p>{x.ctaBody}</p></div><div className="contact-preview-actions"><Link href={localizedPath(locale,'contact')}><Phone size={20}/><span>{c.common.contact}</span><strong>{x.contacts}</strong></Link><a href={site.map} target="_blank" rel="noreferrer"><MapPin size={20}/><span>{c.common.directions}</span><strong>{site.city}</strong></a></div></div>
    </section>
  </>;
}
