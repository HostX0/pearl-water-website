import { Building2, ExternalLink, Headphones, MapPin, Navigation, Phone, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { media } from '@/lib/media';
import { isLocale, site, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale,'contact') : {};
}

const labels = {
  en: { sales: 'Sales lines', service: 'Customer service', visit: 'Visit Pearl', company: 'Bright Pearl for Purifying and Bottling Water', directions: 'Open in Google Maps', call: 'Call this line', location: 'Baghdad, Iraq', mapNote: 'Use the official map pin for turn-by-turn directions.', businessTitle: 'Wholesale, distribution or commercial inquiry?', businessBody: 'Talk directly with Pearl’s sales team using any of the verified sales lines listed above.', businessCta: 'Call sales' },
  ar: { sales: 'خطوط المبيعات', service: 'خدمة العملاء', visit: 'زيارة اللؤلؤة', company: 'شركة بريق اللؤلؤة لتنقية وتعبئة المياه', directions: 'فتح الموقع في خرائط Google', call: 'اتصل بهذا الرقم', location: 'بغداد، العراق', mapNote: 'استخدم الموقع الرسمي على الخريطة للحصول على الاتجاهات مباشرة.', businessTitle: 'توزيع، جملة، أو تعاون تجاري؟', businessBody: 'تواصل مباشرة مع فريق مبيعات اللؤلؤة من خلال أي خط من الخطوط المعروضة أعلاه.', businessCta: 'اتصل بالمبيعات' },
  ku: { sales: 'هێڵەکانی فرۆشتن', service: 'خزمەتگوزاری کڕیار', visit: 'سەردانی Pearl', company: 'Bright Pearl for Purifying and Bottling Water', directions: 'کردنەوە لە Google Maps', call: 'پەیوەندی بکە', location: 'بەغدا، عێراق', mapNote: 'بۆ ڕێنمایی ڕاستەوخۆ شوێنی فەرمی لە نەخشە بکەرەوە.', businessTitle: 'پرسیاری بازرگانی یان دابەشکردن؟', businessBody: 'ڕاستەوخۆ پەیوەندی بە تیمی فرۆشتنی Pearl بکە.', businessCta: 'پەیوەندی بە فرۆشتن' },
} as const;

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const c = getContent(locale);
  const l = labels[locale];

  return <>
    <PageHero locale={locale} eyebrow={c.contact.eyebrow} title={c.contact.title} intro={c.contact.intro}/>

    <section className="section contact-hero-media"><div className="site-shell contact-hero-photo" data-reveal><img src={media.contact.hero} alt={l.company} loading="eager" decoding="async" referrerPolicy="no-referrer"/><div><span>Pearl · Baghdad</span><strong>{l.company}</strong></div></div></section>

    <section className="section contact-directory-section">
      <div className="site-shell contact-directory-grid">
        <div className="contact-directory-copy" data-reveal><span className="eyebrow">{l.sales}</span><h2>{c.contact.sales}</h2><p>{c.contact.callBody}</p></div>
        <div className="phone-directory">
          {site.salesPhones.map((line, index) => <a className="phone-line-card" href={`tel:${line.phone}`} key={line.phone} data-reveal><span className="phone-line-index">0{index + 1}</span><span className="phone-line-icon"><Phone size={20}/></span><span className="phone-line-label">{l.sales}</span><strong dir="ltr">{line.display}</strong><small>{l.call}</small></a>)}
          <a className="phone-line-card service-line" href={`tel:${site.customerService.phone}`} data-reveal><span className="phone-line-index">CS</span><span className="phone-line-icon"><Headphones size={20}/></span><span className="phone-line-label">{l.service}</span><strong dir="ltr">{site.customerService.display}</strong><small>{l.call}</small></a>
        </div>
      </div>
    </section>

    <section className="section location-section">
      <div className="site-shell location-card" data-reveal>
        <div className="location-copy"><span className="eyebrow">{l.visit}</span><h2>{l.location}</h2><p>{l.company}</p><p className="location-note">{l.mapNote}</p><a className="btn btn-primary" href={site.map} target="_blank" rel="noreferrer"><Navigation size={18}/>{l.directions}<ExternalLink size={16}/></a></div>
        <a className="location-visual location-visual-photo" href={site.map} target="_blank" rel="noreferrer" aria-label={l.directions} data-map-visual><img src={media.contact.location} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer"/><div className="location-photo-shade"/><div className="map-grid" aria-hidden="true"/><div className="map-road road-a" aria-hidden="true"/><div className="map-road road-b" aria-hidden="true"/><div className="map-road road-c" aria-hidden="true"/><div className="map-rings" aria-hidden="true"><i/><i/><i/></div><div className="map-pin-core"><MapPin size={30}/></div><div className="map-caption"><Building2 size={18}/><span>{l.company}</span><strong>{l.location}</strong></div></a>
      </div>
    </section>

    <section className="section contact-business-section"><div className="site-shell contact-business-card" data-reveal><img src={media.contact.b2b} alt={l.businessTitle} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><div><span className="eyebrow">Pearl Business</span><h2>{l.businessTitle}</h2><p>{l.businessBody}</p><a className="btn btn-primary" href={`tel:${site.salesPhones[0].phone}`}><Truck size={18}/>{l.businessCta}</a></div></div></section>
  </>;
}
