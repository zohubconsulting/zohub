"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  NProgress.configure({ showSpinner: false });
  NProgress.configure({ easing: "ease", speed: 400 });

  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}
