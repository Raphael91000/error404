'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import Image from 'next/image';

export function ZoomParallaxSection() {

  const images = [
    {
      src: '/Parallax1.jpeg',
      alt: 'Modern architecture building',
      unoptimized: true,
    },
    {
      src: '/Parallax1.jpeg',
      alt: 'Digital numbers display',
      isVideo: false,
      unoptimized: true,
    },
    {
      src: '/Parallax3.jpeg',
      alt: 'Digital clock countdown',
      isVideo: false,
      unoptimized: true,
    },
    {
      src: '/Parallax4.jpeg',
      alt: 'Futuristic robot portrait',
      isVideo: false,
      unoptimized: true,
    },
    {
      src: '/Parallax5.jpeg',
      alt: 'Neon grid runners',
      isVideo: false,
      unoptimized: true,
    },
    {
      src: '/Parallax1.jpeg',
      alt: 'Cybernetic figure',
      isVideo: false,
      unoptimized: true,
    },
    {
      src: '/Parallax1.jpeg',
      alt: 'Digital globe matrix',
      isVideo: false,
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
      <ZoomParallax images={images} />
      <div className="h-[40vh]" />
    </section>
  );
}