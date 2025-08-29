"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSelector() {
  const { language, switchLanguage, isLoaded } = useLanguage();

  if (!isLoaded) {
    return <div className="flex items-center gap-2">
      <Languages className="w-4 h-4" />
      <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
    </div>;
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4" />
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => {
          console.log('Clicked ES, current language:', language);
          switchLanguage('es');
        }}
      >
        ES
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        size="sm"
        onClick={() => {
          console.log('Clicked DE, current language:', language);
          switchLanguage('de');
        }}
      >
        DE
      </Button>
    </div>
  );
}
