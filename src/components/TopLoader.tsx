'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

export default function TopLoader() {
  const pathname = usePathname();

  NProgress.configure({ showSpinner: false });
  NProgress.configure({ easing: 'ease', speed: 400 });

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
}