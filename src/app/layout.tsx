// app/layout.tsx

import "./globals.css";
import localFont from "next/font/local";
import { cookies } from "next/headers";

import type { Metadata } from "next";
import { metadataTexts } from "./utils/metadataTexts";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies(); // ainda síncrono
  const locale: string = cookieStore.get("locale")?.value || "pt-br";
  const meta =
    metadataTexts[locale as keyof typeof metadataTexts] ??
    metadataTexts["pt-br"];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://www.zohub.com.br",
      siteName: "Zohub",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

const puvi = localFont({
  src: [
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/zoho-puvi/Zoho-Puvi-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-zoho-puvi",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = (await cookieStore.get("locale")?.value) || "pt-br"; // fallback
  console.log(locale);
  return (
    <html lang={locale} className={`${puvi.className} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
