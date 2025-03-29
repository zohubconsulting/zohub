import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import ClientLayoutWrapper from '../../components/ClientLayoutWrapper';

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'] as const;
type Locale = typeof supportedLocales[number];

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  // Adicionando await mesmo que não seja necessário
  // Isso resolve o problema de tipagem no Next.js 15
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return (
    <ClientLayoutWrapper locale={locale}>
      {children}
    </ClientLayoutWrapper>
  );
}