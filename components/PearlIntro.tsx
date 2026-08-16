'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import type { Locale } from '@/lib/site';

export function PearlIntro({ locale }: { locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadySeen = sessionStorage.getItem('pearl-intro-seen') === '1';

    if (reduced || alreadySeen) {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          sessionStorage.setItem('pearl-intro-seen', '1');
          document.body.style.overflow = previousOverflow;
          setVisible(false);
        },
      });

      tl
        .fromTo('.intro-pearl',
          { y: -120, opacity: 0, scale: .72 },
          { y: 0, opacity: 1, scale: 1, duration: .62, ease: 'back.out(1.45)' },
        )
        .to('.intro-pearl', { y: 8, duration: .16, ease: 'power1.in' })
        .fromTo('.intro-ripple',
          { scale: .25, opacity: .5 },
          { scale: 1.5, opacity: 0, duration: .72, stagger: .08, ease: 'power2.out' },
          '-=.08',
        )
        .from('.intro-wave', { scaleX: 0, duration: .62, transformOrigin: 'center center' }, '-=.64')
        .from('.intro-logo', { y: 18, opacity: 0, scale: .96, duration: .52 }, '-=.4')
        .to('.pearl-intro', { opacity: 0, duration: .38, ease: 'power2.inOut' }, '+=.18');
    }, root);

    return () => {
      document.body.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, { scope: root });

  if (!visible) return null;

  return <div className="pearl-intro" ref={root} aria-hidden="true">
    <div className="intro-stage">
      <div className="intro-pearl"/>
      <div className="intro-water">
        <i className="intro-ripple"/><i className="intro-ripple"/><i className="intro-ripple"/>
        <span className="intro-wave"/>
      </div>
      <div className="intro-logo"><BrandLogo locale={locale} priority sizes="(max-width: 680px) 195px, 245px"/></div>
    </div>
  </div>;
}
