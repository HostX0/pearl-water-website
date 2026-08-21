import { site, type Locale } from '@/lib/site';

export function JsonLd({ locale }: { locale: Locale }) {
  const organizationName = locale === 'ar' ? site.arabicName : 'Pearl Water';
  const contactPoint = [
    ...site.salesPhones.map((line) => ({
      '@type': 'ContactPoint',
      telephone: line.phone,
      contactType: 'sales',
      areaServed: 'IQ',
      availableLanguage: ['ar', 'en', 'ckb'],
    })),
    {
      '@type': 'ContactPoint',
      telephone: site.customerService.phone,
      contactType: 'customer service',
      areaServed: 'IQ',
      availableLanguage: ['ar', 'en', 'ckb'],
    },
  ];

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
        logo: `${site.baseUrl}/brand/pearl-en.webp`,
        address: { '@type': 'PostalAddress', addressLocality: 'Baghdad', addressCountry: 'IQ' },
        contactPoint,
      },
      {
        '@type': 'WebSite',
        '@id': `${site.baseUrl}/#website`,
        url: site.baseUrl,
        name: 'Pearl Water',
        publisher: { '@id': `${site.baseUrl}/#organization` },
        inLanguage: ['ar', 'en', 'ckb'],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
