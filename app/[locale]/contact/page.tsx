import { Building2, ExternalLink, Headphones, MapPin, Navigation, Phone, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { media } from '@/lib/media';
import { isLocale, site, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale,'contact') : {};
}

const labels = {
  en: {
    heroEyebrow: 'Contact Pearl', heroTitle: 'Need Pearl? Start here.', heroBody: 'For products, sales, distribution, hospitality or directions in Baghdad, choose the contact route that works best for you.',
    sales: 'Sales', salesTitle: 'Talk directly to Pearl sales.', salesBody: 'Choose any sales line below for product, wholesale, hospitality or distribution inquiries.',
    service: 'Customer service', visit: 'Find Pearl in Baghdad', company: 'Bright Pearl for Purifying and Bottling Water', directions: 'Get directions', call: 'Call now', location: 'Baghdad, Iraq', mapNote: 'Open the map and head straight to Pearl.',
    businessTitle: 'Buying for a business, event or distribution?', businessBody: 'Talk to Pearl sales about product availability and the format that suits your business or event.', businessCta: 'View sales numbers',
  },
  ar: {
    heroEyebrow: 'تواصل مع اللؤلؤة', heroTitle: 'تحتاج اللؤلؤة؟ من هنا.', heroBody: 'للمنتجات، المبيعات، التوزيع، الضيافة أو الوصول إلينا في بغداد — اختار طريقة التواصل الأنسب إلك.',
    sales: 'المبيعات', salesTitle: 'احچي مباشرة ويا مبيعات اللؤلؤة.', salesBody: 'اختار أي رقم للمبيعات واستفسر عن المنتجات، الجملة، الضيافة أو التوزيع.',
    service: 'خدمة العملاء', visit: 'موقع اللؤلؤة', company: 'شركة بريق اللؤلؤة لتنقية وتعبئة المياه', directions: 'احصل على الاتجاهات', call: 'اتصل الآن', location: 'بغداد، العراق', mapNote: 'افتح الخريطة وخليها توصلك مباشرة للؤلؤة.',
    businessTitle: 'تحتاج اللؤلؤة لشغلك، مناسبتك أو التوزيع؟', businessBody: 'احچي ويا فريق المبيعات عن توفر المنتجات والحجم الأنسب للشغل، الضيافة أو المناسبات.', businessCta: 'شوف أرقام المبيعات',
  },
  ku: {
    heroEyebrow: 'پەیوەندی بە Pearl', heroTitle: 'Pearl ـت دەوێت؟ لێرەوە دەست پێبکە.', heroBody: 'بۆ بەرهەم، فرۆشتن، دابەشکردن، میوانداری یان گەیشتن لە بەغدا، ڕێگای پەیوەندی گونجاو هەڵبژێرە.',
    sales: 'فرۆشتن', salesTitle: 'ڕاستەوخۆ لەگەڵ فرۆشتنی Pearl قسە بکە.', salesBody: 'هەر یەکێک لە هێڵەکانی فرۆشتن هەڵبژێرە بۆ پرسیاری بەرهەم، کۆمەڵفرۆشی، میوانداری یان دابەشکردن.',
    service: 'خزمەتگوزاری کڕیار', visit: 'شوێنی Pearl لە بەغدا', company: 'Bright Pearl for Purifying and Bottling Water', directions: 'ڕێنمایی وەربگرە', call: 'ئێستا پەیوەندی بکە', location: 'بەغدا، عێراق', mapNote: 'نەخشەکە بکەرەوە و ڕاستەوخۆ بڕۆ بۆ Pearl.',
    businessTitle: 'Pearl بۆ کار، بۆنە یان دابەشکردن دەوێت؟', businessBody: 'لەگەڵ فرۆشتن قسە بکە دەربارەی بەردەستبوونی بەرهەم و قەبارەی گونجاو.', businessCta: 'ژمارەکانی فرۆشتن ببینە',
  },
} as const;

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const l = labels[locale];

  return <>
    <PageHero locale={locale} eyebrow={l.heroEyebrow} title={l.heroTitle} intro={l.heroBody}/>

    <section className="section contact-hero-media"><div className="site-shell contact-hero-photo" data-reveal><img src={media.contact.hero} alt={l.company} loading="eager" decoding="async" referrerPolicy="no-referrer"/><div><span>Pearl · Baghdad</span><strong>{l.company}</strong></div></div></section>

    <section className="section contact-directory-section" id="sales">
      <div className="site-shell contact-directory-grid">
        <div className="contact-directory-copy" data-reveal><span className="eyebrow">{l.sales}</span><h2>{l.salesTitle}</h2><p>{l.salesBody}</p></div>
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

    <section className="section contact-business-section"><div className="site-shell contact-business-card" data-reveal><img src={media.contact.b2b} alt={l.businessTitle} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><div><span className="eyebrow">Pearl Business</span><h2>{l.businessTitle}</h2><p>{l.businessBody}</p><a className="btn btn-primary" href="#sales"><Truck size={18}/>{l.businessCta}</a></div></div></section>
  </>;
}
