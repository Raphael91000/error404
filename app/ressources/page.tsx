'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, BookOpen, Video, FileCode } from 'lucide-react';

export default function RessourcesPage() {
  const categories = [
    {
      title: 'Frameworks & Bibliothèques',
      icon: FileCode,
      resources: [
        {
          name: 'TensorFlow',
          description: 'Framework open-source pour le machine learning développé par Google.',
          type: 'Framework',
          link: 'https://tensorflow.org',
        },
        {
          name: 'PyTorch',
          description: 'Bibliothèque de deep learning flexible et dynamique.',
          type: 'Framework',
          link: 'https://pytorch.org',
        },
        {
          name: 'OpenCV',
          description: 'Bibliothèque de vision par ordinateur en temps réel.',
          type: 'Library',
          link: 'https://opencv.org',
        },
      ],
    },
    {
      title: 'Tutoriels & Cours',
      icon: BookOpen,
      resources: [
        {
          name: 'Deep Learning Specialization',
          description: 'Cours complet sur le deep learning par Andrew Ng.',
          type: 'Cours',
          link: 'https://coursera.org',
        },
        {
          name: 'Fast.ai',
          description: 'Cours pratiques de deep learning pour tous.',
          type: 'Cours',
          link: 'https://fast.ai',
        },
        {
          name: 'Machine Learning Crash Course',
          description: 'Introduction rapide au ML par Google.',
          type: 'Tutorial',
          link: 'https://developers.google.com/machine-learning',
        },
      ],
    },
    {
      title: 'Vidéos & Conférences',
      icon: Video,
      resources: [
        {
          name: '3Blue1Brown - Neural Networks',
          description: 'Explications visuelles des réseaux de neurones.',
          type: 'Vidéo',
          link: 'https://youtube.com',
        },
        {
          name: 'Two Minute Papers',
          description: 'Résumés des dernières recherches en IA.',
          type: 'Chaîne',
          link: 'https://youtube.com',
        },
        {
          name: 'NeurIPS Conference',
          description: 'Conférences sur les avancées en IA.',
          type: 'Conférence',
          link: 'https://neurips.cc',
        },
      ],
    },
  ];

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
                Ressources & Outils
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une collection complète de frameworks, cours, tutoriels et outils pour développer vos projets IA.
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + index * 0.1 }}
                    >
                      <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                        <div className="p-6 space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                {resource.name}
                              </h3>
                              <span className="px-2 py-1 rounded text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                                {resource.type}
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-400 leading-relaxed">
                            {resource.description}
                          </p>

                          <Button
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                            onClick={() => window.open(resource.link, '_blank')}
                          >
                            <ExternalLink className="mr-2 w-4 h-4" />
                            Accéder
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Vous avez une ressource à partager?</h3>
              <p className="text-gray-300">
                Contribuez à notre collection en soumettant vos outils et tutoriels préférés.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              >
                Soumettre une ressource
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
