'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const footer = translations[language].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="mb-4 block text-xl font-bold text-emerald-400">
              NeuroBots <span className="text-gray-400 text-base font-normal">by R</span>
            </span>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{footer.navigationTitle}</h3>
            <ul className="space-y-2">
              {footer.links.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{footer.legalTitle}</h3>
            <ul className="space-y-2">
              {footer.links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            &copy; {year}{' '}
            <span className="text-emerald-400 font-medium">NeuroBots</span>. {footer.rightsSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
