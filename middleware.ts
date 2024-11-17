import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add compression and caching headers
  response.headers.set('Cache-Control', 'public, max-age=3600');
  response.headers.set('Vary', 'Accept-Encoding');

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};