'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { TextRevealByWord } from '@/components/ui/text-reveal';

export function ZoomParallaxSection() {

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Modern architecture building',
    },
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Urban cityscape at sunset',
    },
    {
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Abstract geometric pattern',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Mountain landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Minimalist design elements',
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Ocean waves and beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Forest trees and sunlight',
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
