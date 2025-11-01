'use client';

import { BackgroundPaths } from '@/components/ui/background-paths';
import { TextRevealHeroOverlay } from '@/components/ui/text-reveal-demo';
import { CustomStyleDemo } from '@/components/ui/animated-underline-text-one';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <BackgroundPaths title="Background Paths" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none" />
      <div className="absolute top-24 flex w-full justify-center">
        <CustomStyleDemo />
      </div>
      <TextRevealHeroOverlay />
    </section>
  );
}
