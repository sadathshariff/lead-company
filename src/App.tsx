import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import AILeadGeneration from "@/pages/ai-lead-generation";
import SEOOptimization from "@/pages/seo-optimization";
import WebsiteDevelopment from "@/pages/website-development";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/ai-lead-generation" component={AILeadGeneration} />
      <Route path="/seo-optimization" component={SEOOptimization} />
      <Route path="/website-development" component={WebsiteDevelopment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <Navigation />
          <main className="flex-1 w-full px-0 py-0">
            <Toaster />
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
