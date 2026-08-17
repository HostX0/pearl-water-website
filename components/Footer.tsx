import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, site, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['about', 'products', 'quality', 'contact'];

const footerCopy = {
  en: {
    privacy: 'Privacy', terms: 'Terms', rights: 'All rights reserved.',
    nav: 'Explore', navLabel: 'Footer navigation', sales: 'Sales', salesAll: 'All sales numbers', service: 'Customer service', location: 'Baghdad, Iraq',
  },
  ar: {
    privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', rights: 'جميع الحقوق محفوظة.',
    nav: 'اكتشف', navLabel: 'روابط التذييل', sales: 'المبيعات', salesAll: 'كل أرقام المبيعات', service: 'خدمة العملاء', location: 'بغداد، العراق',
  },
  ku: {
    privacy: 'تایبەتمەندی', terms: 'مەرجەکانی بەکارهێنان', rights: 'هەموو مافەکان پارێزراون.',
    nav: 'ببینە', navLabel: 'بەستەرەکانی کۆتایی', sales: 'فرۆشتن', salesAll: 'هەموو ژمارەکانی فرۆشتن', service: 'خزمەتگوزاری کڕیار', location: 'بەغدا، عێراق',
  },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const f = footerCopy[locale];
  const company = locale === 'ar' ? site.companyArabic : locale === 'ku' ? 'Bright Pearl for Purifying and Bottling Water · Iraq' : site.company;

  return <footer className="site-footer">
    <div className="site-shell footer-grid footer-grid-refined">
      <div className="footer-brand">
        <BrandLogo locale={locale} inverted/>
        <p>{c.brandLine}</p>
        <span>{c.common.madeInIraq}</span>
      </div>

      <nav className="footer-nav" aria-label={f.navLabel}>
        <strong>{f.nav}</strong>
        {pages.map((page) => <Link key={page} href={localizedPath(locale, page)}>{c.nav[page]}</Link>)}
      </nav>

      <div className="footer-contact footer-contact-refined">
        <div className="footer-contact-group">
          <strong>{f.sales}</strong>
          <Link className="footer-sales-link" href={`${localizedPath(locale, 'contact')}#sales`}>
            <Phone size={14} aria-hidden="true"/>{f.salesAll}
          </Link>
        </div>
        <div className="footer-contact-group">
          <strong>{f.service}</strong>
          <a className="footer-service-link" href={`tel:${site.customerService.phone}`} dir="ltr">
            <Phone size={14} aria-hidden="true"/>{site.customerService.display}
          </a>
        </div>
        <a className="footer-map-link" href={site.map} target="_blank" rel="noreferrer">
          <MapPin size={14} aria-hidden="true"/>{f.location}
        </a>
      </div>
    </div>

    <div className="site-shell footer-bottom">
      <span>© {new Date().getFullYear()} Pearl Water · {f.rights}</span>
      <div className="footer-legal"><Link href={`/${locale}/privacy`}>{f.privacy}</Link><Link href={`/${locale}/terms`}>{f.terms}</Link></div>
      <span>{company}</span>
    </div>
  </footer>;
}
