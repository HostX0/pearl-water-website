import Link from 'next/link';
import { ArrowLeft, ArrowRight, Droplets, ShieldCheck, Sparkles, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, localizedProductPath, productImages, productSizes, site, type Locale } from '@/lib/site';

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const icons = [Droplets, ShieldCheck, Sparkles, MapPin];
  const contactDirectoryLabel = locale === 'en' ? '5 contact lines' : locale === 'ar' ? '5 أرقام للتواصل' : '5 هێڵی پەیوەندی';
  const storyLocation = locale === 'en' ? 'Baghdad · Iraq' : locale === 'ar' ? 'بغداد · العراق' : 'بەغدا · عێراق';

  return <>
    <section className="home-hero" data-page-enter>
      <div className="hero-ripples" aria-hidden="true"><i className="ripple-ring"/><i className="ripple-ring"/><i className="ripple-ring"/></div>
      <div className="hero-glow glow-a"/><div className="hero-glow glow-b"/>
      <div className="site-shell home-hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{c.home.eyebrow}</span>
          <h1>{c.home.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{c.home.body}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={localizedPath(locale, 'products')}>{c.home.primary}<Arrow size={18}/></Link>
            <Link className="btn btn-secondary" href={localizedPath(locale, 'about')}>{c.home.secondary}</Link>
          </div>
          <div className="hero-proof"><span>{c.common.madeInIraq}</span><b>•</b><span>{c.common.sizes}</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-pearl" aria-hidden="true"/>
          <img className="hero-product" src={productImages['1000']} alt="Pearl purified water 1000 ml" />
          <div className="hero-logo-card"><BrandLogo locale={locale}/></div>
          <div className="hero-size"><strong>1000</strong><span>ml</span></div>
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">Pearl</span><h2>{c.home.pillarsTitle}</h2></div><p>{c.home.pillarsBody}</p></div>
        <div className="pillar-grid">
          {c.home.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return <article className="pillar-card" key={pillar.title} data-reveal>
              <div className="icon-box"><Icon size={23}/></div><span className="card-index">0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.body}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="product-story">
      <div className="site-shell product-story-grid">
        <div className="product-story-copy" data-reveal>
          <span className="eyebrow eyebrow-light">{c.home.productsKicker}</span><h2>{c.home.productsTitle}</h2><p>{c.home.productsBody}</p>
          <Link href={localizedPath(locale, 'products')} className="text-link light">{c.common.viewProducts}<Arrow size={17}/></Link>
        </div>
        <div className="product-story-list">
          {productSizes.map((key, index) => {
            const product = c.products.items[key];
            return <Link href={localizedProductPath(locale, key)} key={key} className="story-product-card" aria-label={`${c.common.learnMore}: ${product.size}`}>
              <div className="story-product-copy"><span>0{index + 1}</span><small>{product.use}</small><h3>{product.size}</h3><p>{product.body}</p><span className="story-product-link">{c.common.learnMore}<Arrow size={15}/></span></div>
              <div className="story-product-visual"><div className="product-halo"/><img src={productImages[key]} alt={`Pearl ${product.size}`} /></div>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="section story-home">
      <div className="site-shell story-home-grid">
        <div className="story-art" data-reveal>
          <div className="iraq-word">IRAQ</div><div className="story-pearl"/><div className="story-wave"/><span>{storyLocation}</span>
        </div>
        <div data-reveal><span className="eyebrow">{c.home.storyKicker}</span><h2>{c.home.storyTitle}</h2><p className="lead">{c.home.storyBody}</p><blockquote>{c.home.storyQuote}</blockquote><Link href={localizedPath(locale, 'about')} className="text-link">{c.common.learnMore}<Arrow size={17}/></Link></div>
      </div>
    </section>

    <section className="quality-home">
      <div className="site-shell quality-home-grid">
        <div data-reveal><span className="eyebrow eyebrow-light">{c.home.qualityKicker}</span><h2>{c.home.qualityTitle}</h2><p>{c.home.qualityBody}</p><Link className="btn btn-white" href={localizedPath(locale, 'quality')}>{c.common.learnMore}<Arrow size={18}/></Link></div>
        <div className="quality-home-steps">
          {c.quality.steps.map((step) => <div key={step.no} data-reveal><span className="quality-line" data-reveal-line/><b>{step.no}</b><h3>{step.title}</h3><p>{step.body}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section contact-preview">
      <div className="site-shell contact-preview-card" data-reveal>
        <div><span className="eyebrow">Pearl · Baghdad</span><h2>{c.home.ctaTitle}</h2><p>{c.home.ctaBody}</p></div>
        <div className="contact-preview-actions">
          <Link href={localizedPath(locale,'contact')}><Phone size={20}/><span>{c.common.contact}</span><strong>{contactDirectoryLabel}</strong></Link>
          <a href={site.map} target="_blank" rel="noreferrer"><MapPin size={20}/><span>{c.common.directions}</span><strong>{site.city}</strong></a>
        </div>
      </div>
    </section>
  </>;
}
