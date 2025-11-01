'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import { motion } from 'framer-motion';

export default function ArticlesPage() {

  return (
    <main className="relative bg-black text-white min-h-screen">
      <AnimatedBackground />

      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Articles & Ressources
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explorez nos articles techniques, tutoriels et guides pour approfondir vos connaissances en IA et robotique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
          >
            <p className="text-lg text-gray-300">
              Aucun article n'est actuellement publié. Revenez bientôt pour découvrir nos prochaines actualités.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
