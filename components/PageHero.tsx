import Image from 'next/image';
import { BrandLogo } from './BrandLogo';
import type { Locale } from '@/lib/site';

type PageHeroProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  visualSrc?: string;
  visualAlt?: string;
};

export function PageHero({ locale, eyebrow, title, intro, visualSrc, visualAlt }: PageHeroProps) {
  const visualStyle = visualSrc ? {
    width: 'clamp(230px, 30vw, 420px)',
    aspectRatio: '4 / 5',
    borderRadius: '28px',
    overflow: 'hidden',
    position: 'relative' as const,
    opacity: 1,
    display: 'block',
    justifySelf: 'center',
    background: '#fff',
    border: '1px solid rgba(10,78,147,.08)',
    boxShadow: '0 28px 80px rgba(7,58,112,.13)',
  } : undefined;

  return <section className="page-hero" data-page-enter>
    <div className="page-hero-orb orb-one"/><div className="page-hero-orb orb-two"/>
    <div className="site-shell page-hero-grid">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-hero-mark" data-parallax="-10" style={visualStyle}>
        {visualSrc ? <Image src={visualSrc} alt={visualAlt ?? title} fill sizes="(max-width: 820px) 230px, (max-width: 1200px) 32vw, 420px" quality={90} priority style={{ objectFit: 'cover' }}/> : <BrandLogo locale={locale}/>} 
      </div>
    </div>
  </section>;
}
