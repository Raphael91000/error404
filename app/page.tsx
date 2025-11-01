'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
