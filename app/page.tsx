'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import HeroSection from '@/components/hero-section';
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic';
import { ZoomParallaxSection } from '@/components/ui/zoom-parallax-section';
import { IntelligenceCard } from '@/components/ui/neuron-card';

export default function Home() {
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

      <Footer />
    </main>
  );
}
