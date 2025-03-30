'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../public/logo.svg';
import { Equal, X } from 'lucide-react';

interface MenuHeaderProps {
  locale: string;
}

export default function MenuHeader({ locale }: MenuHeaderProps) {
  const [open, setOpen] = useState(false);

  // Função que gera os links com o locale correto
  const createLocalizedHref = (path: string) => {
    // Verifica se o caminho já contém o locale
    const normalizedPath = path.startsWith(`/${locale}`) ? path : `/${locale}${path}`;
    return normalizedPath;
  };

  return (
    <header className="bg-zoho-white shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-5 py-4">
          <Image src={Logo} alt="Logo" />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-7 text-zoho-black text-md font-medium">
          <Link href={createLocalizedHref('/')}>Início</Link>
          <Link href={createLocalizedHref('/solutions')}>Soluções</Link>
          <Link href={createLocalizedHref('/zohub')}>Zohub</Link>
          <Link href={createLocalizedHref('/workflow')}>Workflow</Link>
          <Link href={createLocalizedHref('/join-us')}>Junte-se a nós</Link>
          <Link href={createLocalizedHref('/langs')}>PT-BR ⯆</Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-zoho-black px-5 py-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <X strokeWidth={1.25} /> : <Equal strokeWidth={1.25} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-zoho-white shadow-[0_1px_1px_rgba(0,0,0,0.01)] px-5 py-4 pt-2">
          <nav className="flex flex-col gap-4 text-zoho-black text-md font-normal">
            <Link href={createLocalizedHref('/')}>Início</Link>
            <Link href={createLocalizedHref('/solutions')}>Soluções</Link>
            <Link href={createLocalizedHref('/zohub')}>Zohub</Link>
            <Link href={createLocalizedHref('/workflow')}>Workflow</Link>
            <Link href={createLocalizedHref('/join-us')}>Junte-se a nós</Link>
            <Link href={createLocalizedHref('/langs')}>PT-BR ⯆</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
