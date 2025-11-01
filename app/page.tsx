'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CTASection from '@/components/cta-section';
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic';

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <AnimatedBackground />
      <HeroSection />
      
      {/* Robot Spline Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <SplineSceneBasic />
        </div>
      </section>
      
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
