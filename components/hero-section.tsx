'use client';

import { BackgroundPaths } from '@/components/ui/background-paths';
import { TextRevealHeroOverlay } from '@/components/ui/text-reveal-demo';
import { AnimatedText } from '@/components/ui/animated-underline-text-one';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export default function HeroSection() {
  const { language } = useLanguage();
  const hero = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <BackgroundPaths />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none" />
      <div className="absolute top-24 flex w-full justify-center">
        <AnimatedText
          text={
            <>
              <span className="text-emerald-400">{hero.title.primary}</span>
              <span className="text-white"> {hero.title.secondary}</span>
            </>
          }
          textClassName="text-5xl md:text-6xl font-bold text-white"
          underlineClassName="hidden"
        />
      </div>
      <TextRevealHeroOverlay />
    </section>
  );
}
