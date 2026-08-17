import { Building2, ExternalLink, Headphones, MapPin, Navigation, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { media } from '@/lib/media';
import { isLocale, site, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, 'contact') : {};
}

const labels = {
  en: {
    heroEyebrow: 'Contact Pearl',
    heroTitle: 'Contact Pearl.',
    heroBody: 'For sales, customer service or directions in Baghdad, all Pearl contact routes are here.',
    sales: 'Sales',
    salesTitle: 'Contact Pearl sales.',
    salesBody: 'Choose the sales number that suits you for product, wholesale, hospitality or distribution inquiries.',
    service: 'Customer service',
    visit: 'Find Pearl in Baghdad',
    company: 'Bright Pearl for Purifying and Bottling Water',
    directions: 'Get directions',
    call: 'Call now',
    location: 'Baghdad, Iraq',
    mapNote: 'Open the map for directions to Pearl.',
  },
  ar: {
    heroEyebrow: 'تواصل مع اللؤلؤة',
    heroTitle: 'تواصل مع اللؤلؤة.',
    heroBody: 'للمبيعات، خدمة العملاء أو الوصول إلينا في بغداد — كل طرق التواصل هنا.',
    sales: 'المبيعات',
    salesTitle: 'تواصل مع المبيعات.',
    salesBody: 'اختار رقم المبيعات المناسب للاستفسار عن المنتجات، الجملة، الضيافة أو التوزيع.',
    service: 'خدمة العملاء',
    visit: 'موقع اللؤلؤة',
    company: 'شركة بريق اللؤلؤة لتنقية وتعبئة المياه',
    directions: 'احصل على الاتجاهات',
    call: 'اتصل الآن',
    location: 'بغداد، العراق',
    mapNote: 'افتح الخريطة للوصول مباشرة إلى اللؤلؤة.',
  },
  ku: {
    heroEyebrow: 'پەیوەندی بە Pearl',
    heroTitle: 'پەیوەندی بە Pearl بکە.',
    heroBody: 'بۆ فرۆشتن، خزمەتگوزاری کڕیار یان گەیشتن لە بەغدا، هەموو ڕێگاکانی پەیوەندی لێرەن.',
    sales: 'فرۆشتن',
    salesTitle: 'پەیوەندی بە فرۆشتنی Pearl بکە.',
    salesBody: 'ژمارەی فرۆشتنی گونجاو هەڵبژێرە بۆ پرسیاری بەرهەم، کۆمەڵفرۆشی، میوانداری یان دابەشکردن.',
    service: 'خزمەتگوزاری کڕیار',
    visit: 'شوێنی Pearl لە بەغدا',
    company: 'Bright Pearl for Purifying and Bottling Water',
    directions: 'ڕێنمایی وەربگرە',
    call: 'ئێستا پەیوەندی بکە',
    location: 'بەغدا، عێراق',
    mapNote: 'نەخشەکە بکەرەوە بۆ گەیشتن بە Pearl.',
  },
} as const;

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const l = labels[locale];

  return <>
    <PageHero locale={locale} eyebrow={l.heroEyebrow} title={l.heroTitle} intro={l.heroBody}/>

    <section className="section contact-directory-section" id="sales">
      <div className="site-shell contact-directory-grid">
        <div className="contact-directory-copy" data-reveal>
          <span className="eyebrow">{l.sales}</span>
          <h2>{l.salesTitle}</h2>
          <p>{l.salesBody}</p>
        </div>
        <div className="phone-directory">
          {site.salesPhones.map((line, index) => <a className="phone-line-card" href={`tel:${line.phone}`} key={line.phone} data-reveal>
            <span className="phone-line-index">0{index + 1}</span>
            <span className="phone-line-icon"><Phone size={20}/></span>
            <span className="phone-line-label">{l.sales}</span>
            <strong dir="ltr">{line.display}</strong>
            <small>{l.call}</small>
          </a>)}
          <a className="phone-line-card service-line" href={`tel:${site.customerService.phone}`} data-reveal>
            <span className="phone-line-index">CS</span>
            <span className="phone-line-icon"><Headphones size={20}/></span>
            <span className="phone-line-label">{l.service}</span>
            <strong dir="ltr">{site.customerService.display}</strong>
            <small>{l.call}</small>
          </a>
        </div>
      </div>
    </section>

    <section className="section location-section">
      <div className="site-shell location-card" data-reveal>
        <div className="location-copy">
          <span className="eyebrow">{l.visit}</span>
          <h2>{l.location}</h2>
          <p>{l.company}</p>
          <p className="location-note">{l.mapNote}</p>
          <a className="btn btn-primary" href={site.map} target="_blank" rel="noreferrer">
            <Navigation size={18}/>{l.directions}<ExternalLink size={16}/>
          </a>
        </div>
        <a className="location-visual location-visual-photo" href={site.map} target="_blank" rel="noreferrer" aria-label={l.directions} data-map-visual>
          <img src={media.contact.location} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer"/>
          <div className="location-photo-shade"/>
          <div className="map-grid" aria-hidden="true"/>
          <div className="map-road road-a" aria-hidden="true"/>
          <div className="map-road road-b" aria-hidden="true"/>
          <div className="map-road road-c" aria-hidden="true"/>
          <div className="map-rings" aria-hidden="true"><i/><i/><i/></div>
          <div className="map-pin-core"><MapPin size={30}/></div>
          <div className="map-caption"><Building2 size={18}/><span>{l.company}</span><strong>{l.location}</strong></div>
        </a>
      </div>
    </section>
  </>;
}
