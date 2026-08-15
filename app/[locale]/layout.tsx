import '../globals.css';
import '../extra.css';
import '../polish.css';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionProvider } from '@/components/MotionProvider';
import { PearlIntro } from '@/components/PearlIntro';
import { JsonLd } from '@/components/JsonLd';
import { isLocale, localeMeta, locales, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const skipLabel = { en: 'Skip to content', ar: 'انتقل إلى المحتوى', ku: 'بڕۆ بۆ ناوەڕۆک' } as const;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const meta = localeMeta[locale];

  return <html lang={meta.lang} dir={meta.dir}>
    <body className={locale === 'en' ? 'font-en' : 'font-ar'}>
      <a className="skip-link" href="#main-content">{skipLabel[locale]}</a>
      <PearlIntro locale={locale}/>
      <div className="scroll-progress" aria-hidden="true"><span className="scroll-progress-bar"/></div>
      <JsonLd locale={locale}/>
      <Header locale={locale}/>
      <MotionProvider><main id="main-content">{children}</main></MotionProvider>
      <Footer locale={locale}/>
    </body>
  </html>;
}
