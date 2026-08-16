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
import '../system.css';
import { Montserrat, Noto_Sans_Arabic, Tajawal } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionProvider } from '@/components/MotionProvider';
import { PearlIntro } from '@/components/PearlIntro';
import { JsonLd } from '@/components/JsonLd';
import { isLocale, localeMeta, locales, type Locale } from '@/lib/site';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,
});

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  preload: false,
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const skipLabel = {
  en: 'Skip to content',
  ar: 'انتقل إلى المحتوى',
  ku: 'بڕۆ بۆ ناوەڕۆک',
} as const;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const meta = localeMeta[locale];
  const fontClass = locale === 'en' ? 'font-en' : locale === 'ku' ? 'font-ku' : 'font-ar';
  const fontVariables = [montserrat.variable, tajawal.variable, notoSansArabic.variable].join(' ');

  return <html lang={meta.lang} dir={meta.dir} className={fontVariables}>
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
