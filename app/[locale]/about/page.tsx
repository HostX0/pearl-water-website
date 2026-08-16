import Link from 'next/link';
import { Droplets, MapPin, ShieldCheck, Sparkles, Factory, Gauge, HeartHandshake } from 'lucide-react';
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
  en: ['Iraqi', 'Pure', 'Reliable'],
  ar: ['عراقية', 'نقية', 'موثوقة'],
  ku: ['عێراقی', 'پاک', 'جێی متمانە'],
} as const;

const valuesLabel = { en: 'What Pearl stands for', ar: 'شنو تمثل اللؤلؤة', ku: 'Pearl چی نوێنەرایەتی دەکات' } as const;

const pageCopy = {
  en: {
    brandEyebrow: 'Pearl · Baghdad',
    brandTitle: 'A familiar Iraqi name, refreshed for the way people live today.',
    brandBody: 'Pearl brings purified water into the moments that shape everyday life — family meals, workdays, meetings, hospitality and events.',
    facilityEyebrow: 'Inside the brand',
    facilityTitle: 'Trust starts with the work behind the bottle.',
    facilityBody: 'Production, quality routines and attention to detail are what turn a familiar blue bottle into a brand people can return to every day.',
    cards: ['Production & filling', 'Care in every detail', 'Made in Baghdad'],
    iraqCaption: 'Iraqi by identity. Close to everyday life.',
    missionEyebrow: 'Our mission',
    missionTitle: 'Make clean, refreshing water an easy everyday choice.',
    missionBody: 'Pearl combines a familiar Iraqi identity with practical formats and a consistent experience for home, work, movement and hospitality.',
    essence: ['Purity', 'Trust', 'Freshness', 'Iraqi heritage'],
  },
  ar: {
    brandEyebrow: 'اللؤلؤة · بغداد',
    brandTitle: 'اسم عراقي مألوف، بروح أنظف وأقرب لليوم.',
    brandBody: 'اللؤلؤة موجودة باللحظات اللي تصنع يومنا: سفرة البيت، الدوام، الاجتماعات، الضيافة والمناسبات. ماء منقاة بهوية نعرفها ونرتاح لها.',
    facilityEyebrow: 'داخل اللؤلؤة',
    facilityTitle: 'الثقة تبدأ من الشغل اللي وراء العبوة.',
    facilityBody: 'الإنتاج، متابعة الجودة والعناية بالتفاصيل هي اللي تخلي العبوة الزرقاء المألوفة تجربة ثابتة تقدر ترجع لها كل يوم.',
    cards: ['الإنتاج والتعبئة', 'العناية بكل تفصيل', 'صناعة من بغداد'],
    iraqCaption: 'عراقية بهويتها. قريبة من تفاصيل يومنا.',
    missionEyebrow: 'مهمتنا',
    missionTitle: 'نخلي الماء النظيف والمنعش خيار سهل لكل يوم.',
    missionBody: 'اللؤلؤة تجمع هوية عراقية مألوفة ويا أحجام عملية وتجربة متسقة للبيت، العمل، الطريق والضيافة.',
    essence: ['النقاء', 'الثقة', 'الانتعاش', 'الإرث العراقي'],
  },
  ku: {
    brandEyebrow: 'Pearl · بەغدا',
    brandTitle: 'ناوێکی عێراقیی ئاشنا، بە ڕۆحێکی پاکتر و مۆدێرنتر.',
    brandBody: 'Pearl لە ساتەکانی ژیانی ڕۆژانەدا هەیە؛ مێزی خێزان، کار، کۆبوونەوە و میوانداری.',
    facilityEyebrow: 'لە ناو Pearl',
    facilityTitle: 'متمانە لە کارەکەی پشت پاکەتەکە دەست پێدەکات.',
    facilityBody: 'بەرهەمهێنان، چاودێری کوالێتی و وردبینی ئەو شتانەن کە ئەزموونی Pearl یەکسان دەهێڵنەوە.',
    cards: ['بەرهەمهێنان و پڕکردنەوە', 'وردبینی لە هەر تەفسیلەکدا', 'بەرهەمی بەغدا'],
    iraqCaption: 'عێراقی بە ناسنامە. نزیک لە ژیانی ڕۆژانە.',
    missionEyebrow: 'ئەرکی ئێمە',
    missionTitle: 'ئاوی پاک و تازە ببێتە هەڵبژاردەیەکی ئاسان بۆ هەر ڕۆژێک.',
    missionBody: 'Pearl ناسنامەیەکی عێراقیی ئاشنا لەگەڵ قەبارەی پراکتیکی و ئەزموونێکی یەکسان کۆدەکاتەوە.',
    essence: ['پاکی', 'متمانە', 'تازەیی', 'میراتی عێراقی'],
  },
} as const;

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const p = pageCopy[locale];
  const missionIcons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const galleryIcons = [Factory, HeartHandshake, Gauge];
  const gallery = [media.about.factory, media.about.team, media.about.operations];

  return <>
    <PageHero locale={locale} eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro}/>

    <section className="section about-brand-visual">
      <div className="site-shell about-brand-card" data-reveal>
        <img src={media.about.brand} alt="Pearl Water — Iraq" loading="eager" decoding="async" referrerPolicy="no-referrer"/>
        <div><span className="eyebrow">{p.brandEyebrow}</span><h2>{p.brandTitle}</h2><p>{p.brandBody}</p><div className="brand-rule">{principles[locale].map((item, index) => <span key={item}>{item}{index < 2 && <i/>}</span>)}</div></div>
      </div>
    </section>

    <section className="section about-facility-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">{p.facilityEyebrow}</span><h2>{p.facilityTitle}</h2></div><p>{p.facilityBody}</p></div>
        <figure className="about-iraq-wide" data-reveal><img src={media.about.iraq} alt={principles[locale][0]} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption>{p.iraqCaption}</figcaption></figure>
        <div className="about-gallery">
          {gallery.map((src, index) => { const Icon = galleryIcons[index]; return <figure key={src} data-reveal data-parallax={index + 2}><img src={src} alt={p.cards[index]} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Icon size={18}/><span>{p.cards[index]}</span><b>0{index + 1}</b></figcaption></figure>; })}
        </div>
      </div>
    </section>

    <section className="section mission-section">
      <div className="site-shell mission-panel" data-reveal>
        <div className="mission-copy"><span className="eyebrow eyebrow-light">{p.missionEyebrow}</span><h2>{p.missionTitle}</h2><p>{p.missionBody}</p></div>
        <div className="mission-essence">
          {p.essence.map((item, index) => { const Icon = missionIcons[index]; return <div className="mission-essence-item" key={item} data-reveal><span><Icon size={19}/></span><strong>{item}</strong><small>0{index + 1}</small></div>; })}
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
