'use client';

import { Language, translations } from '@/lib/translations';
import { useLanguage } from '@/components/language-provider';

const languages: Language[] = ['fr', 'en'];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const label = translations[language].languageToggleLabel;

  return (
    <div
      role="group"
      aria-label={label}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/70 px-2 py-1 shadow-lg shadow-emerald-500/20 backdrop-blur"
    >
      {languages.map((option) => {
        const isActive = option === language;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-emerald-500 text-black'
                : 'text-emerald-300 hover:text-emerald-200'
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
