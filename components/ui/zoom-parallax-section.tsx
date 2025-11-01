'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export function ZoomParallaxSection() {
  const { language } = useLanguage();
  const zoomParallax = translations[language].zoomParallax;

  const items = [
    {
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <span className="text-lg font-semibold uppercase tracking-[0.4em] text-white">
            {zoomParallax.intro.prefix}{' '}
            <span className="text-emerald-400">{zoomParallax.intro.highlight}</span>
          </span>
        </div>
      ),
    },
    ...zoomParallax.metrics.map((metric) => ({
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            {metric.label}
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">{metric.value}</h3>
          {metric.details.map((detail) => (
            <p key={detail} className="text-sm text-white/70">
              {detail}
            </p>
          ))}
        </>
      ),
    })),
  ];

  return (
    <section className="relative min-h-screen w-full bg-black text-white">
      <div className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-[30px]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-4">
            <TextRevealByWord
              text={zoomParallax.leadText}
              highlightWords={zoomParallax.leadHighlightWords}
              highlightClassName="text-emerald-400"
              baseClassName="text-white"
              containerClassName="h-[140vh]"
              textClassName="justify-center text-center text-3xl md:text-5xl font-light tracking-tight font-sans"
              initialVisibleCount={0}
            />
          </div>
        </div>
      </div>
      <ZoomParallax items={items} />
      <div className="h-16 md:h-20" />
    </section>
  );
}

