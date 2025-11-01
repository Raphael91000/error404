'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRevealByWord } from '@/components/ui/text-reveal';

export function ZoomParallaxSection() {

  const items = [
    {
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <span className="text-lg font-semibold uppercase tracking-[0.4em] text-white">
            Je t&apos;explique <span className="text-emerald-400">pourquoi</span>
          </span>
        </div>
      ),
    },
    {
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            2024 • Adoption
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">~800&nbsp;M</h3>
          <p className="text-sm text-white/70">
            Utilisateurs mensuels d&apos;IA dans le monde · DataReportal / Statista
          </p>
          <p className="text-sm text-white/70">
            78&nbsp;% des organisations mondiales intègrent l&apos;IA · Stanford AI Index
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            2024 • Impact social
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">12&nbsp;742</h3>
          <p className="text-sm text-white/70">
            Postes supprimés aux USA citant l&apos;IA (jan–sept) · Challenger Gray
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            2025 • Adoption
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">&gt;1&nbsp;Md</h3>
          <p className="text-sm text-white/70">
            Utilisateurs mensuels d&apos;IA dans le monde · DataReportal 2025
          </p>
          <p className="text-sm text-white/70">
            34&nbsp;% des adultes US utilisent ChatGPT · Pew Research
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            2025 • Travail
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">21&nbsp;%</h3>
          <p className="text-sm text-white/70">
            Travailleurs US qui utilisent l&apos;IA au quotidien · Pew Research
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            2025 • Impact social
          </span>
          <h3 className="text-3xl font-semibold leading-tight text-white">17&nbsp;375</h3>
          <p className="text-sm text-white/70">
            Postes supprimés aux USA citant explicitement l&apos;IA (jan–sept) · Challenger Gray
          </p>
          <p className="text-sm text-white/70">
            20&nbsp;219 suppressions pour &laquo;&nbsp;mises à jour technologiques&nbsp;&raquo;
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-black text-white">
      <div className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-[30px]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-4">
            <TextRevealByWord
              text="Et crois moi ce n'est qu'une question de temps"
              highlightWords={['crois', 'question', 'temps']}
              highlightClassName="text-emerald-400"
              baseClassName="text-white"
              containerClassName="h-[140vh]"
              textClassName="justify-center text-center text-3xl md:text-5xl font-light tracking-tight font-sans"
              initialVisibleCount={0}
            />
          </div>
        </div>
      </div>
      <ZoomParallax items={items} />
      <div className="h-[40vh]" />
    </section>
  );
}
