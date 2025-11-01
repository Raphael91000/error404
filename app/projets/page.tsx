'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export default function ProjetsPage() {
  const projects = [
    {
      title: 'NeuroVision AI',
      description: 'Système de reconnaissance d\'objets en temps réel utilisant YOLO et PyTorch.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Computer Vision', 'PyTorch', 'YOLO'],
      stars: 234,
      forks: 45,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      title: 'ChatBot Intelligent',
      description: 'Assistant conversationnel basé sur GPT avec mémoire contextuelle.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NLP', 'GPT', 'Python'],
      stars: 567,
      forks: 89,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      title: 'RoboArm Controller',
      description: 'Contrôle précis d\'un bras robotique via vision par ordinateur.',
      image: 'https://images.pexels.com/photos/8438981/pexels-photo-8438981.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Robotique', 'OpenCV', 'Arduino'],
      stars: 189,
      forks: 34,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Sentiment Analyzer',
      description: 'Analyse de sentiments sur les réseaux sociaux en temps réel.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NLP', 'Transformers', 'API'],
      stars: 345,
      forks: 67,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Autonomous Drone',
      description: 'Drone autonome avec navigation par IA et évitement d\'obstacles.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Robotique', 'RL', 'ROS'],
      stars: 423,
      forks: 78,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
    {
      title: 'Voice Cloning AI',
      description: 'Clonage de voix naturel avec synthèse vocale par deep learning.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Audio', 'GAN', 'TensorFlow'],
      stars: 678,
      forks: 123,
      github: 'https://github.com',
      demo: 'https://demo.example.com',
    },
  ];

  return (
    <main className="relative bg-black text-white min-h-screen">
      <AnimatedBackground />
      <Navbar />

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
                Projets IA & Robotique
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos projets open-source, démonstrations et cas d'usage réels de l'intelligence artificielle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </Button>
                      <Button
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              Voir plus de projets
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
