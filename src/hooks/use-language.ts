"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

type LanguageContextValue = {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
  isLoaded: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = (typeof window !== 'undefined' && localStorage.getItem('language')) as Language | null;
      if (saved === 'es' || saved === 'de') {
        setLanguage(saved);
      }
    } catch {}
    setIsLoaded(true);
  }, []);

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    } catch {}
  };

  const value: LanguageContextValue = {
    language,
    switchLanguage,
    t: translations[language],
    isLoaded,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
