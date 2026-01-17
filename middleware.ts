import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Remove technology-revealing headers
  response.headers.delete('x-nextjs-cache')
  response.headers.delete('x-nextjs-route')
  
  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'off')
  response.headers.set('X-Download-Options', 'noopen')
  
  // Block access to sensitive files
  const pathname = request.nextUrl.pathname
  
  if (
    pathname.includes('package.json') ||
    pathname.includes('.env') ||
    pathname.includes('tsconfig.json') ||
    pathname.includes('next.config') ||
    pathname.startsWith('/.next/') ||
    pathname.startsWith('/node_modules/')
  ) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
