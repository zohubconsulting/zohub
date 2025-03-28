'use client';

import TopLoader from './TopLoader';
import MenuHeader from './MenuHeader';
import LanguageDetector from './LanguageDetector';

export default function ClientLayoutWrapper({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <LanguageDetector currentLocale={locale} />
      <TopLoader />
      <MenuHeader locale={locale} />
      <main>{children}</main>
    </>
  );
}
