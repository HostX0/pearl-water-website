import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getContent } from '@/lib/content';
import { isLocale, site, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return isLocale(locale) ? pageMetadata(locale,'contact') : {}; }
export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const c = getContent(locale);
  return <><PageHero locale={locale} eyebrow={c.contact.eyebrow} title={c.contact.title} intro={c.contact.intro}/>
    <section className="section"><div className="site-shell contact-grid">
      <a className="contact-card" href={`tel:${site.phone}`} data-reveal><div className="icon-box"><Phone/></div><span>{c.contact.sales}</span><h2 dir="ltr">{site.phoneDisplay}</h2><p>{c.contact.callBody}</p></a>
      <a className="contact-card" href={site.map} target="_blank" rel="noreferrer" data-reveal><div className="icon-box"><MapPin/></div><span>{c.contact.location}</span><h2>{site.city}</h2><p>{c.contact.locationBody}</p><ExternalLink size={18}/></a>
      <div className="map-panel" data-reveal><div className="map-rings"><i/><i/><i/></div><MapPin size={34}/><strong>Baghdad</strong><small>Iraq</small></div>
    </div></section>
  </>;
}
