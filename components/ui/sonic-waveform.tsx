'use client';

import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

const SonicWaveformCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const lineCount = 60;
      const segmentCount = 80;
      const height = canvas.height / 2;

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const progress = i / lineCount;
        const colorIntensity = Math.sin(progress * Math.PI);
        ctx.strokeStyle = `rgba(0, 255, 192, ${colorIntensity * 0.5})`;
        ctx.lineWidth = 1.5;

        for (let j = 0; j < segmentCount + 1; j++) {
          const x = (j / segmentCount) * canvas.width;
          const distToMouse = Math.hypot(x - mouse.x, height - mouse.y);
          const mouseEffect = Math.max(0, 1 - distToMouse / 400);
          const noise = Math.sin(j * 0.1 + time + i * 0.2) * 20;
          const spike = Math.cos(j * 0.2 + time + i * 0.1) * Math.sin(j * 0.05 + time) * 50;
          const y = height + noise + spike * (1 + mouseEffect * 2);

          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full bg-black" />;
};

const SonicWaveformHero = () => {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 + 0.5, duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    }),
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <SonicWaveformCanvas />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="relative z-20 p-6 text-center">
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
        >
          le remplacement des humains ? <span className="text-emerald-400">oui</span> mais par{' '}
          <span className="text-emerald-400">qui</span> ?
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400"
        >
          Translate complex data streams into intuitive, interactive soundscapes. Hear the patterns, feel the insights.
        </motion.p>
      </div>
    </div>
  );
};

export default SonicWaveformHero;
