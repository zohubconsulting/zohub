import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import ClientLayoutWrapper from '../../components/ClientLayoutWrapper';

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'];

// Adicionado generateStaticParams para informar ao Next.js sobre os parâmetros válidos
export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params,
}: LayoutProps) {
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