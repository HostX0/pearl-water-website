import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { QualityExperience } from '@/components/QualityExperience';
import { getBrandCopy } from '@/lib/brand-copy';
import { mediaSources } from '@/lib/media';
import { isLocale, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'quality') : {};
}

export default async function Quality({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const p = getBrandCopy(locale).quality;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <PageHero locale={locale} eyebrow={p.heroEyebrow} title={p.heroTitle} intro={p.heroIntro} visualSrc={mediaSources.pageHeroes.quality} visualAlt={p.heroTitle}/>

    <QualityExperience locale={locale}/>

    <section className="section faq-section premium-faq">
      <div className="site-shell">
        <div className="section-head split" data-reveal>
          <div><span className="eyebrow">FAQ</span><h2>{p.faqTitle}</h2></div>
          <p>{p.faqIntro}</p>
        </div>
        <div className="faq-grid">
          {p.faq.map((item, index) => <article className="faq-item" key={item.question} data-reveal>
            <span>0{index + 1}</span><h3>{item.question}</h3><p>{item.answer}</p>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}
