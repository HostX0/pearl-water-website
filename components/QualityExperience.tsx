'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BadgeCheck,
  Droplets,
  Factory,
  Filter,
  FlaskConical,
  Microscope,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { getBrandCopy } from '@/lib/brand-copy';
import type { Locale } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stepIcons = [Droplets, Filter, Sparkles, RefreshCcw, Microscope, Factory, PackageCheck];
const standardIcons = [ShieldCheck, FlaskConical, BadgeCheck];
const trustIcons = [RefreshCcw, ShieldCheck, PackageCheck];

export function QualityExperience({ locale }: { locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const p = getBrandCopy(locale).quality;

  useGSAP(() => {
    if (!root.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = gsap.utils.toArray<HTMLElement>('[data-quality-step]', root.current);
    const visual = root.current.querySelector<HTMLElement>('[data-quality-visual]');
    const current = root.current.querySelector<HTMLElement>('[data-quality-current]');
    const currentLabel = root.current.querySelector<HTMLElement>('[data-quality-current-label]');
    const orb = root.current.querySelector<HTMLElement>('.quality-journey-orb');
    const progress = root.current.querySelector<HTMLElement>('.quality-journey-progress span');

    if (reduced) {
      steps[0]?.classList.add('is-active');
      return;
    }

    const mm = gsap.matchMedia();

    if (progress) {
      gsap.fromTo(progress, { scaleY: 0, transformOrigin: 'top center' }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current.querySelector('.quality-journey-grid'),
          start: 'top 68%',
          end: 'bottom 38%',
          scrub: .65,
        },
      });
    }

    steps.forEach((step, index) => {
      const inner = step.querySelector<HTMLElement>('.quality-step-inner');
      if (inner) {
        gsap.from(inner, {
          opacity: 0,
          y: 52,
          duration: .8,
          scrollTrigger: { trigger: step, start: 'top 86%', once: true },
        });
      }

      ScrollTrigger.create({
        trigger: step,
        start: 'top 58%',
        end: 'bottom 42%',
        onToggle: (self) => {
          if (!self.isActive) return;
          steps.forEach((item) => item.classList.remove('is-active'));
          step.classList.add('is-active');
          if (current) current.textContent = step.dataset.stepNo || `0${index + 1}`;
          if (currentLabel) currentLabel.textContent = step.dataset.stepTitle || '';
          if (orb) {
            gsap.fromTo(orb,
              { scale: .88, rotate: -8, filter: 'blur(2px)' },
              { scale: 1, rotate: 0, filter: 'blur(0px)', duration: .55, ease: 'back.out(1.5)', overwrite: true },
            );
          }
        },
      });
    });

    mm.add('(min-width: 901px)', () => {
      if (!visual) return;
      const pin = ScrollTrigger.create({
        trigger: root.current?.querySelector('.quality-journey-grid'),
        start: 'top 112px',
        end: 'bottom bottom-=32',
        pin: visual,
        pinSpacing: false,
        anticipatePin: 1,
      });
      return () => pin.kill();
    });

    gsap.utils.toArray<HTMLElement>('.quality-orbit i', root.current).forEach((ring, index) => {
      gsap.to(ring, {
        rotate: index % 2 ? -22 : 22,
        scale: 1.08 + index * .08,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current?.querySelector('.quality-journey-section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      });
    });

    const metric = root.current.querySelector<HTMLElement>('.testing-metric');
    if (metric) {
      gsap.from(metric, {
        scale: .72,
        opacity: 0,
        duration: .9,
        scrollTrigger: { trigger: metric, start: 'top 82%', once: true },
      });
      gsap.to('.testing-ring', {
        rotate: 220,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current.querySelector('.testing-section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, { scope: root });

  return <div ref={root}>
    <section className="section quality-journey-section">
      <div className="site-shell">
        <div className="quality-journey-head" data-reveal>
          <span className="eyebrow">{p.processEyebrow}</span>
          <div>
            <h2>{p.processTitle}</h2>
            <p>{p.processBody}</p>
          </div>
        </div>

        <div className="quality-journey-grid">
          <aside className="quality-journey-visual" data-quality-visual aria-hidden="true">
            <div className="quality-orbit"><i/><i/><i/></div>
            <div className="quality-journey-orb">
              <Droplets size={32}/>
            </div>
            <div className="quality-current">
              <span data-quality-current>01</span>
              <strong data-quality-current-label>{p.steps[0].title}</strong>
            </div>
            <div className="quality-visual-copy">
              <b>{p.processVisualTitle}</b>
              <small>{p.processVisualBody}</small>
            </div>
          </aside>

          <div className="quality-journey-list">
            <div className="quality-journey-progress" aria-hidden="true"><span/></div>
            {p.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return <article
                className={`quality-journey-step ${index === 0 ? 'is-active' : ''}`}
                key={step.no}
                data-quality-step
                data-step-no={step.no}
                data-step-title={step.title}
              >
                <div className="quality-step-inner">
                  <div className="quality-step-top">
                    <span className="quality-step-icon"><Icon size={21}/></span>
                    <b>{step.no}</b>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>

    <section className="section standards-section">
      <div className="site-shell">
        <div className="section-head split" data-reveal>
          <div><span className="eyebrow">{p.standardsEyebrow}</span><h2>{p.standardsTitle}</h2></div>
          <p>{p.standardsBody}</p>
        </div>
        <div className="standards-grid">
          {p.standards.map((item, index) => {
            const Icon = standardIcons[index];
            return <article className="standard-card" key={item.code} data-reveal>
              <div className="standard-card-top"><span><Icon size={22}/></span><b dir="ltr">{item.code}</b></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="section testing-section">
      <div className="site-shell testing-grid">
        <div className="testing-copy" data-reveal>
          <span className="eyebrow eyebrow-light">{p.testingEyebrow}</span>
          <h2>{p.testingTitle}</h2>
          <p>{p.testingBody}</p>
          <div className="testing-trust-grid">
            {p.trustPoints.map((point, index) => {
              const Icon = trustIcons[index];
              return <div className="testing-trust-item" key={point.title}>
                <span><Icon size={18}/></span>
                <div><strong>{point.title}</strong><small>{point.body}</small></div>
              </div>;
            })}
          </div>
        </div>
        <div className="testing-visual" data-reveal aria-hidden="true">
          <div className="testing-ring"/><div className="testing-ring ring-two"/>
          <div className="testing-metric">
            <strong dir="ltr">{p.testingMetric}</strong>
            <span>{p.testingMetricLabel}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section quality-closing-section">
      <div className="site-shell quality-closing-card" data-reveal>
        <span className="eyebrow">{locale === 'en' ? 'Pearl promise' : locale === 'ar' ? 'وعد اللؤلؤة' : 'بەڵێنی Pearl'}</span>
        <h2>{p.closingTitle}</h2>
        <p>{p.closingBody}</p>
      </div>
    </section>
  </div>;
}
