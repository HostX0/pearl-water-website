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
      gsap.defaults({ ease: 'power3.out' });

      gsap.from('[data-page-enter]', { opacity: 0, y: 22, duration: .8 });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 46,
          duration: .95,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal-line]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: document.documentElement.dir === 'rtl' ? 'right center' : 'left center',
          duration: 1.05,
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

      const header = document.querySelector<HTMLElement>('[data-site-header]');
      if (header) {
        ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (self) => {
            const shouldHide = self.direction === 1 && self.scroll() > 180;
            gsap.to(header, { yPercent: shouldHide ? -125 : 0, duration: .32, ease: 'power2.out', overwrite: true });
          },
        });
      }

      const heroProduct = document.querySelector<HTMLElement>('.hero-product');
      if (heroProduct) {
        gsap.fromTo(heroProduct,
          { y: 88, opacity: 0, rotate: -2, scale: .86 },
          { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 1.35, delay: .08 },
        );
      }

      const heroPearl = document.querySelector<HTMLElement>('.hero-pearl');
      if (heroPearl) {
        gsap.from(heroPearl, { y: -54, opacity: 0, scale: .78, duration: 1.45, delay: .25 });
        gsap.to(heroPearl, { y: 12, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      const heroLogo = document.querySelector<HTMLElement>('.hero-logo-card');
      if (heroLogo) gsap.from(heroLogo, { opacity: 0, x: document.documentElement.dir === 'rtl' ? 24 : -24, scale: .94, duration: .9, delay: .55 });

      const hero = document.querySelector<HTMLElement>('.home-hero');
      if (hero) {
        const heroTl = gsap.timeline({
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 },
        });
        heroTl
          .to('.hero-copy', { y: -72, opacity: .38, ease: 'none' }, 0)
          .to('.hero-visual', { y: 48, scale: .94, ease: 'none' }, 0)
          .to('.hero-ripples', { scale: 1.16, rotate: 8, ease: 'none' }, 0)
          .to('.hero-glow', { scale: 1.18, opacity: .55, ease: 'none' }, 0);
      }

      gsap.utils.toArray<HTMLElement>('.ripple-ring').forEach((ring, i) => {
        gsap.to(ring, {
          scale: 1.18 + i * .08,
          opacity: .055,
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
      if (pageMark) gsap.from(pageMark, { opacity: 0, y: 40, scale: .88, duration: 1.1, delay: .12 });

      gsap.utils.toArray<HTMLElement>('.story-product-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 82,
          rotate: i % 2 ? 1.1 : -1.1,
          duration: 1,
          scrollTrigger: { trigger: card, start: 'top 84%', once: true },
        });
        const image = card.querySelector<HTMLElement>('img');
        if (image) {
          gsap.fromTo(image, { yPercent: 5 }, {
            yPercent: -7,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .8 },
          });
        }
      });

      const productStory = document.querySelector<HTMLElement>('.product-story');
      if (productStory) {
        gsap.fromTo('.product-story-copy', { y: 35 }, {
          y: -20,
          ease: 'none',
          scrollTrigger: { trigger: productStory, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      }

      const storyWave = document.querySelector<HTMLElement>('.story-wave');
      if (storyWave) {
        gsap.from(storyWave, {
          scaleX: 0,
          transformOrigin: document.documentElement.dir === 'rtl' ? 'right center' : 'left center',
          duration: 1.25,
          scrollTrigger: { trigger: storyWave, start: 'top 82%', once: true },
        });
      }

      const storyPearl = document.querySelector<HTMLElement>('.story-pearl');
      if (storyPearl) {
        gsap.to(storyPearl, { y: -16, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

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
        gsap.from(detailProduct, { opacity: 0, y: 70, scale: .88, rotate: -1.5, duration: 1.2, delay: .12 });
        gsap.to(detailProduct, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '.product-detail-hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }

      const detailPearl = document.querySelector<HTMLElement>('.product-detail-pearl');
      if (detailPearl) {
        gsap.from(detailPearl, { opacity: 0, y: -42, scale: .78, duration: 1.2, delay: .28 });
        gsap.to(detailPearl, { y: 10, duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      gsap.utils.toArray<HTMLElement>('.product-detail-water i').forEach((ring, i) => {
        gsap.fromTo(ring,
          { scale: .84 + i * .02, opacity: .25 },
          { scale: 1.1 + i * .07, opacity: .05, duration: 3.2 + i * .55, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * .25 },
        );
      });

      const mapVisual = document.querySelector<HTMLElement>('[data-map-visual]');
      if (mapVisual) {
        gsap.utils.toArray<HTMLElement>('.map-road').forEach((road, i) => {
          gsap.from(road, {
            scaleX: 0,
            transformOrigin: i % 2 ? 'right center' : 'left center',
            duration: 1.1 + i * .12,
            scrollTrigger: { trigger: mapVisual, start: 'top 82%', once: true },
          });
        });
        gsap.from('.map-pin-core', { opacity: 0, y: -36, scale: .6, duration: .9, ease: 'back.out(1.8)', scrollTrigger: { trigger: mapVisual, start: 'top 80%', once: true } });
        gsap.to('.map-pin-core', { y: -8, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.utils.toArray<HTMLElement>('.map-rings i').forEach((ring, i) => {
          gsap.to(ring, { scale: 1.22 + i * .18, opacity: 0, duration: 2.5, repeat: -1, delay: i * .55, ease: 'power1.out' });
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
