'use client';

import AuroraWaves from '@/components/ui/aurora-waves';
import { TextRevealHeroOverlay } from '@/components/ui/text-reveal-demo';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <AuroraWaves />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none" />
      <TextRevealHeroOverlay />
    </section>
  );
}
