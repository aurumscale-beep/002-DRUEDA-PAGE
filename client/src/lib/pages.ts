/**
 * GitHub Pages portability: all assets and internal routes honor Vite's BASE_URL,
 * so the site works in both a repository subdirectory and a custom domain.
 */
const baseUrl = import.meta.env.BASE_URL;

export function assetUrl(path: string) {
  return `${baseUrl}${path.replace(/^\//, "")}`;
}

export const routerBase = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
