'use client';

import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';
import HeroSection from '@/components/hero-section';
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic';
import { ZoomParallaxSection } from '@/components/ui/zoom-parallax-section';
import { IntelligenceCard } from '@/components/ui/neuron-card';
import { TextRevealByWord } from '@/components/ui/text-reveal';

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

      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <TextRevealByWord
            text="L’IA et les robots remplacent peu à peu les humains"
            highlightWords={['l’ia', 'robots', 'humains']}
            highlightClassName="text-emerald-400"
            baseClassName="text-white"
            containerClassName="h-[100vh]"
            textClassName="justify-center text-center text-3xl md:text-4xl font-light tracking-tight font-sans"
            initialVisibleCount={0}
          />

          <TextRevealByWord
            text="L’intelligence artificielle bouleverse le monde du travail. En deux ans, plus d’un milliard de personnes utilisent désormais des outils d’IA, et près de 80 % des entreprises y ont recours. Résultat : de nombreuses tâches autrefois humaines sont aujourd’hui automatisées."
            highlightWords={['intelligence', 'artificielle', 'travail', 'milliard', 'entreprises', 'humaines', 'automatisées', 'd’ia']}
            highlightClassName="text-emerald-400"
            baseClassName="text-gray-300"
            containerClassName="h-[120vh]"
            textClassName="text-lg leading-relaxed md:text-xl font-light font-sans"
            initialVisibleCount={3}
          />

          <TextRevealByWord
            text="Les robots et logiciels d’IA effectuent sans pause des opérations longues, répétitives ou à faible valeur ajoutée — saisie de données, assistance client, comptabilité, fabrication. Là où un salarié travaillait des heures, la machine agit en quelques secondes, sans fatigue ni coût supplémentaire."
            highlightWords={['robots', 'logiciels', 'opérations', 'assistance', 'comptabilité', 'fabrication', 'machine']}
            highlightClassName="text-emerald-400"
            baseClassName="text-gray-300"
            containerClassName="h-[120vh]"
            textClassName="text-lg leading-relaxed md:text-xl font-light font-sans"
            initialVisibleCount={3}
          />

          <TextRevealByWord
            text="Cette efficacité a un revers : selon le cabinet Challenger, plus de 30 000 emplois ont déjà été supprimés aux États-Unis en 2024-2025 à cause de l’IA et de l’automatisation. Les entreprises y voient une solution pour réduire les coûts et augmenter leur productivité."
            highlightWords={['efficacité', 'challenger', 'emplois', 'l’ia', 'automatisation', 'entreprises', 'productivité', 'coûts']}
            highlightClassName="text-emerald-400"
            baseClassName="text-gray-300"
            containerClassName="h-[120vh]"
            textClassName="text-lg leading-relaxed md:text-xl font-light font-sans"
            initialVisibleCount={3}
          />
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <TextRevealByWord
            text="Pourquoi les entreprises accélèrent sur l’automatisation IA"
            highlightWords={['entreprises', 'automatisation', 'ia']}
            highlightClassName="text-emerald-400"
            baseClassName="text-white"
            containerClassName="h-[80vh]"
            textClassName="justify-center text-center text-2xl md:text-3xl font-light tracking-tight font-sans"
            initialVisibleCount={0}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Réduction des coûts',
                value: '-32 %',
                description: 'Dépenses opérationnelles en moins après déploiement IA (McKinsey).',
              },
              {
                label: 'Productivité accrue',
                value: '+41 %',
                description: 'Gain moyen sur la production et la livraison de services (Accenture).',
              },
              {
                label: 'Disponibilité 24/7',
                value: '+168 h',
                description: 'Capacité horaire supplémentaire sans interruption humaine.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black/70 to-black/90 p-6"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                  {card.label}
                </span>
                <h3 className="mt-6 text-4xl font-light text-white">{card.value}</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {card.description}
                </p>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <TextRevealByWord
            text="Mais ne t’inquiète pas : ils ne pourront pas remplacer l’humain sur tous les points. Des postes comme chef d’entreprise, CFO ou CTO exigent des compétences uniques et surtout des prises de décisions. Une IA ou un robot ne peut pas reproduire cette responsabilité. Tu as bien compris : le seul moyen de ne pas te faire remplacer, c’est d’être compétent."
            highlightWords={['humain', 'chef', 'cfo', 'cto', 'décisions', 'ia', 'robot', 'compétent']}
            highlightClassName="text-emerald-400"
            baseClassName="text-gray-300"
            containerClassName="h-[120vh]"
            textClassName="text-lg leading-relaxed md:text-xl font-light font-sans"
            initialVisibleCount={5}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
