/** Strip a trailing slash so `/work` and `/work/` compare equal. Root stays `/`. */
export function normalizePath(value: string): string {
  const withSlash = value.startsWith("/") ? value : `/${value}`;
  const pathOnly = withSlash.split(/[?#]/)[0] ?? withSlash;
  if (pathOnly.length > 1 && pathOnly.endsWith("/")) {
    return pathOnly.slice(0, -1);
  }
  return pathOnly;
}

/** True when `pathname` is the nav item at `href`. Home matches only `/`. */
export function isCurrentNav(pathname: string, href: string): boolean {
  const path = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}
