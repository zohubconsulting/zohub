'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MenuHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-zoho-white shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-[30px] w-[30px] bg-gray-200 rounded" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-zoho-black text-sm font-medium">
          <Link href="/">Início</Link>
          <Link href="/about">Soluções</Link>
          <Link href="/contact">Zohub</Link>
          <Link href="/pricing">Step-by-step</Link>
          <Link href="/pricing">Junte-se a nós</Link>
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
        <div className="md:hidden bg-zoho-white shadow px-5 pb-4">
          <nav className="flex flex-col gap-4 text-zoho-red text-sm font-medium">
            <Link href="/">Início</Link>
            <Link href="/solucoes">Soluções</Link>
            <Link href="/zexpert">Zexpert</Link>
            <Link href="/step-by-step">Step-by-step</Link>
            <Link href="/junte-se">Junte-se a nós</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
