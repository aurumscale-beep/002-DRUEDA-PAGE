import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// GitHub Pages SPA redirect handler
(function () {
  const params = new URLSearchParams(window.location.search);
  const p = params.get("p");
  if (p) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + p + (window.location.hash || "")
    );
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
