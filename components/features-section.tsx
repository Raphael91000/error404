'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Lightbulb, Rocket } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Projets Innovants',
      description: 'Découvrez des projets open-source, des cas d\'usage réels et des démonstrations interactives.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Rocket,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté de passionnés, partagez vos projets et apprenez ensemble.',
      gradient: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Explorez l'intelligence artificielle
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une plateforme pour explorer, apprendre et créer avec l'intelligence artificielle et la robotique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                <div className="p-8 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}