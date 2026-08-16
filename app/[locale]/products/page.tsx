import Link from 'next/link';
import { ArrowLeft, ArrowRight, Package, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { getContent } from '@/lib/content';
import { media } from '@/lib/media';
import { isLocale, localizedPath, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'products') : {};
}

const productExtra = {
  en: {
    range: 'Meet the full Pearl range.',
    rangeBody: 'Four practical formats, one familiar Pearl identity — ready for family tables, workdays, meetings and hospitality.',
    packaging: 'Made to fit real everyday moments.',
    packagingBody: 'Pearl is not one bottle used everywhere. Each format has a clear role, from the family table to individual service and events.',
    carton: 'Ready for market',
    use: 'Made for everyday use',
  },
  ar: {
    range: 'تعرّف على مجموعة اللؤلؤة كاملة.',
    rangeBody: 'أربعة أحجام عملية بهوية لؤلؤة واحدة — للبيت، العمل، الاجتماعات والضيافة.',
    packaging: 'كل حجم معمول لموقف حقيقي من يومك.',
    packagingBody: 'اللؤلؤة مو عبوة واحدة لكل شيء. كل حجم إله استخدام واضح، من مائدة العائلة إلى الخدمة الفردية والمناسبات.',
    carton: 'جاهزة للسوق',
    use: 'مصممة للاستخدام اليومي',
  },
  ku: {
    range: 'کۆمەڵەی تەواوی Pearl بناسە.',
    rangeBody: 'چوار قەبارەی پراکتیکی بە یەک ناسنامەی Pearl، بۆ ماڵ و کار و کۆبوونەوە و میوانداری.',
    packaging: 'هەر قەبارەیەک بۆ ساتێکی ڕاستەقینەی ڕۆژ دروستکراوە.',
    packagingBody: 'Pearl تەنها یەک بوتڵ نییە؛ هەر قەبارەیەک بەکارهێنانی خۆی هەیە، لە مێزی خێزان تا میوانداری و بۆنەکان.',
    carton: 'ئامادەی بازاڕ',
    use: 'بۆ بەکارهێنانی ڕۆژانە',
  },
} as const;

export default async function Products({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const x = productExtra[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const directoryLabel = locale === 'en' ? 'Talk to sales' : locale === 'ar' ? 'تواصل مع المبيعات' : 'پەیوەندی بە فرۆشتنەوە بکە';

  return <>
    <PageHero locale={locale} eyebrow={c.products.eyebrow} title={c.products.title} intro={c.products.intro}/>

    <section className="section products-range-visual">
      <div className="site-shell products-range-card" data-reveal>
        <div><span className="eyebrow">Pearl</span><h2>{x.range}</h2><p>{x.rangeBody}</p></div>
        <img src={media.products.group} alt={x.range} loading="eager" decoding="async" referrerPolicy="no-referrer"/>
      </div>
    </section>

    <ProductShowcase locale={locale}/>

    <section className="section product-editorial-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl</span><h2>{x.packaging}</h2></div><p>{x.packagingBody}</p></div>
        <div className="product-editorial-grid">
          <figure data-reveal><img src={media.products.carton} alt={x.carton} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Package size={18}/>{x.carton}</figcaption></figure>
          <figure data-reveal><img src={media.products.use} alt={x.use} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Sparkles size={18}/>{x.use}</figcaption></figure>
        </div>
      </div>
    </section>

    <section className="product-contact"><div className="site-shell simple-cta light" data-reveal><h2>{c.contact.sales}</h2><Link href={localizedPath(locale,'contact')} className="btn btn-white">{directoryLabel}<Arrow size={17}/></Link></div></section>
  </>;
}
