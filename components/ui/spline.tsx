'use client';

import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-black/50">
            <div className="text-green-500 animate-pulse">
              Chargement du robot 3D...
            </div>
          </div>
        }
      >
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
