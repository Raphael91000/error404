'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AuroraWaves from '@/components/ui/aurora-waves';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Aurora Waves Background */}
      <div className="absolute inset-0">
        <AuroraWaves />
      </div>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Interactive 3D
            </span>
            <br />
            <span className="text-white">
              Intelligence
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Plongez dans l'univers fascinant de l'IA et de la robotique.
            Découvrez des projets innovants et des ressources pour maîtriser les technologies de demain.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projets">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white group"
              >
                Explorer les projets
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}