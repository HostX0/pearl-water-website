import type { MetadataRoute } from 'next';
import { locales, pagePath, productSizes, productSlugs, site, type PageKey } from '@/lib/site';

const pages = Object.keys(pagePath) as PageKey[];
const legalPages = ['/privacy', '/terms'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = locales.flatMap((locale) => pages.map((page) => {
    const pathname = pagePath[page];
    return { url: `${site.baseUrl}/${locale}${pathname}`, changeFrequency: page === 'home' ? 'weekly' as const : 'monthly' as const, priority: page === 'home' ? 1 : page === 'products' ? 0.9 : 0.75, alternates: { languages: { ar: `${site.baseUrl}/ar${pathname}`, en: `${site.baseUrl}/en${pathname}`, 'ckb-IQ': `${site.baseUrl}/ku${pathname}` } } };
  }));

  const productEntries = locales.flatMap((locale) => productSizes.map((size) => {
    const pathname = `/products/${productSlugs[size]}`;
    return { url: `${site.baseUrl}/${locale}${pathname}`, changeFrequency: 'monthly' as const, priority: 0.82, alternates: { languages: { ar: `${site.baseUrl}/ar${pathname}`, en: `${site.baseUrl}/en${pathname}`, 'ckb-IQ': `${site.baseUrl}/ku${pathname}` } } };
  }));

  const legalEntries = locales.flatMap((locale) => legalPages.map((pathname) => ({ url: `${site.baseUrl}/${locale}${pathname}`, changeFrequency: 'yearly' as const, priority: 0.25, alternates: { languages: { ar: `${site.baseUrl}/ar${pathname}`, en: `${site.baseUrl}/en${pathname}`, 'ckb-IQ': `${site.baseUrl}/ku${pathname}` } } })));

  return [...pageEntries, ...productEntries, ...legalEntries];
}
