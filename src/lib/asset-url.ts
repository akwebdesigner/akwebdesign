/**
 * Resolve a file living in `public/site-assets` against the app's base path.
 * Works both on Lovable (base "/") and on GitHub Pages (base "/<repo>/").
 */
export function siteAsset(fileName: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base : `${base}/`}site-assets/${fileName}`;
}

export function publicAsset(fileName: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base : `${base}/`}${fileName}`;
}
