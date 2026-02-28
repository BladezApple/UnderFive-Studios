import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host.startsWith('discord.')) {
    return NextResponse.redirect('https://discord.gg/QwEgsXByC9', { status: 307 })
  }

  if (host.startsWith('youtube.')) {
    return NextResponse.redirect('https://www.youtube.com/@UnderFiveStudios', { status: 307 })
  }

  if (host.startsWith('instagram.')) {
    return NextResponse.redirect('https://www.instagram.com/underfivestudios/', { status: 307 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
