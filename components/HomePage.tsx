import Link from 'next/link';
import { ArrowLeft, ArrowRight, Droplets, ShieldCheck, Sparkles, MapPin, Phone, Factory, Truck, HeartHandshake } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { getBrandCopy } from '@/lib/brand-copy';
import { media } from '@/lib/media';
import { localizedPath, localizedProductPath, productImages, productSizes, site, type Locale } from '@/lib/site';

const extra = {
  en: {
    proofEyebrow: 'Why Pearl',
    proofTitle: 'Behind every bottle is a clear quality process.',
    proofBody: 'Pearl brings together a published seven-step purification process, regular quality testing, sanitation discipline and practical formats made for everyday life in Iraq.',
    lifeEyebrow: 'Everyday Pearl',
    lifeTitle: 'Made to move with the day.',
    lifeBody: 'From the family table to work, the road and hospitality, Pearl fits naturally into the moments where clean refreshment matters.',
    distributionEyebrow: 'From plant to market',
    distributionTitle: 'A local brand built to stay close to the people it serves.',
    distributionBody: 'Production, organized storage and distribution come together to keep Pearl present across daily Iraqi life and commercial use.',
    distributionCta: 'Talk to sales',
    family: 'Family & home',
    active: 'Work & movement',
    visualAlt: 'Pearl purified water brand visual',
  },
  ar: {
    proofEyebrow: 'لماذا اللؤلؤة',
    proofTitle: 'خلف كل عبوة، عملية جودة واضحة.',
    proofBody: 'تجمع اللؤلؤة بين عملية تنقية منشورة من 7 مراحل، متابعة دورية للجودة، التزام بالنظافة والتعقيم، وأحجام عملية صممت لتفاصيل الحياة اليومية في العراق.',
    lifeEyebrow: 'من تفاصيل يومنا',
    lifeTitle: 'موجودة وياك بكل لحظة تحتاج بيها انتعاش بسيط وواثق.',
    lifeBody: 'من سفرة البيت إلى المكتب، ومن الطريق إلى الضيافة، تبقى اللؤلؤة جزءاً طبيعياً من يوم عراقي يتحرك باستمرار.',
    distributionEyebrow: 'من المعمل إلى السوق',
    distributionTitle: 'حضور محلي مرتب، أقرب لتفاصيل يومك.',
    distributionBody: 'الإنتاج، التخزين المنظم والتوزيع يشتغلون كسلسلة واحدة حتى تبقى اللؤلؤة حاضرة للاستخدام اليومي والتجاري بثبات.',
    distributionCta: 'تواصل مع فريق المبيعات',
    family: 'العائلة والبيت',
    active: 'العمل والحركة',
    visualAlt: 'مياه اللؤلؤة المنقاة',
  },
  ku: {
    proofEyebrow: 'بۆچی Pearl',
    proofTitle: 'لە پشت هەر بوتڵێک، پرۆسەیەکی ڕوونی جۆرایەتی هەیە.',
    proofBody: 'Pearl پرۆسەی پاککردنەوەی 7 قۆناغ، چاودێری جۆرایەتی، پاکوخاوێنی و قەبارەی پراکتیکی بۆ ژیانی ڕۆژانەی عێراق پێکەوە دەهێنێت.',
    lifeEyebrow: 'Pearl لە ژیانی ڕۆژانە',
    lifeTitle: 'لەگەڵ ڕۆژەکەت دەجوڵێت.',
    lifeBody: 'لە مێزی خێزانەوە بۆ کار، ڕێگا و میوانداری، Pearl بە شێوەیەکی سروشتی لەگەڵ ساتەکانی ڕۆژانە دەگونجێت.',
    distributionEyebrow: 'لە کارگەوە بۆ بازاڕ',
    distributionTitle: 'براندێکی ناوخۆیی کە نزیک لە خەڵک دەمێنێتەوە.',
    distributionBody: 'بەرهەمهێنان، هەڵگرتنی ڕێکخراو و دابەشکردن بە یەکەوە کار دەکەن بۆ ئەوەی Pearl بەردەست بێت.',
    distributionCta: 'پەیوەندی بە فرۆشتنەوە بکە',
    family: 'خێزان و ماڵ',
    active: 'کار و جوڵە',
    visualAlt: 'ئاوی پاککراوەی Pearl',
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = getBrandCopy(locale);
  const x = extra[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const icons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const contactDirectoryLabel = locale === 'en' ? '5 contact lines' : locale === 'ar' ? '5 أرقام للتواصل' : '5 هێڵی پەیوەندی';
  const storyLocation = locale === 'en' ? 'Baghdad · Iraq' : locale === 'ar' ? 'بغداد · العراق' : 'بەغدا · عێراق';
  const qualityStats = locale === 'en'
    ? [{ value: '7', label: 'published purification stages' }, { value: '2h', label: 'published on-site testing cycle' }, { value: '4', label: 'confirmed current formats' }]
    : locale === 'ar'
      ? [{ value: '7', label: 'مراحل تنقية منشورة' }, { value: '2h', label: 'دورة الفحص المنشورة داخل المعمل' }, { value: '4', label: 'أحجام حالية مؤكدة' }]
      : [{ value: '7', label: 'قۆناغی پاککردنەوەی بڵاوکراو' }, { value: '2h', label: 'خولی پشکنینی ناو تاقیگە' }, { value: '4', label: 'قەبارەی ئێستای پشتڕاستکراو' }];

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
            <Link className="btn btn-secondary" href={localizedPath(locale, 'quality')}>{c.nav.quality}</Link>
          </div>
          <div className="hero-proof"><span>{c.common.madeInIraq}</span><b>•</b><span>{locale === 'en' ? '4 confirmed formats' : locale === 'ar' ? '4 أحجام حالية' : '4 قەبارەی ئێستا'}</span></div>
        </div>
        <div className="hero-visual hero-visual-photo" data-parallax="7" data-asset-slot="IMG-HOME-HERO-01">
          <img className="hero-scene-image" src={media.home.hero} alt={x.visualAlt} loading="eager" decoding="async" referrerPolicy="no-referrer"/>
          <div className="hero-logo-card"><BrandLogo locale={locale}/></div>
          <div className="hero-size"><strong>1000</strong><span>ml</span></div>
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl</span><h2>{c.home.pillarsTitle}</h2></div><p>{c.home.pillarsBody}</p></div>
        <div className="pillar-grid">
          {c.home.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return <article className="pillar-card" key={pillar.title} data-reveal>
              <div className="icon-box"><Icon size={23}/></div><span className="card-index">0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.body}</p>
            </article>;
          })}
        </div>
        <div className="home-proof-feature" data-reveal>
          <div className="home-proof-media" data-parallax="4"><img src={media.home.purity} alt={x.visualAlt} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
          <div className="home-proof-copy"><span className="eyebrow">{x.proofEyebrow}</span><h2>{x.proofTitle}</h2><p>{x.proofBody}</p><Link className="text-link" href={localizedPath(locale,'quality')}>{c.common.learnMore}<Arrow size={17}/></Link></div>
        </div>
      </div>
    </section>

    <section className="product-story">
      <div className="site-shell product-story-grid">
        <div className="product-story-copy" data-reveal>
          <span className="eyebrow eyebrow-light">{c.home.productsKicker}</span><h2>{c.home.productsTitle}</h2><p>{c.home.productsBody}</p>
          <Link href={localizedPath(locale, 'products')} className="text-link light">{c.common.viewProducts}<Arrow size={17}/></Link>
        </div>
        <div className="product-story-list">
          {productSizes.map((key, index) => {
            const product = c.products.items[key];
            return <Link href={localizedProductPath(locale, key)} key={key} className="story-product-card" aria-label={`${c.common.learnMore}: ${product.size}`}>
              <div className="story-product-copy"><span>0{index + 1}</span><small>{product.use}</small><h3>{product.size}</h3><p>{product.body}</p><span className="story-product-link">{c.common.learnMore}<Arrow size={15}/></span></div>
              <div className="story-product-visual"><div className="product-halo"/><img src={productImages[key]} alt={`Pearl ${product.size}`} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="section story-home">
      <div className="site-shell story-home-grid">
        <figure className="story-photo" data-reveal data-parallax="4"><img src={media.home.iraq} alt={storyLocation} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption>{storyLocation}</figcaption></figure>
        <div data-reveal><span className="eyebrow">{c.home.storyKicker}</span><h2>{p.home.storyTitle}</h2><p className="lead">{p.home.storyBody}</p><blockquote>{c.home.storyQuote}</blockquote><Link href={localizedPath(locale, 'about')} className="text-link">{c.common.learnMore}<Arrow size={17}/></Link></div>
      </div>
    </section>

    <section className="quality-home quality-home-premium">
      <div className="site-shell quality-home-grid quality-home-grid-media">
        <div className="quality-home-copy" data-reveal>
          <span className="eyebrow eyebrow-light">{c.home.qualityKicker}</span>
          <h2>{p.home.qualityTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{p.home.qualityBody}</p>
          <Link className="btn btn-white" href={localizedPath(locale, 'quality')}>{c.common.learnMore}<Arrow size={18}/></Link>
        </div>
        <div className="quality-home-image" data-reveal data-parallax="4"><img src={media.home.standards} alt={x.proofTitle} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
        <div className="quality-proof-grid">
          {qualityStats.map((stat, index) => <article className="quality-proof-card" key={stat.value} data-reveal>
            <span>0{index + 1}</span><strong dir="ltr">{stat.value}</strong><p>{stat.label}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section lifestyle-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">{x.lifeEyebrow}</span><h2>{x.lifeTitle}</h2></div><p>{x.lifeBody}</p></div>
        <div className="lifestyle-grid">
          <figure data-reveal data-parallax="3"><img src={media.home.lifestyleFamily} alt={x.family} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><HeartHandshake size={18}/><span>{x.family}</span></figcaption></figure>
          <figure data-reveal data-parallax="5"><img src={media.home.lifestyleActive} alt={x.active} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Sparkles size={18}/><span>{x.active}</span></figcaption></figure>
        </div>
      </div>
    </section>

    <section className="section distribution-home">
      <div className="site-shell distribution-home-card" data-reveal>
        <div className="distribution-home-media" data-parallax="5"><img src={media.home.distribution} alt={x.distributionTitle} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
        <div className="distribution-home-copy"><span className="eyebrow">{x.distributionEyebrow}</span><h2>{x.distributionTitle}</h2><p>{x.distributionBody}</p><Link className="btn btn-primary" href={localizedPath(locale,'contact')}><Truck size={18}/>{x.distributionCta}</Link></div>
        <div className="distribution-home-badge" aria-hidden="true"><Factory size={22}/><span>Pearl · Baghdad</span></div>
      </div>
    </section>

    <section className="section contact-preview">
      <div className="site-shell contact-preview-card" data-reveal>
        <div><span className="eyebrow">Pearl · Baghdad</span><h2>{c.home.ctaTitle}</h2><p>{c.home.ctaBody}</p></div>
        <div className="contact-preview-actions">
          <Link href={localizedPath(locale,'contact')}><Phone size={20}/><span>{c.common.contact}</span><strong>{contactDirectoryLabel}</strong></Link>
          <a href={site.map} target="_blank" rel="noreferrer"><MapPin size={20}/><span>{c.common.directions}</span><strong>{site.city}</strong></a>
        </div>
      </div>
    </section>
  </>;
}
