import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
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
    back: 'All products', overview: 'Product overview', format: 'Format', category: 'Category', categoryValue: 'Purified bottled water',
    ideal: 'Ideal for', why: 'Why Pearl', points: ['Practical everyday format', 'Consistent Pearl brand experience', 'Clear, familiar presentation'],
    cta: 'Ask about this format', other: 'Explore other Pearl formats', made: 'Proudly Iraqi',
  },
  ar: {
    back: 'كل المنتجات', overview: 'نظرة على المنتج', format: 'الحجم', category: 'الفئة', categoryValue: 'مياه شرب معبأة ومنقاة',
    ideal: 'مناسب لـ', why: 'لماذا اللؤلؤة', points: ['حجم عملي للاستخدام اليومي', 'تجربة ثابتة لهوية اللؤلؤة', 'تقديم واضح ومألوف للمنتج'],
    cta: 'استفسر عن هذا الحجم', other: 'اكتشف أحجام اللؤلؤة الأخرى', made: 'بكل فخر عراقية',
  },
  ku: {
    back: 'هەموو بەرهەمەکان', overview: 'پوختەی بەرهەم', format: 'قەبارە', category: 'جۆر', categoryValue: 'ئاوی خواردنەوەی پاککراو و پێچراو',
    ideal: 'گونجاوە بۆ', why: 'بۆچی Pearl', points: ['قەبارەیەکی پراکتیکی بۆ ڕۆژانە', 'ئەزموونێکی یەکگرتووی براندی Pearl', 'پێشکەشکردنێکی پاک و ئاشنا'],
    cta: 'پرسیار لەسەر ئەم قەبارەیە', other: 'قەبارەکانی تری Pearl ببینە', made: 'بە شانازییەوە عێراقی',
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
              <a className="btn btn-primary" href={`tel:${site.phone}`}><Phone size={17}/>{copy.cta}</a>
              <a className="btn btn-secondary" href={site.map} target="_blank" rel="noreferrer">{c.common.directions}</a>
            </div>
          </div>
          <div className="product-detail-visual" data-parallax="8">
            <div className="product-detail-pearl"/>
            <div className="product-detail-halo"/>
            <img src={productImages[size]} alt={`Pearl purified water ${item.size}`} />
            <span className="product-detail-size">{item.size}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section product-overview-section">
      <div className="site-shell product-overview-grid">
        <div data-reveal><span className="eyebrow">{copy.overview}</span><h2>{item.name}</h2><p className="lead">{item.body}</p></div>
        <div className="product-facts" data-reveal>
          <div><span>{copy.format}</span><strong>{item.size}</strong></div>
          <div><span>{copy.category}</span><strong>{copy.categoryValue}</strong></div>
          <div><span>{copy.ideal}</span><strong>{item.use}</strong></div>
        </div>
      </div>
    </section>

    <section className="section section-ice">
      <div className="site-shell product-why-grid">
        <div data-reveal><span className="eyebrow">Pearl</span><h2>{copy.why}</h2></div>
        <div className="product-checks">{copy.points.map((point) => <div key={point} data-reveal><CheckCircle2/><span>{point}</span></div>)}</div>
      </div>
    </section>

    <section className="section related-products">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl Range</span><h2>{copy.other}</h2></div><Link className="text-link" href={localizedPath(locale, 'products')}>{copy.back}<Arrow size={17}/></Link></div>
        <div className="related-product-grid">
          {related.map((relatedSize) => {
            const product = c.products.items[relatedSize];
            return <Link className="related-product-card" href={localizedProductPath(locale, relatedSize)} key={relatedSize} data-reveal>
              <div><span>{product.use}</span><h3>{product.size}</h3><p>{product.name}</p></div>
              <img src={productImages[relatedSize]} alt={`Pearl ${product.size}`} />
            </Link>;
          })}
        </div>
      </div>
    </section>
  </>;
}
