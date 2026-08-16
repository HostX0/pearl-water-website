import { driveImage, media } from './media';

export const locales = ['ar', 'en', 'ku'] as const;
export type Locale = (typeof locales)[number];
export type PageKey = 'home' | 'about' | 'products' | 'quality' | 'contact';

export const productSizes = ['1000', '500', '330', '200'] as const;
export type ProductSize = (typeof productSizes)[number];

export const productSlugs: Record<ProductSize, string> = {
  '1000': '1000ml',
  '500': '500ml',
  '330': '330ml',
  '200': '200ml',
};

export const slugToProduct: Record<string, ProductSize> = {
  '1000ml': '1000',
  '500ml': '500',
  '330ml': '330',
  '200ml': '200',
};

export const localeMeta: Record<Locale, { label: string; dir: 'rtl' | 'ltr'; lang: string; ogLocale: string }> = {
  ar: { label: 'العربية', dir: 'rtl', lang: 'ar', ogLocale: 'ar_IQ' },
  en: { label: 'English', dir: 'ltr', lang: 'en', ogLocale: 'en_US' },
  ku: { label: 'کوردی', dir: 'rtl', lang: 'ckb', ogLocale: 'ckb_IQ' },
};

export type PhoneLine = {
  kind: 'sales' | 'service';
  phone: string;
  display: string;
};

export const site = {
  name: 'Pearl Water',
  arabicName: 'مياه اللؤلؤة',
  company: 'Bright Pearl for Purifying and Bottling Water',
  companyArabic: 'شركة بريق اللؤلؤة لتنقية وتعبئة المياه',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pearl-water-iraq-hostx0s-projects.vercel.app',
  legacyWebsite: 'https://pearl-iq.com/',
  assetLibrary: 'https://drive.google.com/drive/folders/17EcQ4ZLaLxs-xsuAMHuEm8OAaesn0TDH',
  map: 'https://maps.app.goo.gl/2xrSgAAN3Sq8dqg78',
  city: 'Baghdad, Iraq',
  country: 'Iraq',
  salesPhones: [
    { kind: 'sales', phone: '+9647730021087', display: '0773 002 1087' },
    { kind: 'sales', phone: '+9647730021084', display: '0773 002 1084' },
    { kind: 'sales', phone: '+9647704621087', display: '0770 462 1087' },
    { kind: 'sales', phone: '+9647704621084', display: '0770 462 1084' },
  ] as PhoneLine[],
  customerService: { kind: 'service', phone: '+9647704622005', display: '0770 462 2005' } as PhoneLine,
  logoSources: {
    english: media.logos.en,
    arabic: media.logos.ar,
  },
};

export const productImages: Record<ProductSize, string> = {
  '1000': media.products.front1000,
  '500': media.products.front500,
  '330': media.products.front330,
  '200': driveImage('1E_0jguyCKFLmuZjSOG3m0RtnARRhn6Rb', 750, 90),
};

export const pagePath: Record<PageKey, string> = {
  home: '',
  about: '/about',
  products: '/products',
  quality: '/quality',
  contact: '/contact',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isProductSize(value: string): value is ProductSize {
  return productSizes.includes(value as ProductSize);
}

export function localizedPath(locale: Locale, page: PageKey) {
  return `/${locale}${pagePath[page]}`;
}

export function localizedProductPath(locale: Locale, size: ProductSize) {
  return `/${locale}/products/${productSlugs[size]}`;
}

export function absoluteLocalizedPath(locale: Locale, page: PageKey) {
  return `${site.baseUrl}${localizedPath(locale, page)}`;
}

export function absoluteProductPath(locale: Locale, size: ProductSize) {
  return `${site.baseUrl}${localizedProductPath(locale, size)}`;
}
