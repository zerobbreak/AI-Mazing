import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  
  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  // Check onboarding status
  const onboarded = token.onboarded;

  if (req.nextUrl.pathname.startsWith("/dashboard") && !onboarded) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/onboarding") && onboarded) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/onboarding"],
};
