'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../public/logo.svg';

interface MenuHeaderProps {
  locale: string;
};

export default function MenuHeader({ locale }: MenuHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-zoho-white shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt='Logo' />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-7 text-zoho-black text-md font-medium">
          <Link href="/">Início</Link>
          <Link href="/solutions">Soluções</Link>
          <Link href="/zohub">Zohub</Link>
          <Link href="/workflow">Workflow</Link>
          <Link href="/join-us">Junte-se a nós</Link>
          <Link href="/langs">PT-BR ⯆</Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-zoho-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-zoho-white shadow px-5 py-4 pt-2">
          <nav className="flex flex-col gap-4 text-zoho-black text-md font-normal">
            <Link href="/">Início</Link>
            <Link href="/solutions">Soluções</Link>
            <Link href="/zohub">Zohub</Link>
            <Link href="/step-by-step">Step-by-step</Link>
            <Link href="/join-us">Junte-se a nós</Link>
            <Link href="/langs">PT-BR ⯆</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
