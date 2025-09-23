import { NextResponse } from 'next/server';

// Block Singapore
const blockedCountries = ["SG"];

export function middleware(req) {
  const country = req.geo?.country || "";

  if (blockedCountries.includes(country)) {
    return new NextResponse("Access Denied", { status: 403 });
    // Or, redirect to a blocked page:
    // return NextResponse.redirect(new URL('/blocked', req.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
