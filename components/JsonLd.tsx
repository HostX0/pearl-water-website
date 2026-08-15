import { absoluteProductPath, productImages, productSizes, site, type Locale } from '@/lib/site';

export function JsonLd({ locale }: { locale: Locale }) {
  const organizationName = locale === 'ar' ? site.arabicName : 'Pearl Water';
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.baseUrl}/#organization`,
        name: organizationName,
        alternateName: locale === 'en' ? site.arabicName : 'Pearl Water',
        legalName: site.company,
        url: site.baseUrl,
        telephone: site.phone,
        logo: `${site.baseUrl}/brand/pearl-en.webp`,
        address: { '@type': 'PostalAddress', addressLocality: 'Baghdad', addressCountry: 'IQ' },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.baseUrl}/#website`,
        url: site.baseUrl,
        name: 'Pearl Water',
        publisher: { '@id': `${site.baseUrl}/#organization` },
        inLanguage: ['ar', 'en', 'ckb'],
      },
      ...productSizes.map((size) => ({
        '@type': 'Product',
        '@id': `${absoluteProductPath(locale, size)}#product`,
        name: `Pearl Purified Water ${size} ml`,
        category: 'Purified Bottled Water',
        brand: { '@type': 'Brand', name: 'Pearl' },
        image: productImages[size],
        url: absoluteProductPath(locale, size),
        manufacturer: { '@id': `${site.baseUrl}/#organization` },
      })),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
