import Image from 'next/image';
import { mediaSources } from '@/lib/media';
import type { Locale } from '@/lib/site';

type BrandLogoProps = {
  locale: Locale;
  inverted?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  locale,
  inverted = false,
  className = '',
  priority = false,
  sizes = '132px',
}: BrandLogoProps) {
  const src = locale === 'en' ? mediaSources.logos.en : mediaSources.logos.ar;
  const alt = locale === 'en'
    ? 'Pearl Purified Water'
    : locale === 'ku'
      ? 'Pearl — ئاوی پاککراو'
      : 'اللؤلؤة — مياه منقاة';
  const classes = ['brand-logo', inverted ? 'brand-logo-inverted' : '', className].filter(Boolean).join(' ');

  return <Image
    src={src}
    alt={alt}
    className={classes}
    width={1254}
    height={1254}
    sizes={sizes}
    quality={92}
    priority={priority}
    fetchPriority={priority ? 'high' : undefined}
    referrerPolicy="no-referrer"
  />;
}
