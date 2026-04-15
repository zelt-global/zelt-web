import { Auth0Client } from "@auth0/nextjs-auth0/server";

let _auth0: Auth0Client | null = null;

/**
 * Lazy-initialized Auth0Client.
 * Construction is deferred to first property access so that
 * `next build` inside Docker doesn't crash when env vars are
 * present only as build-args (available at build time) or
 * runtime env vars (available at request time).
 */
export const auth0 = new Proxy({} as Auth0Client, {
  get(_, prop) {
    if (!_auth0) {
      _auth0 = new Auth0Client();
    }
    return (_auth0 as unknown as Record<string | symbol, unknown>)[prop];
  },
});
