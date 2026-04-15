/**
 * Strips the leading locale segment from a pathname.
 * e.g. "/en/dashboard/settings" → "/dashboard/settings"
 */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/[^/]+/, "");
}
