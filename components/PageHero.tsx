import { BrandLogo } from './BrandLogo';
import type { Locale } from '@/lib/site';

export function PageHero({ locale, eyebrow, title, intro }: { locale: Locale; eyebrow: string; title: string; intro: string }) {
  return <section className="page-hero" data-page-enter>
    <div className="page-hero-orb orb-one"/><div className="page-hero-orb orb-two"/>
    <div className="site-shell page-hero-grid">
      <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div>
      <div className="page-hero-mark" data-parallax="-10"><BrandLogo locale={locale}/></div>
    </div>
  </section>;
}
