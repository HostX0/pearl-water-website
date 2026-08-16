import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Droplets, Sparkles, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getContent } from '@/lib/content';
import {
  isLocale,
  localizedPath,
  localizedProductPath,
  productImages,
  productSizes,
  productSlugs,
  site,
  slugToProduct,
  type Locale,
  type ProductSize,
} from '@/lib/site';
import { productMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return productSizes.map((size) => ({ size: productSlugs[size] }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; size: string }> }) {
  const { locale, size: slug } = await params;
  const size = slugToProduct[slug];
  if (!isLocale(locale) || !size) return {};
  return productMetadata(locale, size);
}

const ui = {
  en: {
    back: 'All products', overview: 'Made for this moment', format: 'Format', category: 'What it is', categoryValue: 'Pearl purified water',
    ideal: 'Best for', why: 'The Pearl experience', points: ['Clean, refreshing purified water', 'A practical format for its intended moment', 'The familiar Pearl identity in every size'],
    cta: 'Ask about this format', other: 'Find the other Pearl format that fits your day', made: 'Proudly Iraqi',
    detailEyebrow: 'Pearl format', detailBody: 'One familiar Pearl experience, shaped around a different part of the day.',
  },
  ar: {
    back: 'كل المنتجات', overview: 'معمول لهاللحظة', format: 'الحجم', category: 'المنتج', categoryValue: 'مياه اللؤلؤة المنقاة',
    ideal: 'أنسب استخدام', why: 'تجربة اللؤلؤة', points: ['مياه منقاة بطعم منعش وواضح', 'حجم عملي للموقف اللي معمول إله', 'نفس هوية اللؤلؤة المألوفة بكل حجم'],
    cta: 'استفسر عن هذا الحجم', other: 'شوف باقي أحجام اللؤلؤة واختار الأنسب ليومك', made: 'بكل فخر عراقية',
    detailEyebrow: 'أحجام اللؤلؤة', detailBody: 'نفس تجربة اللؤلؤة المألوفة، بحجم معمول لجزء مختلف من يومك.',
  },
  ku: {
    back: 'هەموو بەرهەمەکان', overview: 'بۆ ئەم ساتە دروستکراوە', format: 'قەبارە', category: 'بەرهەم', categoryValue: 'ئاوی پاککراوی Pearl',
    ideal: 'گونجاوترین بەکارهێنان', why: 'ئەزموونی Pearl', points: ['ئاوی پاککراو و تازە', 'قەبارەیەکی پراکتیکی بۆ ساتەکەی خۆی', 'هەمان ناسنامەی ئاشنای Pearl لە هەر قەبارەیەکدا'],
    cta: 'پرسیار لەسەر ئەم قەبارەیە', other: 'قەبارەکانی تری Pearl بۆ ڕۆژەکەت ببینە', made: 'بە شانازییەوە عێراقی',
    detailEyebrow: 'قەبارەکانی Pearl', detailBody: 'هەمان ئەزموونی ئاشنای Pearl، بە قەبارەیەک بۆ بەشێکی جیاواز لە ڕۆژەکەت.',
  },
} as const;

export default async function ProductDetail({ params }: { params: Promise<{ locale: string; size: string }> }) {
  const { locale: rawLocale, size: slug } = await params;
  const size = slugToProduct[slug];
  if (!isLocale(rawLocale) || !size) notFound();

  const locale = rawLocale as Locale;
  const c = getContent(locale);
  const item = c.products.items[size as ProductSize];
  const copy = ui[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const related = productSizes.filter((candidate) => candidate !== size);
  const reasons = [Droplets, Sparkles, ShieldCheck];

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Pearl Purified Water ${size} ml`,
    image: productImages[size],
    description: item.body,
    category: 'Purified Bottled Water',
    brand: { '@type': 'Brand', name: 'Pearl' },
    manufacturer: { '@id': `${site.baseUrl}/#organization` },
    url: `${site.baseUrl}${localizedProductPath(locale, size)}`,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

    <section className="product-detail-hero" data-page-enter>
      <div className="product-detail-water" aria-hidden="true"><i/><i/><i/></div>
      <div className="site-shell">
        <div className="breadcrumbs">
          <Link href={localizedPath(locale, 'home')}>{c.nav.home}</Link><span>/</span>
          <Link href={localizedPath(locale, 'products')}>{c.nav.products}</Link><span>/</span>
          <b>{item.size}</b>
        </div>
        <div className="product-detail-grid">
          <div className="product-detail-copy">
            <Link className="back-link" href={localizedPath(locale, 'products')}><Arrow size={16}/>{copy.back}</Link>
            <span className="eyebrow">Pearl · {copy.made}</span>
            <h1>{item.size}</h1>
            <h2>{item.name}</h2>
            <p>{item.body}</p>
            <div className="product-detail-actions">
              <Link className="btn btn-primary" href={localizedPath(locale,'contact')}><Phone size={17}/>{copy.cta}</Link>
              <Link className="btn btn-secondary" href={localizedPath(locale,'products')}>{copy.back}</Link>
            </div>
          </div>
          <div className={`product-detail-visual product-detail-${size}`} data-parallax="8">
            <div className="product-detail-pearl"/>
            <div className="product-detail-halo"/>
            <div className="product-detail-image-shell"><img src={productImages[size]} alt={`Pearl purified water ${item.size}`} loading="eager" decoding="async" referrerPolicy="no-referrer"/></div>
            <span className="product-detail-size">{item.size}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section product-overview-section">
      <div className="site-shell product-overview-grid">
        <div data-reveal><span className="eyebrow">{copy.overview}</span><h2>{item.name}</h2><p className="lead">{item.body}</p><p className="product-overview-support">{copy.detailBody}</p></div>
        <div className="product-facts" data-reveal>
          <div><span>{copy.format}</span><strong>{item.size}</strong></div>
          <div><span>{copy.category}</span><strong>{copy.categoryValue}</strong></div>
          <div><span>{copy.ideal}</span><strong>{item.use}</strong></div>
        </div>
      </div>
    </section>

    <section className="section section-ice">
      <div className="site-shell product-why-grid">
        <div data-reveal><span className="eyebrow">{copy.detailEyebrow}</span><h2>{copy.why}</h2></div>
        <div className="product-checks">{copy.points.map((point, index) => { const Icon = reasons[index]; return <div key={point} data-reveal><span className="product-check-icon"><Icon size={20}/></span><span>{point}</span></div>; })}</div>
      </div>
    </section>

    <section className="section related-products">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl Range</span><h2>{copy.other}</h2></div><Link className="text-link" href={localizedPath(locale, 'products')}>{copy.back}<Arrow size={17}/></Link></div>
        <div className="related-product-grid">
          {related.map((relatedSize) => {
            const product = c.products.items[relatedSize];
            return <Link className={`related-product-card related-product-${relatedSize}`} href={localizedProductPath(locale, relatedSize)} key={relatedSize} data-reveal>
              <div><span>{product.use}</span><h3>{product.size}</h3><p>{product.name}</p></div>
              <div className="related-product-image-shell"><img src={productImages[relatedSize]} alt={`Pearl ${product.size}`} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
            </Link>;
          })}
        </div>
      </div>
    </section>
  </>;
}
