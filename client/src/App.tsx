import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Pagelanding from "./components/Pagelanding";

import Pagethree from "./components/Pagethree";
import Pagefour from "./components/Pagefour";
import Pagefive from "./components/Pagefive";
import Pagesix from "./components/Pagesix";
import Pageseven from "./components/Pageseven";
import Pageeight from "./components/Pageeight";
import Pagenine from "./components/Pagenine";
import Pageten from "./components/Pageten";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route path={"/pam360"} component={Pagelanding} />

      <Route path={"/admanager360"} component={Pagethree} />
      <Route path={"/ad360"} component={Pagefour} />
      <Route path={"/mdmplus"} component={Pagefive} />
      <Route path={"/endpointcentral"} component={Pagesix} />
      <Route path={"/opmanagerplus"} component={Pageseven} />
      <Route path={"/site24x7"} component={Pageeight} />
      <Route path={"/analyticsplus"} component={Pagenine} />
      <Route path={"/log360"} component={Pageten} />

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
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
