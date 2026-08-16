import { site, type Locale } from '@/lib/site';

export function BrandLogo({ locale, inverted = false, className = '' }: { locale: Locale; inverted?: boolean; className?: string }) {
  const src = locale === 'en' ? site.logoSources.english : site.logoSources.arabic;
  const alt = locale === 'en'
    ? 'Pearl Purified Water'
    : locale === 'ku'
      ? 'Pearl — ئاوی پاککراو'
      : 'اللؤلؤة — مياه منقاة';

  return <img
    src={src}
    alt={alt}
    className={`brand-logo ${inverted ? 'brand-logo-inverted' : ''} ${className}`}
    width={1254}
    height={1254}
    loading="eager"
    decoding="async"
    referrerPolicy="no-referrer"
  />;
}
