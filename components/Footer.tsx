import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, site, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['about', 'products', 'quality', 'contact'];

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const company = locale === 'ar' ? site.companyArabic : locale === 'ku' ? 'Bright Pearl for Purifying and Bottling Water · Iraq' : site.company;

  return <footer className="site-footer">
    <div className="site-shell footer-grid">
      <div className="footer-brand"><BrandLogo locale={locale} inverted /><p>{c.brandLine}</p><span>{c.common.madeInIraq}</span></div>
      <nav aria-label="Footer navigation">{pages.map((page) => <Link key={page} href={localizedPath(locale, page)}>{c.nav[page]}</Link>)}</nav>
      <div className="footer-contact"><a href={`tel:${site.phone}`} dir="ltr">{site.phoneDisplay}</a><a href={site.map} target="_blank" rel="noreferrer">{site.city}</a></div>
    </div>
    <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Pearl Water</span><span>{company}</span></div>
  </footer>;
}
