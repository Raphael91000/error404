'use client';

import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import { SplineScene } from '@/components/ui/spline';

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              qui va remplacer les humains?
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <div className="relative mx-auto h-full max-w-5xl">
          <Image
            src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75"
            alt="hero tablet mockup"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
            draggable={false}
          />
          <div className="absolute top-[15%] bottom-[14%] left-[8%] right-[8%] md:top-[14%] md:bottom-[13%] md:left-[9%] md:right-[9%] rounded-[2rem] overflow-hidden">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
