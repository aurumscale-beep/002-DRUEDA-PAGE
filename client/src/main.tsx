import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * GitHub Pages portability: React components preserve the approved source paths,
 * while this small runtime bridge rewrites local assets and internal links to the
 * repository base (for example, /site-ueda-odontologia/) after each render.
 */
const baseUrl = import.meta.env.BASE_URL;
const withBase = (path: string) => `${baseUrl}${path.replace(/^\//, "")}`;

function normalizePagesPaths() {
  if (baseUrl === "/") return;

  document.querySelectorAll<HTMLImageElement>('img[src^="/assets/"]').forEach((image) => {
    const source = image.getAttribute("src");
    if (source) image.setAttribute("src", withBase(source));
  });

  document.querySelectorAll<HTMLElement>('[style*="/assets/"]').forEach((element) => {
    const background = element.style.backgroundImage;
    if (background.includes("/assets/") && !background.includes(`${baseUrl}assets/`)) {
      element.style.backgroundImage = background.replace(/(["']?)\/assets\//g, `$1${withBase("assets/")}`);
    }
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (href && !href.startsWith("//") && !href.startsWith(baseUrl)) anchor.setAttribute("href", withBase(href));
  });
}

normalizePagesPaths();
new MutationObserver(normalizePagesPaths).observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["href", "src", "style"],
});

createRoot(document.getElementById("root")!).render(<App />);
