import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { isLocale, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'quality') : {};
}

const labels = {
  en: { trust: 'Trust', faq: 'Frequently asked questions', faqIntro: 'Clear answers about Pearl, its product range and quality information.' },
  ar: { trust: 'الثقة', faq: 'أسئلة شائعة', faqIntro: 'إجابات واضحة عن اللؤلؤة، أحجام المنتجات، ومعلومات الجودة.' },
  ku: { trust: 'متمانە', faq: 'پرسیارە باوەکان', faqIntro: 'وەڵامی ڕوون دەربارەی Pearl، قەبارەکان و زانیاریی کوالێتی.' },
} as const;

export default async function Quality({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.quality.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <PageHero locale={locale} eyebrow={c.quality.eyebrow} title={c.quality.title} intro={c.quality.intro}/>

    <section className="section">
      <div className="site-shell quality-page-grid">
        {c.quality.steps.map((step, index) => <article key={step.no} data-reveal>
          <span className="quality-line" data-reveal-line/>
          <b>{step.no}</b>
          <div className="quality-drop">{index + 1}</div>
          <h2>{step.title}</h2>
          <p>{step.body}</p>
        </article>)}
      </div>
    </section>

    <section className="section section-navy">
      <div className="site-shell editorial-grid light">
        <div data-reveal><span className="eyebrow eyebrow-light">{labels[locale].trust}</span><h2>{c.quality.closingTitle}</h2></div>
        <p className="lead" data-reveal>{c.quality.closingBody}</p>
      </div>
    </section>

    <section className="section faq-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal>
          <div><span className="eyebrow">FAQ</span><h2>{labels[locale].faq}</h2></div>
          <p>{labels[locale].faqIntro}</p>
        </div>
        <div className="faq-grid">
          {c.quality.faq.map((item, index) => <article className="faq-item" key={item.question} data-reveal>
            <span>0{index + 1}</span><h3>{item.question}</h3><p>{item.answer}</p>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}
