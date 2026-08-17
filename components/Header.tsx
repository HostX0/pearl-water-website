'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, locales, type Locale, type PageKey } from '@/lib/site';

const desktopPages: PageKey[] = ['home', 'about', 'products', 'quality'];
const mobilePages: PageKey[] = [...desktopPages, 'contact'];

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
        {desktopPages.map((page) => {
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
        {mobilePages.map((page) => {
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
