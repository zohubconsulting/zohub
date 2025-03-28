'use client';

import { useEffect, useState } from 'react';
import LanguageSuggestionBar from './LanguageSuggestionBar';

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'];

export default function LanguageDetector({ currentLocale }: { currentLocale: string }) {
  const [showLangBar, setShowLangBar] = useState(false);
  const [detectedLang, setDetectedLang] = useState<string | null>(null);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const matched = supportedLocales.find((loc) =>
      browserLang.startsWith(loc)
    );
    const detected = matched || 'pt-br';

    localStorage.setItem('detectedBrowserLanguage', detected);
    const preferred = localStorage.getItem('preferredLanguage');

    const shouldSuggest =
      currentLocale === 'pt-br' &&
      detected !== 'pt-br' &&
      preferred !== null &&
      preferred === 'pt-br';

    if (shouldSuggest) {
      setDetectedLang(detected);
      setShowLangBar(true);
    }
  }, [currentLocale]);

  if (!showLangBar || !detectedLang) return null;

  return (
    <LanguageSuggestionBar
      detectedLang={detectedLang}
      currentLocale={currentLocale}
    />
  );
}
