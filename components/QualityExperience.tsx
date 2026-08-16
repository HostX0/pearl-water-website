'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, Droplets, Factory, Filter, FlaskConical, Microscope, PackageCheck, RefreshCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { getBrandCopy } from '@/lib/brand-copy';
import { media } from '@/lib/media';
import type { Locale } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stepIcons = [Droplets, Filter, Sparkles, RefreshCcw, Microscope, Factory, PackageCheck];
const standardIcons = [ShieldCheck, FlaskConical, BadgeCheck];
const trustIcons = [RefreshCcw, ShieldCheck, PackageCheck];

const visualCopy = {
  en: {
    eyebrow: 'Inside Pearl quality',
    title: 'Quality is easier to trust when you can see the work behind it.',
    body: 'The plant, the laboratory, sanitation routines and filling process all tell the same story: consistency is built one controlled step at a time.',
    hygiene: 'Clean production is part of the process',
    proof: 'From treatment to filling',
  },
  ar: {
    eyebrow: 'داخل جودة اللؤلؤة',
    title: 'الجودة تصير أوضح من تشوف الشغل اللي وراها.',
    body: 'المعمل، المختبر، التعقيم والتعبئة كلها أجزاء من نفس القصة: الثبات ما يجي بالصدفة، يجي من خطوات تتكرر بعناية كل يوم.',
    hygiene: 'النظافة جزء من عملية الإنتاج',
    proof: 'من المعالجة إلى التعبئة',
  },
  ku: {
    eyebrow: 'لە ناو کوالێتی Pearl',
    title: 'کوالێتی کاتێک جێی متمانەترە کە کارەکەی پشتەوە ببینیت.',
    body: 'کارگە، تاقیگە، پاکوخاوێنی و پڕکردنەوە هەموویان بەشێکن لە یەک چیرۆک: یەکسانی بە هەنگاوی ڕێکخراو دروست دەبێت.',
    hygiene: 'پاکوخاوێنی بەشێکە لە بەرهەمهێنان',
    proof: 'لە چارەسەر تا پڕکردنەوە',
  },
} as const;

export function QualityExperience({ locale }: { locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const p = getBrandCopy(locale).quality;
  const v = visualCopy[locale];

  useGSAP(() => {
    const scope = root.current;
    if (!scope) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = gsap.utils.toArray<HTMLElement>('[data-quality-step]', scope);
    const layers = gsap.utils.toArray<HTMLElement>('[data-quality-graphic]', scope);
    const visual = scope.querySelector<HTMLElement>('[data-quality-visual]');
    const current = scope.querySelector<HTMLElement>('[data-quality-current]');
    const currentLabel = scope.querySelector<HTMLElement>('[data-quality-current-label]');
    const currentBody = scope.querySelector<HTMLElement>('[data-quality-current-body]');
    const progress = scope.querySelector<HTMLElement>('.quality-journey-progress span');
    const journeyGrid = scope.querySelector<HTMLElement>('.quality-journey-grid');
    const journeySection = scope.querySelector<HTMLElement>('.quality-journey-section');
    const testingSection = scope.querySelector<HTMLElement>('.testing-section');
    const metric = scope.querySelector<HTMLElement>('.testing-metric');

    const activate = (index: number) => {
      const step = p.steps[index];
      steps.forEach((item, stepIndex) => item.classList.toggle('is-active', stepIndex === index));
      layers.forEach((layer, layerIndex) => {
        const active = layerIndex === index;
        layer.classList.toggle('is-active', active);
        if (!reduced) {
          gsap.to(layer, {
            autoAlpha: active ? 1 : 0,
            scale: active ? 1 : .82,
            rotate: active ? 0 : layerIndex % 2 ? -8 : 8,
            duration: .5,
            ease: 'power3.out',
            overwrite: true,
          });
        }
      });
      if (current) current.textContent = step.no;
      if (currentLabel) currentLabel.textContent = step.title;
      if (currentBody) currentBody.textContent = step.body;
    };

    gsap.set(layers, { autoAlpha: 0, scale: .86 });
    if (layers[0]) gsap.set(layers[0], { autoAlpha: 1, scale: 1 });
    activate(0);

    if (reduced) return;

    const mm = gsap.matchMedia();

    if (progress && journeyGrid) {
      gsap.fromTo(progress,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: journeyGrid, start: 'top 70%', end: 'bottom 38%', scrub: .65 } },
      );
    }

    steps.forEach((step, index) => {
      const inner = step.querySelector<HTMLElement>('.quality-step-inner');
      if (inner) {
        gsap.from(inner, {
          opacity: 0,
          y: 44,
          duration: .75,
          ease: 'power2.out',
          scrollTrigger: { trigger: step, start: 'top 86%', once: true },
        });
      }
      ScrollTrigger.create({
        trigger: step,
        start: 'top 58%',
        end: 'bottom 42%',
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      });
    });

    mm.add('(min-width: 1024px)', () => {
      if (!visual || !journeyGrid) return;
      const pin = ScrollTrigger.create({
        trigger: journeyGrid,
        start: 'top 112px',
        end: 'bottom bottom-=36',
        pin: visual,
        pinSpacing: false,
        anticipatePin: 1,
      });
      return () => pin.kill();
    });

    mm.add('(max-width: 1023px)', () => {
      gsap.utils.toArray<HTMLElement>('.quality-stage-inline', scope).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: .92,
          y: 24,
          duration: .6,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    });

    if (journeySection) {
      gsap.utils.toArray<HTMLElement>('.quality-orbit i', scope).forEach((ring, index) => {
        gsap.to(ring, {
          rotate: index % 2 ? -32 : 32,
          scale: 1.08 + index * .08,
          ease: 'none',
          scrollTrigger: { trigger: journeySection, start: 'top bottom', end: 'bottom top', scrub: 1.1 },
        });
      });
    }

    if (metric && testingSection) {
      gsap.from(metric, { scale: .75, opacity: 0, duration: .85, scrollTrigger: { trigger: metric, start: 'top 82%', once: true } });
      gsap.to('.testing-ring', { rotate: 220, ease: 'none', scrollTrigger: { trigger: testingSection, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    }

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, { scope: root });

  return <div ref={root}>
    <section className="section quality-media-intro">
      <div className="site-shell quality-media-card" data-reveal>
        <div className="quality-media-photo" data-parallax="4"><img src={media.quality.hero} alt={v.title} loading="eager" decoding="async" referrerPolicy="no-referrer"/></div>
        <div><span className="eyebrow">{v.eyebrow}</span><h2>{v.title}</h2><p>{v.body}</p></div>
      </div>
    </section>

    <section className="section quality-journey-section">
      <div className="site-shell">
        <div className="quality-journey-head" data-reveal><span className="eyebrow">{p.processEyebrow}</span><div><h2>{p.processTitle}</h2><p>{p.processBody}</p></div></div>
        <div className="quality-journey-grid">
          <aside className="quality-journey-visual quality-journey-visual-photo" data-quality-visual>
            <img className="quality-journey-bg" src={media.quality.factory} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer"/>
            <div className="quality-journey-shade"/>
            <div className="quality-orbit" aria-hidden="true"><i/><i/><i/></div>
            <div className="quality-graphic-stack" aria-hidden="true">
              {p.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return <div className={`quality-graphic-layer quality-graphic-${index + 1} ${index === 0 ? 'is-active' : ''}`} data-quality-graphic key={step.no}>
                  <div className="quality-graphic-core"><Icon size={64}/></div>
                  <i className="quality-graphic-ring ring-a"/><i className="quality-graphic-ring ring-b"/>
                  <b/><em/><small/>
                </div>;
              })}
            </div>
            <div className="quality-current"><span data-quality-current>01</span><strong data-quality-current-label>{p.steps[0].title}</strong></div>
            <div className="quality-visual-copy"><b>{p.processVisualTitle}</b><small data-quality-current-body>{p.steps[0].body}</small></div>
          </aside>

          <div className="quality-journey-list">
            <div className="quality-journey-progress" aria-hidden="true"><span/></div>
            {p.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return <article className={`quality-journey-step ${index === 0 ? 'is-active' : ''}`} key={step.no} data-quality-step>
                <div className="quality-stage-inline" aria-hidden="true"><Icon size={34}/><span>{step.no}</span></div>
                <div className="quality-step-inner">
                  <div className="quality-step-top"><span className="quality-step-icon"><Icon size={21}/></span><b>{step.no}</b></div>
                  <h3>{step.title}</h3><p>{step.body}</p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>

    <section className="section standards-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal><div><span className="eyebrow">{p.standardsEyebrow}</span><h2>{p.standardsTitle}</h2></div><p>{p.standardsBody}</p></div>
        <div className="standards-layout">
          <figure className="standards-visual" data-reveal><img src={media.home.standards} alt={p.standardsTitle} loading="lazy" decoding="async" referrerPolicy="no-referrer"/><figcaption>{v.proof}</figcaption></figure>
          <div className="standards-grid">{p.standards.map((item, index) => {
            const Icon = standardIcons[index];
            return <article className="standard-card" key={item.code} data-reveal><div className="standard-card-top"><span><Icon size={22}/></span><b dir="ltr">{item.code}</b></div><h3>{item.title}</h3><p>{item.body}</p></article>;
          })}</div>
        </div>
      </div>
    </section>

    <section className="section testing-section">
      <div className="site-shell testing-grid">
        <div className="testing-copy" data-reveal><span className="eyebrow eyebrow-light">{p.testingEyebrow}</span><h2>{p.testingTitle}</h2><p>{p.testingBody}</p><div className="testing-trust-grid">{p.trustPoints.map((point, index) => {
          const Icon = trustIcons[index];
          return <div className="testing-trust-item" key={point.title}><span><Icon size={18}/></span><div><strong>{point.title}</strong><small>{point.body}</small></div></div>;
        })}</div></div>
        <div className="testing-visual testing-visual-photo" data-reveal aria-hidden="true"><img src={media.quality.lab} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer"/><div className="testing-ring"/><div className="testing-ring ring-two"/><div className="testing-metric"><strong dir="ltr">{p.testingMetric}</strong><span>{p.testingMetricLabel}</span></div></div>
      </div>
      <div className="site-shell hygiene-proof" data-reveal><div><span className="eyebrow eyebrow-light">Pearl</span><h3>{v.hygiene}</h3></div><img src={media.quality.hygiene} alt={v.hygiene} loading="lazy" decoding="async" referrerPolicy="no-referrer"/></div>
    </section>

    <section className="section quality-closing-section"><div className="site-shell quality-closing-card" data-reveal><span className="eyebrow">Pearl</span><h2>{p.closingTitle}</h2><p>{p.closingBody}</p></div></section>
  </div>;
}
