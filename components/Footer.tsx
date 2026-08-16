import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, site, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['about', 'products', 'quality', 'contact'];

const footerCopy = {
  en: {
    privacy: 'Privacy', terms: 'Terms', rights: 'All rights reserved.',
    title: 'Pearl, made for everyday life in Iraq.', body: 'Purified water in four practical formats for home, work, hospitality and events.',
    nav: 'Explore', sales: 'Sales', service: 'Customer service', location: 'Baghdad, Iraq', cta: 'Contact Pearl',
  },
  ar: {
    privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', rights: 'جميع الحقوق محفوظة.',
    title: 'اللؤلؤة، جزء من تفاصيل يومنا.', body: 'مياه منقاة بأربعة أحجام عملية للبيت، العمل، الضيافة والمناسبات.',
    nav: 'اكتشف', sales: 'المبيعات', service: 'خدمة العملاء', location: 'بغداد، العراق', cta: 'تواصل مع اللؤلؤة',
  },
  ku: {
    privacy: 'تایبەتمەندی', terms: 'مەرجەکانی بەکارهێنان', rights: 'هەموو مافەکان پارێزراون.',
    title: 'Pearl، بەشێک لە ژیانی ڕۆژانەی عێراق.', body: 'ئاوی پاککراو بە چوار قەبارەی پراکتیکی بۆ ماڵ و کار و میوانداری.',
    nav: 'ببینە', sales: 'فرۆشتن', service: 'خزمەتگوزاری کڕیار', location: 'بەغدا، عێراق', cta: 'پەیوەندی بە Pearl بکە',
  },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const f = footerCopy[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;
  const company = locale === 'ar' ? site.companyArabic : locale === 'ku' ? 'Bright Pearl for Purifying and Bottling Water · Iraq' : site.company;

  return <footer className="site-footer">
    <div className="site-shell footer-callout">
      <div><span className="eyebrow eyebrow-light">Pearl · Iraq</span><h2>{f.title}</h2><p>{f.body}</p></div>
      <Link href={localizedPath(locale, 'contact')} className="footer-cta">{f.cta}<Arrow size={18}/></Link>
    </div>

    <div className="site-shell footer-grid footer-grid-refined">
      <div className="footer-brand"><BrandLogo locale={locale} inverted/><p>{c.brandLine}</p><span>{c.common.madeInIraq}</span></div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <strong>{f.nav}</strong>
        {pages.map((page) => <Link key={page} href={localizedPath(locale, page)}>{c.nav[page]}</Link>)}
      </nav>

      <div className="footer-contact footer-contact-refined">
        <strong>{f.sales}</strong>
        <div className="footer-phone-grid">{site.salesPhones.map((line) => <a key={line.phone} href={`tel:${line.phone}`} dir="ltr"><Phone size={14}/>{line.display}</a>)}</div>
        <strong>{f.service}</strong>
        <a className="footer-service-link" href={`tel:${site.customerService.phone}`} dir="ltr"><Phone size={14}/>{site.customerService.display}</a>
        <a className="footer-map-link" href={site.map} target="_blank" rel="noreferrer"><MapPin size={14}/>{f.location}</a>
      </div>
    </div>

    <div className="site-shell footer-bottom">
      <span>© {new Date().getFullYear()} Pearl Water · {f.rights}</span>
      <div className="footer-legal"><Link href={`/${locale}/privacy`}>{f.privacy}</Link><Link href={`/${locale}/terms`}>{f.terms}</Link></div>
      <span>{company}</span>
    </div>
  </footer>;
}
