'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export function BackToHomeButton() {
  const { language } = useLanguage();
  const label = translations[language].backToHomeLabel;

  return (
    <Link
      href="/"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400 bg-black/40 backdrop-blur hover:bg-black/60 hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
    >
      <ArrowUp className="h-6 w-6" />
    </Link>
  );
}
