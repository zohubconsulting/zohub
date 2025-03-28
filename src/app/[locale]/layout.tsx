import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import ClientLayoutWrapper from '../../components/ClientLayoutWrapper';

// 1. Defina os locales suportados como constante tipada
const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'] as const;
type Locale = typeof supportedLocales[number];

// 2. Gere os parâmetros estáticos
export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

// 3. Defina a tipagem das props
interface LayoutProps {
  children: ReactNode;
  params: { locale: Locale }; // Usando o tipo específico
}

// 4. Implementação do layout
export default function LocaleLayout({
  children,
  params: { locale }
}: LayoutProps) {
  // A verificação agora é redundante (já que generateStaticParams garante os valores)
  // Mas mantemos para segurança durante desenvolvimento
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return (
    <ClientLayoutWrapper locale={locale}>
      {children}
    </ClientLayoutWrapper>
  );
}