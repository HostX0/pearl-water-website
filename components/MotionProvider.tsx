'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-page-enter]', { opacity: 0, y: 18, duration: .72, ease: 'power3.out' });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 42,
          duration: .9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal-line]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: document.documentElement.dir === 'rtl' ? 'right center' : 'left center',
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax || 12);
        gsap.to(el, {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });

      const heroProduct = document.querySelector<HTMLElement>('.hero-product');
      if (heroProduct) {
        gsap.fromTo(heroProduct,
          { y: 76, opacity: 0, rotate: -1.7, scale: .88 },
          { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 1.28, ease: 'power3.out', delay: .08 },
        );
        gsap.to(heroProduct, {
          yPercent: 13,
          rotate: 1.4,
          ease: 'none',
          scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }

      const heroPearl = document.querySelector<HTMLElement>('.hero-pearl');
      if (heroPearl) {
        gsap.from(heroPearl, { y: -44, opacity: 0, scale: .82, duration: 1.35, ease: 'power3.out', delay: .28 });
        gsap.to(heroPearl, { y: 11, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      gsap.utils.toArray<HTMLElement>('.ripple-ring').forEach((ring, i) => {
        gsap.to(ring, {
          scale: 1.18 + i * .08,
          opacity: .06,
          duration: 2.8 + i * .4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * .18,
        });
      });

      gsap.utils.toArray<HTMLElement>('.page-hero-orb').forEach((orb, i) => {
        gsap.to(orb, {
          x: i % 2 ? -18 : 16,
          y: i % 2 ? 14 : -16,
          scale: i % 2 ? 1.06 : .96,
          duration: 5.2 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      const pageMark = document.querySelector<HTMLElement>('.page-hero-mark');
      if (pageMark) {
        gsap.from(pageMark, { opacity: 0, y: 36, scale: .9, duration: 1.05, delay: .15, ease: 'power3.out' });
      }

      gsap.utils.toArray<HTMLElement>('.story-product-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 70,
          rotate: i % 2 ? 1.1 : -1.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 84%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('.quality-drop').forEach((drop, i) => {
        gsap.from(drop, {
          opacity: 0,
          scale: .35,
          rotate: -18,
          duration: .75,
          delay: i * .05,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: drop, start: 'top 88%', once: true },
        });
      });

      const detailProduct = document.querySelector<HTMLElement>('.product-detail-visual img');
      if (detailProduct) {
        gsap.from(detailProduct, { opacity: 0, y: 70, scale: .88, rotate: -1.5, duration: 1.2, ease: 'power3.out', delay: .12 });
        gsap.to(detailProduct, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '.product-detail-hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }

      const detailPearl = document.querySelector<HTMLElement>('.product-detail-pearl');
      if (detailPearl) {
        gsap.from(detailPearl, { opacity: 0, y: -42, scale: .78, duration: 1.2, delay: .28, ease: 'power3.out' });
        gsap.to(detailPearl, { y: 10, duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      gsap.utils.toArray<HTMLElement>('.product-detail-water i').forEach((ring, i) => {
        gsap.fromTo(ring,
          { scale: .84 + i * .02, opacity: .25 },
          { scale: 1.1 + i * .07, opacity: .05, duration: 3.2 + i * .55, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * .25 },
        );
      });

      const storyPearl = document.querySelector<HTMLElement>('.story-pearl');
      if (storyPearl) {
        gsap.to(storyPearl, {
          y: -16,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: { trigger: storyPearl, start: 'top 90%' },
        });
      }

      ScrollTrigger.refresh();
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: root, dependencies: [pathname], revertOnUpdate: true });

  return <div ref={root}>{children}</div>;
}
