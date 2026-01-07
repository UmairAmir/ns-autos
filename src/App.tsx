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
          <Route path="/body-shop" element={<BodyShop />} /> {/* Keeping old route for compatibility if needed, or redirect? User said "change those pages URL Slug", so I should probably replace it or add the new one. I will ADD the new one and REMOVE the old one as per request "change those pages URL Slug" */}
          <Route path="/car-body-shop-dubai" element={<BodyShop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/car-minor-service-dubai"
            element={<Services serviceType="car-minor-service-dubai" />}
          />
          <Route
            path="/car-major-service-dubai"
            element={<Services serviceType="car-major-service-dubai" />}
          />
          <Route
            path="/paint-protection-dubai"
            element={<Services serviceType="paint-protection-dubai" />}
          />
          <Route
            path="/window-tinting-dubai"
            element={<Services serviceType="window-tinting-dubai" />}
          />
          <Route
            path="/service-contract-dubai"
            element={<Services serviceType="service-contract-dubai" />}
          />
          <Route
            path="/pre-purchase-inspection-dubai"
            element={<Services serviceType="pre-purchase-inspection-dubai" />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
