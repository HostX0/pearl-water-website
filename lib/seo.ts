import type { Metadata } from 'next';
import { getContent } from './content';
import {
  absoluteLocalizedPath,
  absoluteProductPath,
  localeMeta,
  locales,
  pagePath,
  productImages,
  productSlugs,
  site,
  type Locale,
  type PageKey,
  type ProductSize,
} from './site';

function languageAlternates(pathname: string) {
  return {
    ar: `${site.baseUrl}/ar${pathname}`,
    en: `${site.baseUrl}/en${pathname}`,
    'ckb-IQ': `${site.baseUrl}/ku${pathname}`,
    'x-default': `${site.baseUrl}/ar${pathname}`,
  };
}

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const c = getContent(locale);
  const meta = c.meta[page];
  const pathname = pagePath[page];
  const canonical = absoluteLocalizedPath(locale, page);

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(site.baseUrl),
    applicationName: 'Pearl Water',
    category: 'Purified Bottled Water',
    alternates: { canonical, languages: languageAlternates(pathname) },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: site.name,
      locale: localeMeta[locale].ogLocale,
      type: 'website',
      images: [{ url: '/brand/pearl-en.webp', width: 900, height: 536, alt: 'Pearl Purified Water' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/brand/pearl-en.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export function productMetadata(locale: Locale, size: ProductSize): Metadata {
  const c = getContent(locale);
  const item = c.products.items[size];
  const canonical = absoluteProductPath(locale, size);
  const pathname = `/products/${productSlugs[size]}`;
  const title = locale === 'ar'
    ? `مياه اللؤلؤة ${item.size} | مياه منقاة في العراق`
    : locale === 'ku'
      ? `ئاوی Pearl ${item.size} | ئاوی پاککراو لە عێراق`
      : `Pearl Water ${item.size} | Purified Water in Iraq`;
  const description = locale === 'ar'
    ? `تعرف على عبوة مياه اللؤلؤة ${item.size}، استخداماتها ومواصفاتها ضمن مجموعة مياه اللؤلؤة المنقاة في العراق.`
    : locale === 'ku'
      ? `زیاتر بزانە دەربارەی قەبارەی ${item.size} لە Pearl، بەکارهێنان و تایبەتمەندییەکانی لە عێراق.`
      : `Discover Pearl purified water ${item.size}, its everyday use cases and place in the Pearl bottled water range in Iraq.`;

  return {
    title,
    description,
    metadataBase: new URL(site.baseUrl),
    alternates: { canonical, languages: languageAlternates(pathname) },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: localeMeta[locale].ogLocale,
      type: 'website',
      images: [{ url: productImages[size], alt: `Pearl Water ${item.size}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [productImages[size]] },
    robots: { index: true, follow: true },
  };
}

export function staticLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
