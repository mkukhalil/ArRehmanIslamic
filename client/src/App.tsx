import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingTrialButton from "@/components/FloatingTrialButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <FloatingWhatsAppButton />
        <FloatingTrialButton />
        <ScrollToTop />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
