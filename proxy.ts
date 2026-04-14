import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { auth0 } from "./lib/auth0";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const locales = routing.locales.join("|");
const dashboardPattern = new RegExp(`^/(${locales})/dashboard(/.*)?$`);

export async function proxy(request: Request) {
  const { pathname } = new URL(request.url);

  // Auth0 handles all /auth/* routes (login, callback, logout, etc.)
  if (pathname.startsWith("/auth")) {
    return await auth0.middleware(request);
  }

  // Protect /[locale]/dashboard/* — redirect to login if no session
  if (dashboardPattern.test(pathname)) {
    const session = await auth0.getSession(request as NextRequest);
    if (!session) {
      const returnTo = encodeURIComponent(pathname);
      return NextResponse.redirect(
        new URL(`/auth/login?returnTo=${returnTo}`, request.url)
      );
    }
  }

  // For all other routes, run auth0 middleware first to refresh session cookies,
  // then apply next-intl locale routing on top
  const auth0Response = await auth0.middleware(request);

  // If auth0 wants to redirect (shouldn't happen for non-auth routes unless
  // a route is protected), propagate it directly
  if (auth0Response.status !== 200) {
    return auth0Response;
  }

  // Run next-intl locale routing
  const intlResponse = intlMiddleware(request as NextRequest);

  // Copy any session cookies set by auth0 into the intl response
  auth0Response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      intlResponse.headers.append(key, value);
    }
  });

  return intlResponse;
}

export const config = {
  matcher: [
    // Match all pathnames except Next.js internals and static files
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
