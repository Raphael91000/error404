'use client';

import { useCallback, useRef, useState } from 'react';
import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export function SplineSceneBasic() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50, active: false });
  const { language } = useLanguage();
  const robotCard = translations[language].robotCard;

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setCursorPos({ x, y, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorPos((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-green-500/20"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="green" />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: cursorPos.active ? 1 : 0,
          background: `radial-gradient(300px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(16, 185, 129, 0.65), rgba(16, 185, 129, 0.25) 45%, transparent 70%)`,
          mixBlendMode: 'screen',
          filter: 'blur(12px)',
        }}
      />

      <div className="flex h-full relative z-10">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">
            {robotCard.title}
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            {robotCard.description}
          </p>
        </div>

        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
