import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const write = (path, content) => fs.writeFileSync(path, content);

function replaceOnce(path, needle, replacement, label = needle.slice(0, 80)) {
  const input = read(path);
  if (!input.includes(needle)) {
    throw new Error(`Expected pattern not found in ${path}: ${label}`);
  }
  write(path, input.replace(needle, replacement));
}

function removeOnce(path, needle, label = needle.slice(0, 80)) {
  replaceOnce(path, needle, '', label);
}

// 1) Self-host the exact brand fonts through Next.js instead of render-blocking Google CSS.
removeOnce(
  'app/globals.css',
  "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap');\n\n",
  'Montserrat/Tajawal Google Fonts import',
);
removeOnce(
  'app/experience.css',
  "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap');\n\n",
  'Noto Sans Arabic Google Fonts import',
);

write('app/[locale]/layout.tsx', `import '../globals.css';
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
`);

// 2) Preserve the existing image pipeline for legacy surfaces while exposing raw Drive sources
//    to next/image where responsive srcsets provide a measurable win.
replaceOnce(
  'lib/media.ts',
  "const driveImage = (id: string, width = 1200, quality = 90) =>\n  optimizeImage(`https://drive.google.com/thumbnail?id=${id}&sz=w${width}`, width, quality);\n\nexport const media = {",
  "export const driveSource = (id: string, width = 2400) =>\n  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;\n\nconst driveImage = (id: string, width = 1200, quality = 90) =>\n  optimizeImage(driveSource(id, width), width, quality);\n\nexport const mediaSources = {\n  logos: {\n    ar: driveSource('1h1CF6l-ZpZSII7upncjUIC01TAhn4-L_', 1400),\n    en: driveSource('1OC7oAaf306UyZALXExnlJGNjX9RpLpSt', 1400),\n  },\n  home: {\n    hero: driveSource('1jiYaUdEno-D-aUdsTnK4URnyRa4Bjg2x', 1600),\n    purity: driveSource('1gi8HKhcBgPnSzzOhXsPQdZOHGw-UO0wS', 1600),\n    standards: driveSource('1KggyALGnwz_yyI1at8LB61ymMUhv0hGQ', 1600),\n    lifestyleFamily: driveSource('1olEJdbFM2NPyFkmXP98ELvLENJVUHrT9', 1600),\n    lifestyleActive: driveSource('1TCcrCJe7eD6xB0dEkuK0FbmD0KfqHRD3', 1600),\n    distribution: driveSource('1d90nFrBPJttVHQZk23qDkbeN0UPmU-aM', 1920),\n    iraq: driveSource('1BNeXshDqQhU1tMVU7sHm2ISghSiDLZeh', 1600),\n  },\n  products: {\n    front1000: driveSource('1Q0dryDXEK10QCE9nxlEj5wlgnnVKkT9_', 1000),\n    front500: driveSource('1bCX49Fz8pW0jCE2l5Dr1YiyXprMzhZI8', 1000),\n    front330: driveSource('1HTPbe3e55cVuamJOqxy8IGTWjdd9Hdab', 1000),\n    front200: driveSource('1E_0jguyCKFLmuZjSOG3m0RtnARRhn6Rb', 1000),\n  },\n} as const;\n\nexport const media = {",
  'Drive image helper block',
);

// 3) Make the shared logo responsive and reusable without changing its appearance.
write('components/BrandLogo.tsx', `import Image from 'next/image';
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
`);

// 4) Header semantics: no visual change, but every icon-only control now has a stable accessible name.
write('components/Header.tsx', `'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, locales, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['home', 'about', 'products', 'quality', 'contact'];

const accessibilityCopy = {
  en: { primary: 'Primary navigation', mobile: 'Mobile navigation', language: 'Language', menu: 'Open menu', close: 'Close menu' },
  ar: { primary: 'التنقل الرئيسي', mobile: 'قائمة التنقل', language: 'اللغة', menu: 'فتح القائمة', close: 'إغلاق القائمة' },
  ku: { primary: 'ڕێنیشاندانی سەرەکی', mobile: 'مێنیوی ڕێنیشاندان', language: 'زمان', menu: 'کردنەوەی مێنیو', close: 'داخستنی مێنیو' },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const a11y = accessibilityCopy[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const suffix = (pathname?.replace(/^\/(ar|en|ku)(?=\/|$)/, '') || '').replace(/^\/+/, '');
  const localeHref = (target: Locale) => suffix ? '/' + target + '/' + suffix : '/' + target;
  const pageIsActive = (page: PageKey, href: string) => page === 'home' ? pathname === '/' + locale : Boolean(pathname?.startsWith(href));

  return <header className="site-header" data-site-header>
    <div className="site-shell header-shell">
      <Link href={'/' + locale} className="header-brand" aria-label={c.nav.home}>
        <BrandLogo locale={locale} priority sizes="(max-width: 680px) 96px, (max-width: 900px) 112px, 145px"/>
      </Link>
      <nav className="desktop-nav" aria-label={a11y.primary}>
        {pages.map((page) => {
          const href = localizedPath(locale, page);
          const active = pageIsActive(page, href);
          return <Link key={page} href={href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>{c.nav[page]}</Link>;
        })}
      </nav>
      <div className="header-actions">
        <div className="language-switcher" aria-label={a11y.language}>
          {locales.map((l) => <Link key={l} href={localeHref(l)} className={l === locale ? 'active' : ''} aria-current={l === locale ? 'page' : undefined}>{l === 'ar' ? 'AR' : l === 'en' ? 'EN' : 'KU'}</Link>)}
        </div>
        <Link href={localizedPath(locale, 'contact')} className="header-call" aria-label={c.common.contact}>
          <Phone size={16} aria-hidden="true"/><span>{c.common.contact}</span>
        </Link>
        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? a11y.close : a11y.menu}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >{open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}</button>
      </div>
    </div>
    {open && <div className="site-shell mobile-menu" id="mobile-navigation">
      <nav className="mobile-menu-links" aria-label={a11y.mobile}>
        {pages.map((page) => {
          const href = localizedPath(locale, page);
          const active = pageIsActive(page, href);
          return <Link key={page} href={href} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}>{c.nav[page]}</Link>;
        })}
      </nav>
      <div className="mobile-language-switcher" aria-label={a11y.language}>
        {locales.map((l) => <Link key={l} href={localeHref(l)} className={l === locale ? 'active' : ''} aria-current={l === locale ? 'page' : undefined} onClick={() => setOpen(false)}>{l === 'ar' ? 'العربية' : l === 'en' ? 'English' : 'کوردی'}</Link>)}
      </div>
    </div>}
  </header>;
}
`);

// 5) Homepage images: let Next.js produce responsive srcsets and a correct high-priority LCP preload.
replaceOnce('components/HomePage.tsx', "import Link from 'next/link';", "import Image from 'next/image';\nimport Link from 'next/link';", 'HomePage next/image import');
removeOnce('components/HomePage.tsx', "import { BrandLogo } from './BrandLogo';\n", 'unused HomePage BrandLogo import');
replaceOnce('components/HomePage.tsx', "import { media } from '@/lib/media';", "import { mediaSources } from '@/lib/media';", 'HomePage media source import');
replaceOnce(
  'components/HomePage.tsx',
  "import { localizedPath, localizedProductPath, productImages, productSizes, site, type Locale } from '@/lib/site';",
  "import { localizedPath, localizedProductPath, productSizes, site, type Locale } from '@/lib/site';",
  'HomePage productImages import',
);
replaceOnce(
  'components/HomePage.tsx',
  "} as const;\n\nexport function HomePage",
  "} as const;\n\nconst homeProductSources = {\n  '1000': mediaSources.products.front1000,\n  '500': mediaSources.products.front500,\n  '330': mediaSources.products.front330,\n  '200': mediaSources.products.front200,\n} as const;\n\nexport function HomePage",
  'HomePage product source map',
);
replaceOnce(
  'components/HomePage.tsx',
  "          <img className=\"hero-scene-image\" src={media.home.hero} alt={x.visualAlt} loading=\"eager\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>\n          <div className=\"hero-logo-card\"><BrandLogo locale={locale}/></div>\n          <div className=\"hero-size\"><strong>1000</strong><span>ml</span></div>",
  "          <Image className=\"hero-scene-image\" src={mediaSources.home.hero} alt={x.visualAlt} width={1122} height={1402} sizes=\"(max-width: 900px) 92vw, 46vw\" quality={90} priority fetchPriority=\"high\" referrerPolicy=\"no-referrer\"/>",
  'homepage hero image and obsolete hidden overlays',
);
replaceOnce(
  'components/HomePage.tsx',
  "<div className=\"home-proof-media\" data-parallax=\"4\"><img src={media.home.purity} alt={x.visualAlt} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/></div>",
  "<div className=\"home-proof-media\" data-parallax=\"4\"><Image src={mediaSources.home.purity} alt={x.visualAlt} width={1200} height={900} sizes=\"(max-width: 900px) 92vw, 48vw\" quality={88} referrerPolicy=\"no-referrer\"/></div>",
  'homepage purity image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={productImages[key]} alt={`Pearl ${product.size}`} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={homeProductSources[key]} alt={'Pearl ' + product.size} width={750} height={750} sizes=\"(max-width: 680px) 62vw, (max-width: 900px) 34vw, 190px\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage product images',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={media.home.iraq} alt={storyLocation} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={mediaSources.home.iraq} alt={storyLocation} width={1200} height={900} sizes=\"(max-width: 900px) 92vw, 50vw\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage Iraq image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={media.home.standards} alt={x.proofTitle} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={mediaSources.home.standards} alt={x.proofTitle} width={1200} height={900} sizes=\"(max-width: 900px) 92vw, 30vw\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage standards image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={media.home.lifestyleFamily} alt={x.family} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={mediaSources.home.lifestyleFamily} alt={x.family} width={1200} height={1500} sizes=\"(max-width: 900px) 92vw, 52vw\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage family image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={media.home.lifestyleActive} alt={x.active} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={mediaSources.home.lifestyleActive} alt={x.active} width={1200} height={1500} sizes=\"(max-width: 900px) 92vw, 38vw\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage active image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<img src={media.home.distribution} alt={x.distributionTitle} loading=\"lazy\" decoding=\"async\" referrerPolicy=\"no-referrer\"/>",
  "<Image src={mediaSources.home.distribution} alt={x.distributionTitle} width={1600} height={900} sizes=\"92vw\" quality={88} referrerPolicy=\"no-referrer\"/>",
  'homepage distribution image',
);
replaceOnce(
  'components/HomePage.tsx',
  "<Link className=\"text-link\" href={localizedPath(locale,'quality')}>{c.common.learnMore}",
  "<Link className=\"text-link\" href={localizedPath(locale,'quality')} aria-label={c.common.learnMore + ': ' + c.nav.quality}>{c.common.learnMore}",
  'quality learn-more accessible label',
);
replaceOnce(
  'components/HomePage.tsx',
  "<Link href={localizedPath(locale, 'about')} className=\"text-link\">{c.common.learnMore}",
  "<Link href={localizedPath(locale, 'about')} className=\"text-link\" aria-label={c.common.learnMore + ': ' + c.nav.about}>{c.common.learnMore}",
  'about learn-more accessible label',
);
replaceOnce(
  'components/HomePage.tsx',
  "<Link className=\"btn btn-white\" href={localizedPath(locale, 'quality')}>{c.common.learnMore}",
  "<Link className=\"btn btn-white\" href={localizedPath(locale, 'quality')} aria-label={c.common.learnMore + ': ' + c.nav.quality}>{c.common.learnMore}",
  'quality button accessible label',
);

// 6) Keep the intro identical, but size its responsive logo correctly.
replaceOnce(
  'components/PearlIntro.tsx',
  '<div className="intro-logo"><BrandLogo locale={locale}/></div>',
  '<div className="intro-logo"><BrandLogo locale={locale} priority sizes="(max-width: 680px) 195px, 245px"/></div>',
  'Pearl intro logo sizing',
);

// 7) Move the explicit ScrollTrigger refresh out of the setup task to avoid a synchronous forced reflow.
replaceOnce(
  'components/MotionProvider.tsx',
  "      ScrollTrigger.refresh();\n    }, root);\n\n    return () => {\n      mm.revert();\n      ctx.revert();\n    };",
  "    }, root);\n\n    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());\n\n    return () => {\n      window.cancelAnimationFrame(refreshFrame);\n      mm.revert();\n      ctx.revert();\n    };",
  'deferred ScrollTrigger refresh',
);

// 8) Non-visual engineering layer: preserve exact typography, improve contrast and enlarge semantic hit areas.
write('app/system.css', `/* Pearl system layer — font delivery, accessibility and non-visual engineering fixes. */
.font-en{font-family:var(--font-montserrat),system-ui,sans-serif!important}
.font-ar{font-family:var(--font-tajawal),system-ui,sans-serif!important}
.font-ku{font-family:var(--font-noto-arabic),system-ui,sans-serif!important}

.story-photo figcaption,
.about-gallery figcaption b,
.product-stage-label span,
.product-step-top>span,
.quality-stage-inline span,
.quality-proof-card strong,
.quality-current span,
.quality-step-top>b,
.standard-card-top>b,
.testing-metric strong,
.mobile-menu:after{
  font-family:var(--font-montserrat),system-ui,sans-serif!important;
}
.product-showcase-step h3{
  font-family:var(--font-montserrat),var(--font-tajawal),system-ui,sans-serif!important;
}

/* Same Pearl palette, stronger AA contrast for inactive language choices. */
.language-switcher a:not(.active){color:#536b7c!important}

/* Increase interactive geometry without moving the visible desktop navigation. */
.desktop-nav a{padding-block:10px!important;margin-block:-10px!important}
.desktop-nav a.active:after{bottom:-2px!important}
.footer-nav a{min-height:28px;display:inline-flex;align-items:center}

@media(max-width:900px){
  .mobile-menu-links a,
  .mobile-language-switcher a{min-height:44px!important}
}
`);

// The old stylesheet existed only to hide two hero nodes that no longer exist.
if (fs.existsSync('app/hero-cleanup.css')) fs.rmSync('app/hero-cleanup.css');

console.log('Final engineering pass applied successfully.');
