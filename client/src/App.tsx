import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import XeroCaseStudy from "@/pages/XeroCaseStudy";
import NalahCaseStudy from "@/pages/NalahCaseStudy";
import ElmoAgentIdCaseStudy from "@/pages/ElmoAgentIdCaseStudy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-studies/xero-behavioural-change" component={XeroCaseStudy} />
      <Route path="/case-studies/nalah-sdr-empowerment" component={NalahCaseStudy} />
      <Route path="/case-studies/elmo-agent-identification" component={ElmoAgentIdCaseStudy} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
