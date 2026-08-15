import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { isLocale, localizedProductPath, productImages, productSizes, site, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'products') : {};
}

export default async function Products({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;

  return <>
    <PageHero locale={locale} eyebrow={c.products.eyebrow} title={c.products.title} intro={c.products.intro}/>
    <section className="section products-page">
      <div className="site-shell product-grid">
        {productSizes.map((key, i) => {
          const p = c.products.items[key];
          return <Link className="product-card product-card-link" href={localizedProductPath(locale, key)} key={key} data-reveal>
            <div className="product-card-top"><span>0{i + 1}</span><small>{p.use}</small></div>
            <div className="product-card-image"><div className="product-halo"/><img src={productImages[key]} alt={`Pearl ${p.size}`} /></div>
            <div className="product-card-copy"><h2>{p.size}</h2><h3>{p.name}</h3><p>{p.body}</p><span className="product-card-cta">{c.common.learnMore}<Arrow size={16}/></span></div>
          </Link>;
        })}
      </div>
    </section>
    <section className="product-contact"><div className="site-shell simple-cta light" data-reveal><h2>{c.contact.sales}</h2><a href={`tel:${site.phone}`} className="btn btn-white" dir="ltr">{site.phoneDisplay}</a></div></section>
  </>;
}
