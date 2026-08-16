import Link from 'next/link';
import { Droplets, MapPin, ShieldCheck, Sparkles, Factory, Users, Gauge } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { media } from '@/lib/media';
import { isLocale, localizedPath, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'about') : {};
}

const principles = {
  en: ['Local', 'Pure', 'Reliable'],
  ar: ['عراقية', 'نقية', 'موثوقة'],
  ku: ['عێراقی', 'پاک', 'جێی متمانە'],
} as const;

const valuesLabel = { en: 'Brand values', ar: 'قيم اللؤلؤة', ku: 'بەهاکانی Pearl' } as const;

const mission = {
  en: {
    eyebrow: 'Our mission', title: 'Make clean, refreshing water a reliable everyday choice.',
    body: 'Pearl brings together a familiar Iraqi identity, practical formats and a clear commitment to a consistent consumer experience — at home, at work, on the move and in hospitality.',
    essence: ['Purity', 'Trust', 'Freshness', 'Iraqi heritage'],
    facilityEyebrow: 'Inside Pearl', facilityTitle: 'A real brand is stronger when people can see the work behind it.', facilityBody: 'The new Pearl experience opens a window into the facility, production, people and day-to-day operations — turning trust from a claim into something visible.',
    cards: ['Production & operations', 'People behind the brand', 'Made in Iraq'],
  },
  ar: {
    eyebrow: 'مهمتنا', title: 'أن تكون المياه النظيفة والمنعشة خياراً يومياً يمكن الاعتماد عليه.',
    body: 'تجمع اللؤلؤة بين هوية عراقية مألوفة، أحجام عملية، وتجربة واضحة ومتسقة للمستهلك — في البيت، العمل، الطريق، والضيافة.',
    essence: ['النقاء', 'الثقة', 'الانتعاش', 'الإرث العراقي'],
    facilityEyebrow: 'داخل اللؤلؤة', facilityTitle: 'البراند الحقيقي يصير أقوى لما الناس تشوف الشغل اللي وراه.', facilityBody: 'نخلي المصنع، العمليات، الفريق والتفاصيل اليومية جزءاً من قصة اللؤلؤة، حتى تتحول الثقة من كلام إلى شيء ينشاف.',
    cards: ['الإنتاج والعمليات', 'الفريق وراء البراند', 'صناعة عراقية'],
  },
  ku: {
    eyebrow: 'ئەرکی ئێمە', title: 'ئاوی پاک و تازە ببێتە هەڵبژاردەیەکی ڕۆژانەی جێی متمانە.',
    body: 'Pearl ناسنامەیەکی عێراقیی ئاشنا، قەبارەی پراکتیکی و ئەزموونێکی ڕوون و یەکگرتوو بۆ ماڵ، کار، هاتوچۆ و میوانداری پێکەوە دەهێنێت.',
    essence: ['پاکی', 'متمانە', 'تازەیی', 'میراتی عێراقی'],
    facilityEyebrow: 'لە ناو Pearl', facilityTitle: 'متمانە کاتێک بەهێزترە کە کارە ڕاستەقینەکە ببینرێت.', facilityBody: 'کارگە، پرۆسە، تیم و کارە ڕۆژانەکان دەبنە بەشێک لە چیرۆکی Pearl.',
    cards: ['بەرهەمهێنان و کار', 'تیمی براند', 'بەرهەمی عێراقی'],
  },
} as const;

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const m = mission[locale];
  const missionIcons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const galleryIcons = [Factory, Users, Gauge];
  const gallery = [media.about.factory, media.about.team, media.about.operations];

  return <>
    <PageHero locale={locale} eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro}/>

    <section className="section about-brand-visual">
      <div className="site-shell about-brand-card" data-reveal>
        <img src={media.about.brand} alt="Pearl Water — Iraq" loading="eager" decoding="async" referrerPolicy="no-referrer"/>
        <div><span className="eyebrow">Pearl · Baghdad</span><h2>{c.about.heritageTitle}</h2><p>{c.about.heritageBody}</p></div>
      </div>
    </section>

    <section className="section">
      <div className="site-shell editorial-grid">
        <div data-reveal><span className="eyebrow">Pearl · Iraq</span><h2>{c.about.heritageTitle}</h2></div>
        <div data-reveal><p className="lead">{c.about.heritageBody}</p><div className="brand-rule">{principles[locale].map((item, index) => <span key={item}>{item}{index < 2 && <i/>}</span>)}</div></div>
      </div>
    </section>

    <section className="section about-facility-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">{m.facilityEyebrow}</span><h2>{m.facilityTitle}</h2></div><p>{m.facilityBody}</p></div>
        <div className="about-gallery">
          {gallery.map((src, index) => { const Icon = galleryIcons[index]; return <figure key={src} data-reveal data-parallax={index + 2}><img src={src} alt={m.cards[index]} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Icon size={18}/><span>{m.cards[index]}</span><b>0{index + 1}</b></figcaption></figure>; })}
        </div>
        <figure className="about-iraq-wide" data-reveal><img src={media.about.iraq} alt={principles[locale][0]} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption>{principles[locale].join(' · ')}</figcaption></figure>
      </div>
    </section>

    <section className="section mission-section">
      <div className="site-shell mission-panel" data-reveal>
        <div className="mission-copy"><span className="eyebrow eyebrow-light">{m.eyebrow}</span><h2>{m.title}</h2><p>{m.body}</p></div>
        <div className="mission-essence">
          {m.essence.map((item, index) => { const Icon = missionIcons[index]; return <div className="mission-essence-item" key={item} data-reveal><span><Icon size={19}/></span><strong>{item}</strong><small>0{index + 1}</small></div>; })}
        </div>
        <div className="mission-wave" aria-hidden="true"><i/><i/><i/></div>
      </div>
    </section>

    <section className="section section-ice">
      <div className="site-shell">
        <div className="section-head centered" data-reveal><span className="eyebrow">{valuesLabel[locale]}</span><h2>{c.about.promiseTitle}</h2><p>{c.about.promiseBody}</p></div>
        <div className="value-grid">{c.about.values.map((value, index) => <article key={value.title} data-reveal><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.body}</p></article>)}</div>
      </div>
    </section>

    <section className="section"><div className="site-shell simple-cta" data-reveal><h2>{c.home.productsTitle}</h2><Link href={localizedPath(locale, 'products')} className="btn btn-primary">{c.common.viewProducts}</Link></div></section>
  </>;
}
