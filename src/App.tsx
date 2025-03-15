
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import Blog from "./pages/Blog";
import WebDesignPage from "./pages/services/WebDesign";
import SeoPage from "./pages/services/SeoPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import PpcPage from "./pages/services/PpcPage";
import GraphicDesignPage from "./pages/services/GraphicDesignPage";
import AiAutomationPage from "./pages/services/AiAutomationPage";
import AboutPage from "./pages/AboutPage";
import TestMotion from './components/TestMotion';
import RefundPolicy from './pages/RefundPolicy';
import CommunityPage from "./pages/CommunityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          {/* Commented out until components are ready */}
          {/* <Route path="/services/ppc" element={<PpcPage />} /> */}
          {/* <Route path="/services/graphic-design" element={<GraphicDesignPage />} /> */}
          <Route path="/services/ai-automation" element={<AiAutomationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/test-motion" element={<TestMotion />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/community" element={<CommunityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
