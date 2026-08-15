import type { Locale } from '@/lib/site';

export function BrandLogo({ locale, inverted = false, className = '' }: { locale: Locale; inverted?: boolean; className?: string }) {
  const src = locale === 'en' ? '/brand/pearl-en.webp' : '/brand/pearl-ar.webp';
  const alt = locale === 'en' ? 'Pearl Purified Water' : 'اللؤلؤة مياه منقاة';
  return <img src={src} alt={alt} className={`brand-logo ${inverted ? 'brand-logo-inverted' : ''} ${className}`} />;
}
