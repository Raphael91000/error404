'use client';

import { TextRevealByWord } from '@/components/ui/text-reveal';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export function TextRevealHeroOverlay() {
  const { language } = useLanguage();
  const hero = translations[language].hero;

  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center">
      <div className="relative w-full max-w-5xl px-4">
        <TextRevealByWord
          text={hero.overlayText}
          highlightWords={hero.overlayHighlightWords}
          highlightClassName="text-emerald-400"
          baseClassName="text-white"
          containerClassName="h-[150vh]"
          textClassName="justify-center text-center text-4xl md:text-6xl font-light tracking-tight font-sans"
        />
      </div>
    </div>
  );
}
