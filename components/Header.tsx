'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { getContent } from '@/lib/content';
import { localizedPath, locales, type Locale, type PageKey } from '@/lib/site';

const pages: PageKey[] = ['home', 'about', 'products', 'quality', 'contact'];

export function Header({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const suffix = pathname.replace(/^\/(ar|en|ku)/, '/').replace(/^\/(ar|en|ku)$/, '') || '';

  return <header className="site-header" data-site-header>
    <div className="site-shell header-shell">
      <Link href={`/${locale}`} className="header-brand" aria-label={c.nav.home}><BrandLogo locale={locale} /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {pages.map((page) => {
          const href = localizedPath(locale, page);
          const active = page === 'home' ? pathname === `/${locale}` : pathname.startsWith(href);
          return <Link key={page} href={href} className={active ? 'active' : ''}>{c.nav[page]}</Link>;
        })}
      </nav>
      <div className="header-actions">
        <div className="language-switcher" aria-label="Language">
          {locales.map((l) => <Link key={l} href={`/${l}${suffix === '/' ? '' : suffix}`} className={l === locale ? 'active' : ''}>{l === 'ar' ? 'AR' : l === 'en' ? 'EN' : 'KU'}</Link>)}
        </div>
        <Link href={localizedPath(locale,'contact')} className="header-call"><Phone size={16}/><span>{c.common.contact}</span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
    {open && <div className="site-shell mobile-menu">
      {pages.map((page) => <Link key={page} href={localizedPath(locale, page)} onClick={() => setOpen(false)}>{c.nav[page]}</Link>)}
    </div>}
  </header>;
}
