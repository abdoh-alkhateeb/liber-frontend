import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  const session = await auth0.getSession(request);

  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl.origin));
  }

  return authRes;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
