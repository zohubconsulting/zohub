import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLocales = ['pt-br', 'en'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/');
  const localeFromPath = segments[1];

  if (supportedLocales.includes(localeFromPath)) {
    const response = NextResponse.next();
    response.cookies.set('locale', localeFromPath);
    return response;
  }

  return NextResponse.next();
}

// Ativa o middleware em todas as rotas
export const config = {
  matcher: '/((?!_next|static|favicon.ico).*)',
};