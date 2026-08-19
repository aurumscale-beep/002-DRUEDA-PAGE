import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { routerBase } from "./lib/pages";
import Home from "./pages/Home";
import Implants from "./pages/Implants";
import { ClareamentoDental, Invisalign, LentesDeContatoDental } from "./pages/ServicePage";


/** GitHub Pages portability: routes retain the clinic's approved page structure under the repository path. */
function SiteRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/implantes"} component={Implants} />
      <Route path={"/invisalign"} component={Invisalign} />
      <Route path={"/clareamento"} component={ClareamentoDental} />
      <Route path={"/clareamento-dental"} component={ClareamentoDental} />
      <Route path={"/lentes"} component={LentesDeContatoDental} />
      <Route path={"/lentes-de-contato-dental"} component={LentesDeContatoDental} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={routerBase}>
            <SiteRoutes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
