'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const defaultLocale = 'pt-br';

export default function RedirectRoot() {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split('; ').reduce((acc: any, curr) => {
      const [key, value] = curr.split('=');
      acc[key] = value;
      return acc;
    }, {});

    const saved = cookies['locale'];

    if (saved) {
      router.replace(`/${saved}`);
      return;
    }

    // Se for a primeira visita, define cookie e redireciona
    document.cookie = `locale=${defaultLocale}; path=/; max-age=31536000`; // 1 ano
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return null;
}
