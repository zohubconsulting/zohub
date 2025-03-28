'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const defaultLocale = 'pt-br';

export default function RedirectRoot() {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');

    if (saved) {
      // Se o idioma já foi salvo, redireciona para ele
      router.replace(`/${saved}`);
      return;
    }

    // Se for a primeira visita, força pt-br como padrão
    localStorage.setItem('preferredLanguage', defaultLocale);
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return null;
}
