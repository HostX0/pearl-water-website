import Link from 'next/link';
import { Droplets, MapPin, ShieldCheck, Sparkles, Factory, Gauge } from 'lucide-react';
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

const pageCopy = {
  en: {
    heroEyebrow: 'Our story',
    heroTitle: 'An Iraqi name made for everyday life.',
    heroBody: 'Pearl is purified water produced in Baghdad for the moments people live every day — at home, at work, in meetings, on the move and around the table.',
    brandEyebrow: 'Pearl · Baghdad',
    brandTitle: 'Familiar by name. Fresh in the way it shows up today.',
    brandBody: 'Pearl belongs in the moments that shape everyday life: family meals, workdays, meetings, hospitality and events. A clear Iraqi identity, four practical formats and one familiar experience.',
    facilityEyebrow: 'Behind Pearl',
    facilityTitle: 'The bottle is simple. The work behind it is not.',
    facilityBody: 'Production, quality routines and attention to detail are what keep Pearl consistent from one format to the next and from the plant to the people who choose it.',
    cards: ['Production & filling', 'Clean production routines', 'Made in Baghdad'],
    iraqCaption: 'Iraqi by identity. Close to everyday life.',
    missionEyebrow: 'Our mission',
    missionTitle: 'Make clean, refreshing water an easy everyday choice.',
    missionBody: 'Pearl combines a familiar Iraqi identity with practical formats for home, work, movement, meetings and hospitality.',
    essence: ['Purity', 'Trust', 'Freshness', 'Iraqi heritage'],
    valuesEyebrow: 'What matters to us',
    valuesTitle: 'Simple values you should feel in every Pearl experience.',
    valuesBody: 'Clean water, dependable quality, practical formats and a brand that feels proudly Iraqi without trying too hard.',
    values: [
      ['Purity', 'Clean, refreshing water stays at the center of every choice we make.'],
      ['Reliability', 'The Pearl experience should feel familiar and dependable every time.'],
      ['Care', 'From production to presentation, the small details matter.'],
      ['Iraqi identity', 'Made in Baghdad, with a brand character that belongs here.'],
    ],
  },
  ar: {
    heroEyebrow: 'قصتنا',
    heroTitle: 'اسم عراقي معمول لليوم العادي.',
    heroBody: 'اللؤلؤة مياه منقاة تُنتج في بغداد للحظات اللي نعيشها كل يوم — بالبيت، الدوام، الاجتماعات، الطريق وحول السفرة.',
    brandEyebrow: 'اللؤلؤة · بغداد',
    brandTitle: 'اسم نعرفه، بصورة أقرب لليوم.',
    brandBody: 'اللؤلؤة موجودة باللحظات اللي تصنع يومنا: سفرة البيت، الدوام، الاجتماعات، الضيافة والمناسبات. هوية عراقية واضحة، أربعة أحجام عملية وتجربة مألوفة.',
    facilityEyebrow: 'وراء اللؤلؤة',
    facilityTitle: 'العبوة بسيطة. الشغل اللي وراها مو بسيط.',
    facilityBody: 'الإنتاج، متابعة الجودة والعناية بالتفاصيل هي اللي تخلي تجربة اللؤلؤة ثابتة من حجم للثاني، ومن المعمل إلى الشخص اللي يختارها.',
    cards: ['الإنتاج والتعبئة', 'النظافة والانضباط', 'صناعة من بغداد'],
    iraqCaption: 'عراقية بهويتها. قريبة من تفاصيل يومنا.',
    missionEyebrow: 'مهمتنا',
    missionTitle: 'نخلي الماء النظيف والمنعش خيار سهل لكل يوم.',
    missionBody: 'اللؤلؤة تجمع هوية عراقية مألوفة ويا أحجام عملية للبيت، الدوام، الطريق، الاجتماعات والضيافة.',
    essence: ['النقاء', 'الثقة', 'الانتعاش', 'الإرث العراقي'],
    valuesEyebrow: 'شنو يهمنا',
    valuesTitle: 'قيم بسيطة، المفروض تحسها بكل تجربة ويا اللؤلؤة.',
    valuesBody: 'ماء نظيف، جودة تقدر تعتمد عليها، أحجام عملية وهوية عراقية واثقة بدون مبالغة.',
    values: [
      ['النقاء', 'الماء النظيف والمنعش يبقى أساس كل قرار نسويه.'],
      ['الاعتمادية', 'تجربة اللؤلؤة لازم تبقى مألوفة وثابتة كل مرة.'],
      ['العناية', 'من الإنتاج إلى طريقة عرض المنتج، التفاصيل الصغيرة تفرق.'],
      ['الهوية العراقية', 'تُنتج في بغداد بهوية تحسها قريبة ومكانها هنا.'],
    ],
  },
  ku: {
    heroEyebrow: 'چیرۆکی ئێمە',
    heroTitle: 'ناوێکی عێراقی بۆ ژیانی ڕۆژانە.',
    heroBody: 'Pearl ئاوی پاککراوەیە کە لە بەغدا بەرهەم دەهێنرێت بۆ ساتە ڕۆژانەکان؛ ماڵ، کار، کۆبوونەوە، ڕێگا و مێزی خێزان.',
    brandEyebrow: 'Pearl · بەغدا',
    brandTitle: 'ناوێکی ئاشنا، بە پێشکەشکردنێکی نزیکتر بە ئەمڕۆ.',
    brandBody: 'Pearl لە ساتەکانی ژیانی ڕۆژانەدا هەیە؛ مێزی خێزان، کار، کۆبوونەوە و میوانداری. ناسنامەیەکی عێراقیی ڕوون و چوار قەبارەی پراکتیکی.',
    facilityEyebrow: 'لە پشت Pearl',
    facilityTitle: 'پاکەتەکە سادەیە، بەڵام کارەکەی پشتەوە سادە نییە.',
    facilityBody: 'بەرهەمهێنان، چاودێری کوالێتی و وردبینی ئەو شتانەن کە ئەزموونی Pearl یەکسان دەهێڵنەوە.',
    cards: ['بەرهەمهێنان و پڕکردنەوە', 'پاکوخاوێنی و ڕێکخستن', 'بەرهەمی بەغدا'],
    iraqCaption: 'عێراقی بە ناسنامە. نزیک لە ژیانی ڕۆژانە.',
    missionEyebrow: 'ئەرکی ئێمە',
    missionTitle: 'ئاوی پاک و تازە ببێتە هەڵبژاردەیەکی ئاسان بۆ هەر ڕۆژێک.',
    missionBody: 'Pearl ناسنامەیەکی عێراقیی ئاشنا لەگەڵ قەبارەی پراکتیکی بۆ ماڵ و کار و میوانداری کۆدەکاتەوە.',
    essence: ['پاکی', 'متمانە', 'تازەیی', 'میراتی عێراقی'],
    valuesEyebrow: 'ئەو شتانەی گرنگن',
    valuesTitle: 'بەها سادەکان کە دەبێت لە هەر ئەزموونی Pearl ـدا هەستیان پێ بکەیت.',
    valuesBody: 'ئاوی پاک، کوالێتیی جێی متمانە، قەبارەی پراکتیکی و ناسنامەیەکی عێراقیی واثق.',
    values: [
      ['پاکی', 'ئاوی پاک و تازە لە ناوەندی هەر هەڵبژاردەیەکماندایە.'],
      ['جێگیری', 'ئەزموونی Pearl دەبێت هەموو جارێک ئاشنا و جێی متمانە بێت.'],
      ['وردبینی', 'لە بەرهەمهێنان تا پێشکەشکردن، وردەکارییەکان گرنگن.'],
      ['ناسنامەی عێراقی', 'لە بەغدا بەرهەم دەهێنرێت و ناسنامەکەی شوێنی خۆی هەیە.'],
    ],
  },
} as const;

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const p = pageCopy[locale];
  const missionIcons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const galleryIcons = [Factory, ShieldCheck, Gauge];
  const gallery = [media.about.factory, media.quality.hygiene, media.about.operations];

  return <>
    <PageHero locale={locale} eyebrow={p.heroEyebrow} title={p.heroTitle} intro={p.heroBody}/>

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
        <div className="section-head centered" data-reveal><span className="eyebrow">{p.valuesEyebrow}</span><h2>{p.valuesTitle}</h2><p>{p.valuesBody}</p></div>
        <div className="value-grid">{p.values.map((value, index) => <article key={value[0]} data-reveal><span>0{index + 1}</span><h3>{value[0]}</h3><p>{value[1]}</p></article>)}</div>
      </div>
    </section>

    <section className="section"><div className="site-shell simple-cta" data-reveal><h2>{locale === 'ar' ? 'شوف أحجام اللؤلؤة واختار اللي يناسب يومك.' : locale === 'en' ? 'Explore the Pearl format that fits your day.' : 'قەبارەی Pearl ـی گونجاو بۆ ڕۆژەکەت ببینە.'}</h2><Link href={localizedPath(locale, 'products')} className="btn btn-primary">{c.common.viewProducts}</Link></div></section>
  </>;
}
