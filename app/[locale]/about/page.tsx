import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
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

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);

  return <>
    <PageHero locale={locale} eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro}/>

    <section className="section">
      <div className="site-shell editorial-grid">
        <div data-reveal><span className="eyebrow">Pearl · Iraq</span><h2>{c.about.heritageTitle}</h2></div>
        <div data-reveal>
          <p className="lead">{c.about.heritageBody}</p>
          <div className="brand-rule">{principles[locale].map((item, index) => <span key={item}>{item}{index < 2 && <i/>}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="section section-ice">
      <div className="site-shell">
        <div className="section-head centered" data-reveal>
          <span className="eyebrow">{valuesLabel[locale]}</span>
          <h2>{c.about.promiseTitle}</h2>
          <p>{c.about.promiseBody}</p>
        </div>
        <div className="value-grid">
          {c.about.values.map((value, index) => <article key={value.title} data-reveal><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="site-shell simple-cta" data-reveal>
        <h2>{c.home.productsTitle}</h2>
        <Link href={localizedPath(locale, 'products')} className="btn btn-primary">{c.common.viewProducts}</Link>
      </div>
    </section>
  </>;
}
