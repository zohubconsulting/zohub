'use client';

import TopLoader from './TopLoader';
import MenuHeader from './MenuHeader';
import LanguageDetector from './LanguageDetector';

interface ClientLayoutWrapperProps {
  locale: string; 
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({ locale, children }: ClientLayoutWrapperProps) {
  return (
    <>
      <LanguageDetector currentLocale={locale} />
      <TopLoader />
      <MenuHeader locale={locale} />
      <main>{children}</main>
    </>
  );
}
