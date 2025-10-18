import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Warranty from "./pages/Warranty";
import BodyShop from "./pages/BodyShop";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import ThankYou from "./pages/ThankYou";

// ⬅️ removed useGtagPageView + AnalyticsTracker

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/body-shop" element={<BodyShop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/services/minor-service"
            element={<Services serviceType="minor-service" />}
          />
          <Route
            path="/services/major-service"
            element={<Services serviceType="major-service" />}
          />
          <Route
            path="/services/paint-protection"
            element={<Services serviceType="paint-protection" />}
          />
          <Route
            path="/services/window-tinting"
            element={<Services serviceType="window-tinting" />}
          />
          <Route
            path="/services/service-contract"
            element={<Services serviceType="service-contract" />}
          />
          <Route
            path="/services/pre-purchase-inspection"
            element={<Services serviceType="pre-purchase-inspection" />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
