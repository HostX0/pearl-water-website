import Link from 'next/link';
import { ArrowLeft, ArrowRight, Package, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { media } from '@/lib/media';
import { isLocale, localizedPath, localizedProductPath, productImages, productSizes, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'products') : {};
}

const productExtra = {
  en: { range: 'The Pearl range', rangeBody: 'Four confirmed current formats, presented with a cleaner visual system and clear everyday use cases.', packaging: 'Product, packaging and everyday context', packagingBody: 'A complete product story goes beyond a packshot. Packaging, detail and real-life use help the range feel tangible and commercial.', carton: 'Packaging', use: 'Everyday use' },
  ar: { range: 'مجموعة اللؤلؤة', rangeBody: 'أربعة أحجام حالية مؤكدة، نقدمها بصورة أوضح وأنظف مع استخدام يومي مفهوم لكل حجم.', packaging: 'المنتج، التغليف، والاستخدام الحقيقي', packagingBody: 'قصة المنتج ما تكتمل بصورة قنينة وحدها. التغليف، التفاصيل وسياق الاستخدام يخلي المجموعة أوضح وأقرب للسوق.', carton: 'التغليف', use: 'الاستخدام اليومي' },
  ku: { range: 'کۆمەڵەی Pearl', rangeBody: 'چوار قەبارەی ئێستای پشتڕاستکراو بە سیستەمێکی بینراوی پاکتر و بەکارهێنانی ڕوون.', packaging: 'بەرهەم، پاکەت و بەکارهێنان', packagingBody: 'چیرۆکی بەرهەم تەنها بە وێنەی بوتڵ تەواو نابێت؛ پاکەت و بەکارهێنانی ڕاستەقینە گرنگن.', carton: 'پاکەت', use: 'بەکارهێنانی ڕۆژانە' },
} as const;

export default async function Products({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const x = productExtra[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const directoryLabel = locale === 'en' ? 'View all contact lines' : locale === 'ar' ? 'عرض جميع أرقام التواصل' : 'هەموو هێڵەکانی پەیوەندی';

  return <>
    <PageHero locale={locale} eyebrow={c.products.eyebrow} title={c.products.title} intro={c.products.intro}/>

    <section className="section products-range-visual"><div className="site-shell products-range-card" data-reveal><div><span className="eyebrow">Pearl</span><h2>{x.range}</h2><p>{x.rangeBody}</p></div><img src={media.products.group} alt={x.range} loading="eager" decoding="async" referrerPolicy="no-referrer"/></div></section>

    <section className="section products-page">
      <div className="site-shell product-grid">
        {productSizes.map((key, i) => {
          const p = c.products.items[key];
          return <Link className="product-card product-card-link" href={localizedProductPath(locale, key)} key={key} data-reveal>
            <div className="product-card-top"><span>0{i + 1}</span><small>{p.use}</small></div>
            <div className="product-card-image"><div className="product-halo"/><img src={productImages[key]} alt={`Pearl ${p.size}`} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
            <div className="product-card-copy"><h2>{p.size}</h2><h3>{p.name}</h3><p>{p.body}</p><span className="product-card-cta">{c.common.learnMore}<Arrow size={16}/></span></div>
          </Link>;
        })}
      </div>
    </section>

    <section className="section product-editorial-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl in context</span><h2>{x.packaging}</h2></div><p>{x.packagingBody}</p></div>
        <div className="product-editorial-grid">
          <figure data-reveal><img src={media.products.carton} alt={x.carton} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Package size={18}/>{x.carton}</figcaption></figure>
          <figure data-reveal><img src={media.products.use} alt={x.use} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption><Sparkles size={18}/>{x.use}</figcaption></figure>
        </div>
      </div>
    </section>

    <section className="product-contact"><div className="site-shell simple-cta light" data-reveal><h2>{c.contact.sales}</h2><Link href={localizedPath(locale,'contact')} className="btn btn-white">{directoryLabel}<Arrow size={17}/></Link></div></section>
  </>;
}
