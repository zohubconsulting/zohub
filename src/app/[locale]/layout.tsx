import { notFound } from 'next/navigation';

import ClientLayoutWrapper from '../../components/ClientLayoutWrapper';

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // ⚠️ Next.js exige await para acesso de `params` em layouts com rotas dinâmicas
  // Mesmo que `params` não seja uma Promise, isso evita warnings em dev
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
