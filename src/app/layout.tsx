// app/layout.tsx

import './globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Zohub – Consultoria e implementação de produtos Zoho',
  description: 'Consultoria e implementação de produtos Zoho.',
}

const puvi = localFont({
  src: [
    { path: './fonts/zoho-puvi/Zoho-Puvi-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/zoho-puvi/Zoho-Puvi-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/zoho-puvi/Zoho-Puvi-Semibold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/zoho-puvi/Zoho-Puvi-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/zoho-puvi/Zoho-Puvi-Extrabold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/zoho-puvi/Zoho-Puvi-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-zoho-puvi',
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = await cookieStore.get('locale')?.value || 'pt-br'; // fallback
  
  return (
    <html lang={locale} className={`${puvi.className} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
