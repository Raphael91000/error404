'use client';

import { TextRevealByWord } from '@/components/ui/text-reveal';

export function TextRevealHeroOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center">
      <div className="relative w-full max-w-5xl px-4">
        <TextRevealByWord
          text="Remplacer les humains? Oui mais par qui?"
          highlightWords={['oui', 'qui']}
          highlightClassName="text-emerald-400"
          baseClassName="text-white"
          containerClassName="h-[150vh]"
          textClassName="justify-center text-center"
        />
      </div>
    </div>
  );
}
