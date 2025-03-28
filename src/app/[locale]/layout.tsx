import { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import ClientLayoutWrapper from '../../components/ClientLayoutWrapper';

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'];

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  // ⚠️ Next.js exige await para acesso de `params` em layouts com rotas dinâmicas
  // Mesmo que `params` não seja uma Promise, isso evita warnings em dev
  const locale = params.locale;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return (
    <ClientLayoutWrapper locale={locale}>
      {children}
    </ClientLayoutWrapper>
  );
}
