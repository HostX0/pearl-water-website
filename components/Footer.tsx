import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, site, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['about', 'products', 'quality', 'contact'];

const legal = {
  en: { privacy: 'Privacy', terms: 'Terms', rights: 'All rights reserved.' },
  ar: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', rights: 'جميع الحقوق محفوظة.' },
  ku: { privacy: 'تایبەتمەندی', terms: 'مەرجەکانی بەکارهێنان', rights: 'هەموو مافەکان پارێزراون.' },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const l = legal[locale];
  const company = locale === 'ar' ? site.companyArabic : locale === 'ku' ? 'Bright Pearl for Purifying and Bottling Water · Iraq' : site.company;
  const salesLabel = locale === 'en' ? 'Sales' : locale === 'ar' ? 'المبيعات' : 'فرۆشتن';
  const serviceLabel = locale === 'en' ? 'Customer service' : locale === 'ar' ? 'خدمة العملاء' : 'خزمەتگوزاری کڕیار';

  return <footer className="site-footer">
    <div className="site-shell footer-grid">
      <div className="footer-brand"><BrandLogo locale={locale} inverted/><p>{c.brandLine}</p><span>{c.common.madeInIraq}</span></div>
      <nav aria-label="Footer navigation">{pages.map((page) => <Link key={page} href={localizedPath(locale, page)}>{c.nav[page]}</Link>)}</nav>
      <div className="footer-contact"><span className="footer-contact-label">{salesLabel}</span><div className="footer-phone-grid">{site.salesPhones.map((line) => <a key={line.phone} href={`tel:${line.phone}`} dir="ltr">{line.display}</a>)}</div><span className="footer-contact-label">{serviceLabel}</span><a href={`tel:${site.customerService.phone}`} dir="ltr">{site.customerService.display}</a><a className="footer-map-link" href={site.map} target="_blank" rel="noreferrer">{site.city}</a></div>
    </div>
    <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Pearl Water · {l.rights}</span><div className="footer-legal"><Link href={`/${locale}/privacy`}>{l.privacy}</Link><Link href={`/${locale}/terms`}>{l.terms}</Link></div><span>{company}</span></div>
  </footer>;
}
