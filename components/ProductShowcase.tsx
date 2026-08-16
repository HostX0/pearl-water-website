'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getContent } from '@/lib/content';
import { localizedProductPath, productImages, productSizes, type Locale } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const showcaseCopy = {
  ar: {
    eyebrow: 'أحجام اللؤلؤة',
    title: 'أربع أحجام، وكل لحظة إلها حجمها.',
    body: 'من سفرة البيت إلى المكتب، ومن الاجتماعات إلى الضيافة. نفس هوية اللؤلؤة بحجم يناسب طريقة استخدامك.',
    hint: 'مرّر لتكتشف المجموعة',
  },
  en: {
    eyebrow: 'Pearl formats',
    title: 'Four formats. One for every kind of moment.',
    body: 'From family tables and workdays to meetings and hospitality, Pearl keeps one familiar experience across four practical formats.',
    hint: 'Scroll to explore the range',
  },
  ku: {
    eyebrow: 'قەبارەکانی Pearl',
    title: 'چوار قەبارە، بۆ ساتە جیاوازەکانی ڕۆژ.',
    body: 'لە مێزی خێزانەوە بۆ کار و کۆبوونەوە و میوانداری، Pearl بە چوار قەبارەی پراکتیکی لەگەڵ ڕۆژەکەت دەگونجێت.',
    hint: 'بۆ بینینی کۆمەڵەکە سکرۆڵ بکە',
  },
} as const;

export function ProductShowcase({ locale }: { locale: Locale }) {
  const root = useRef<HTMLElement>(null);
  const c = getContent(locale);
  const copy = showcaseCopy[locale];
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft;

  useGSAP(() => {
    const scope = root.current;
    if (!scope) return;

    const layers = gsap.utils.toArray<HTMLElement>('[data-product-layer]', scope);
    const steps = gsap.utils.toArray<HTMLElement>('[data-product-step]', scope);
    const stageIndex = scope.querySelector<HTMLElement>('[data-stage-index]');
    const stageSize = scope.querySelector<HTMLElement>('[data-stage-size]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const activate = (index: number) => {
      layers.forEach((layer, layerIndex) => {
        const active = layerIndex === index;
        layer.classList.toggle('is-active', active);
        if (!reduced) {
          gsap.to(layer, {
            autoAlpha: active ? 1 : 0,
            scale: active ? 1 : .92,
            yPercent: active ? 0 : 4,
            duration: .55,
            ease: 'power3.out',
            overwrite: true,
          });
        }
      });
      steps.forEach((step, stepIndex) => step.classList.toggle('is-active', stepIndex === index));
      if (stageIndex) stageIndex.textContent = `0${index + 1}`;
      if (stageSize) stageSize.textContent = c.products.items[productSizes[index]].size;
    };

    gsap.set(layers, { autoAlpha: 0, scale: .94 });
    if (layers[0]) gsap.set(layers[0], { autoAlpha: 1, scale: 1 });
    activate(0);

    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 980px)', () => {
      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 58%',
          end: 'bottom 42%',
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });

      const stage = scope.querySelector<HTMLElement>('[data-product-stage]');
      const stepWrap = scope.querySelector<HTMLElement>('[data-product-steps]');
      if (stage && stepWrap) {
        ScrollTrigger.create({
          trigger: stepWrap,
          start: 'top 112px',
          end: 'bottom bottom-=48',
          pin: stage,
          pinSpacing: false,
          anticipatePin: 1,
        });
      }
    });

    mm.add('(max-width: 979px)', () => {
      gsap.utils.toArray<HTMLElement>('.product-showcase-mobile-stage', scope).forEach((stage) => {
        gsap.from(stage, {
          opacity: 0,
          y: 30,
          scale: .97,
          duration: .65,
          ease: 'power2.out',
          scrollTrigger: { trigger: stage, start: 'top 88%', once: true },
        });
      });
    });

    return () => mm.revert();
  }, { scope: root });

  return <section className="product-showcase section" ref={root}>
    <div className="site-shell product-showcase-heading" data-reveal>
      <span className="eyebrow">{copy.eyebrow}</span>
      <div><h2>{copy.title}</h2><p>{copy.body}</p></div>
    </div>

    <div className="site-shell product-showcase-grid">
      <aside className="product-showcase-stage" data-product-stage aria-hidden="true">
        <div className="product-stage-water"><i/><i/><i/></div>
        <div className="product-stage-pearl"/>
        <div className="product-stage-label"><span data-stage-index>01</span><strong data-stage-size>{c.products.items['1000'].size}</strong></div>
        <span className="product-stage-hint">{copy.hint}</span>
        {productSizes.map((key) => <div className={`product-stage-layer product-stage-${key}`} data-product-layer key={key}>
          <div className="product-stage-image-shell">
            <img src={productImages[key]} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer"/>
          </div>
        </div>)}
      </aside>

      <div className="product-showcase-steps" data-product-steps>
        {productSizes.map((key, index) => {
          const product = c.products.items[key];
          return <article className={`product-showcase-step ${index === 0 ? 'is-active' : ''}`} data-product-step key={key}>
            <div className="product-showcase-mobile-stage">
              <div className={`product-mobile-product product-mobile-${key}`}><img src={productImages[key]} alt={`Pearl ${product.size}`} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
            </div>
            <div className="product-step-top"><span>0{index + 1}</span><small>{product.use}</small></div>
            <h3>{product.size}</h3>
            <h4>{product.name}</h4>
            <p>{product.body}</p>
            <Link href={localizedProductPath(locale, key)} className="product-step-link">{c.common.learnMore}<Arrow size={17}/></Link>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
