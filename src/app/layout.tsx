import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import TopLoader from "@/components/TopLoader";
import MenuHeader from "@/components/MenuHeader";

export const metadata: Metadata = {
  title: "Zohub",
  description: "",
};

const puvi = localFont({
  src: [
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Extrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/zoho-puvi/Zoho-Puvi-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-zoho-puvi',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${puvi.className} font-sans`}>
      <body>
      <TopLoader />
        <MenuHeader/>

        <main>{children}</main>
      </body>
    </html>
  );
}
