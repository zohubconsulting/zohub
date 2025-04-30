"use client";

import TopLoader from "./TopLoader";
import MenuHeader from "./MenuHeader";
import LanguageDetector from "./LanguageDetector";
import { useEffect } from "react";
import NProgress from "nprogress";

interface ClientLayoutWrapperProps {
  locale: string;
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  locale,
  children,
}: ClientLayoutWrapperProps) {
  useEffect(() => {
    NProgress.start();

    NProgress.done();
  }, []);

  return (
    <>
      <LanguageDetector currentLocale={locale} />
      <TopLoader />
      <MenuHeader locale={locale} />
      <main>{children}</main>
    </>
  );
}
