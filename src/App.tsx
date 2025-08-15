import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Pricing from "@/pages/pricing";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ai-lead-generation" element={<AILeadGeneration />} />
      <Route path="/seo-optimization" element={<SEOOptimization />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <Navigation />
            <main className="flex-1 w-full px-0 py-0">
              <Toaster />
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
