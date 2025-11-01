'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import HeroSection from '@/components/hero-section';
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic';
import { ZoomParallaxSection } from '@/components/ui/zoom-parallax-section';
import { IntelligenceCard } from '@/components/ui/neuron-card';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative bg-black text-white min-h-screen">
      <AnimatedBackground />
      <HeroSection />
      
      {/* Robot Spline Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <SplineSceneBasic />
          <IntelligenceCard />
        </div>
      </section>

      <ZoomParallaxSection />

      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {t.story.map((section, index) => (
            <TextRevealByWord
              key={`${language}-story-${index}`}
              text={section.text}
              highlightWords={section.highlightWords}
              containerClassName={section.containerClassName}
              textClassName={section.textClassName}
              baseClassName={section.baseClassName}
              highlightClassName="text-emerald-400"
              initialVisibleCount={section.initialVisibleCount}
            />
          ))}
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <TextRevealByWord
            text={t.benefits.title}
            highlightWords={t.benefits.highlightWords}
            containerClassName="h-[80vh]"
            textClassName="justify-center text-center text-2xl md:text-3xl font-light tracking-tight font-sans text-white"
            baseClassName="text-white"
            highlightClassName="text-emerald-400"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.cards.map((card) => (
              <div
                key={card.label}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black/70 to-black/90 p-6"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                  {card.label}
                </span>
                <h3 className="mt-6 text-4xl font-light text-white">{card.value}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {card.description}
                </p>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <TextRevealByWord
            text={t.reassurance.text}
            highlightWords={t.reassurance.highlightWords}
            containerClassName={t.reassurance.containerClassName}
            textClassName={t.reassurance.textClassName}
            baseClassName={t.reassurance.baseClassName}
            highlightClassName="text-emerald-400"
            initialVisibleCount={t.reassurance.initialVisibleCount}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
