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

    const mm = gsap.matchMedia();
    const rtl = document.documentElement.dir === 'rtl';

    const ctx = gsap.context(() => {
      gsap.defaults({ ease: 'power3.out' });

      const progress = document.querySelector<HTMLElement>('.scroll-progress-bar');
      if (progress) {
        gsap.fromTo(progress,
          { scaleX: 0, transformOrigin: rtl ? 'right center' : 'left center' },
          { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .14 } },
        );
      }

      gsap.from('[data-page-enter]', { opacity: 0, y: 22, duration: .8 });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: .85,
          scrollTrigger: { trigger: el, start: 'top 89%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal-line]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: rtl ? 'right center' : 'left center',
          duration: 1.05,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      /* Full parallax is reserved for devices with enough viewport space. */
      mm.add('(min-width: 901px)', () => {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const speed = Number(el.dataset.parallax || 10);
          gsap.to(el, {
            yPercent: speed,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: .9 },
          });
        });

        const header = document.querySelector<HTMLElement>('[data-site-header]');
        if (header) {
          ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => {
              const shouldHide = self.direction === 1 && self.scroll() > 190;
              gsap.to(header, { yPercent: shouldHide ? -125 : 0, duration: .3, ease: 'power2.out', overwrite: true });
            },
          });
        }

        const hero = document.querySelector<HTMLElement>('.home-hero');
        if (hero) {
          gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 } })
            .to('.hero-copy', { y: -64, opacity: .42, ease: 'none' }, 0)
            .to('.hero-visual', { y: 42, scale: .95, ease: 'none' }, 0)
            .to('.hero-ripples', { scale: 1.14, rotate: 7, ease: 'none' }, 0)
            .to('.hero-glow', { scale: 1.15, opacity: .56, ease: 'none' }, 0);
        }

        gsap.utils.toArray<HTMLElement>('.story-product-card').forEach((card) => {
          const image = card.querySelector<HTMLElement>('img');
          if (image) {
            gsap.fromTo(image, { yPercent: 4 }, {
              yPercent: -6,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .8 },
            });
          }
        });
      });

      /* Tablet motion keeps depth but avoids sticky/parallax fatigue. */
      mm.add('(min-width: 681px) and (max-width: 900px)', () => {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const speed = Number(el.dataset.parallax || 10) * .28;
          gsap.to(el, {
            yPercent: speed,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          });
        });
      });

      /* Mobile keeps the header reachable and prioritizes fast, stable content. */
      mm.add('(max-width: 680px)', () => {
        const header = document.querySelector<HTMLElement>('[data-site-header]');
        if (header) gsap.set(header, { yPercent: 0 });
      });

      gsap.utils.toArray<HTMLElement>('.ripple-ring').forEach((ring, i) => {
        gsap.to(ring, {
          scale: 1.16 + i * .07,
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
          x: i % 2 ? -14 : 14,
          y: i % 2 ? 12 : -14,
          scale: i % 2 ? 1.05 : .97,
          duration: 5.2 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      const pageMark = document.querySelector<HTMLElement>('.page-hero-mark');
      if (pageMark) gsap.from(pageMark, { opacity: 0, y: 34, scale: .9, duration: 1, delay: .1 });

      const heroLogo = document.querySelector<HTMLElement>('.hero-logo-card');
      if (heroLogo) gsap.from(heroLogo, { opacity: 0, x: rtl ? 22 : -22, scale: .95, duration: .85, delay: .45 });

      gsap.utils.toArray<HTMLElement>('.story-product-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 62,
          rotate: i % 2 ? .7 : -.7,
          duration: .9,
          scrollTrigger: { trigger: card, start: 'top 86%', once: true },
        });
      });

      const productStory = document.querySelector<HTMLElement>('.product-story');
      if (productStory) {
        mm.add('(min-width: 901px)', () => {
          gsap.fromTo('.product-story-copy', { y: 28 }, {
            y: -16,
            ease: 'none',
            scrollTrigger: { trigger: productStory, start: 'top bottom', end: 'bottom top', scrub: 1 },
          });
        });
      }

      const storyWave = document.querySelector<HTMLElement>('.story-wave');
      if (storyWave) {
        gsap.from(storyWave, {
          scaleX: 0,
          transformOrigin: rtl ? 'right center' : 'left center',
          duration: 1.2,
          scrollTrigger: { trigger: storyWave, start: 'top 82%', once: true },
        });
      }

      const storyPearl = document.querySelector<HTMLElement>('.story-pearl');
      if (storyPearl) gsap.to(storyPearl, { y: -14, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      gsap.utils.toArray<HTMLElement>('.quality-drop').forEach((drop, i) => {
        gsap.from(drop, {
          opacity: 0,
          scale: .4,
          rotate: -14,
          duration: .7,
          delay: i * .045,
          ease: 'back.out(1.6)',
          scrollTrigger: { trigger: drop, start: 'top 88%', once: true },
        });
      });

      const qualityGrid = document.querySelector<HTMLElement>('.quality-page-grid');
      if (qualityGrid) {
        gsap.fromTo(qualityGrid, { '--quality-progress': '0%' }, {
          '--quality-progress': '100%',
          ease: 'none',
          scrollTrigger: { trigger: qualityGrid, start: 'top 72%', end: 'bottom 35%', scrub: .7 },
        });
      }

      const detailProduct = document.querySelector<HTMLElement>('.product-detail-image-shell img');
      if (detailProduct) {
        gsap.from(detailProduct, { opacity: 0, y: 54, scale: .9, rotate: -1, duration: 1.05, delay: .1 });
        mm.add('(min-width: 901px)', () => {
          gsap.to(detailProduct, {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: '.product-detail-hero', start: 'top top', end: 'bottom top', scrub: 1 },
          });
        });
      }

      const detailPearl = document.querySelector<HTMLElement>('.product-detail-pearl');
      if (detailPearl) {
        gsap.from(detailPearl, { opacity: 0, y: -34, scale: .8, duration: 1.05, delay: .25 });
        gsap.to(detailPearl, { y: 9, duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      gsap.utils.toArray<HTMLElement>('.product-detail-water i').forEach((ring, i) => {
        gsap.fromTo(ring,
          { scale: .86 + i * .02, opacity: .22 },
          { scale: 1.08 + i * .06, opacity: .045, duration: 3.2 + i * .5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * .22 },
        );
      });

      const mapVisual = document.querySelector<HTMLElement>('[data-map-visual]');
      if (mapVisual) {
        gsap.utils.toArray<HTMLElement>('.map-road').forEach((road, i) => {
          gsap.from(road, {
            scaleX: 0,
            transformOrigin: i % 2 ? 'right center' : 'left center',
            duration: 1 + i * .1,
            scrollTrigger: { trigger: mapVisual, start: 'top 84%', once: true },
          });
        });
        gsap.from('.map-pin-core', { opacity: 0, y: -30, scale: .65, duration: .8, ease: 'back.out(1.7)', scrollTrigger: { trigger: mapVisual, start: 'top 82%', once: true } });
        gsap.to('.map-pin-core', { y: -7, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.utils.toArray<HTMLElement>('.map-rings i').forEach((ring, i) => {
          gsap.to(ring, { scale: 1.18 + i * .16, opacity: 0, duration: 2.5, repeat: -1, delay: i * .52, ease: 'power1.out' });
        });
      }

    }, root);

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      mm.revert();
      ctx.revert();
    };
  }, { scope: root, dependencies: [pathname], revertOnUpdate: true });

  return <div ref={root}>{children}</div>;
}
