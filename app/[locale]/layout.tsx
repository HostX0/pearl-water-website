import '../globals.css';
import '../extra.css';
import '../polish.css';
import '../motion-polish.css';
import '../experience.css';
import '../media-system.css';
import '../refinement.css';
import '../final-polish.css';
import '../header-mobile.css';
import '../feedback-fixes.css';
import '../hero-cleanup.css';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionProvider } from '@/components/MotionProvider';
import { PearlIntro } from '@/components/PearlIntro';
import { JsonLd } from '@/components/JsonLd';
import { media } from '@/lib/media';
import { isLocale, localeMeta, locales, type Locale } from '@/lib/site';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

const skipLabel = { en: 'Skip to content', ar: 'انتقل إلى المحتوى', ku: 'بڕۆ بۆ ناوەڕۆک' } as const;
const fontStylesheet = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const meta = localeMeta[locale];
  const fontClass = locale === 'en' ? 'font-en' : locale === 'ku' ? 'font-ku' : 'font-ar';

  return <html lang={meta.lang} dir={meta.dir}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link rel="preload" as="style" href={fontStylesheet} crossOrigin="anonymous"/>
      <link rel="preload" as="image" href={media.home.hero} fetchPriority="high"/>
    </head>
    <body className={fontClass}>
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
