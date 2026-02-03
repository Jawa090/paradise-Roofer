import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/services/Index";
import Locations from "./pages/Locations";

import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

import RoofInstallation from "./pages/services/RoofInstallation";
import RoofInspection from "./pages/services/RoofInspection";
import RoofRepair from "./pages/services/RoofRepair";
import RoofReplacement from "./pages/services/RoofReplacement";
import FasciaRepair from "./pages/services/FasciaRepair";
import GuttersRepair from "./pages/services/GuttersRepair";
import SoffitRepair from "./pages/services/SoffitRepair";
import AtticInsulation from "./pages/services/AtticInsulation";
import InteriorRenos from "./pages/services/InteriorRenos";
import ResidentialRoofing from "./pages/services/ResidentialRoofing";
import CommercialRoofing from "./pages/services/CommercialRoofing";
import RoofCoating from "./pages/services/RoofCoating";

// Location Pages
import Brampton from "./pages/locations/Brampton";
import Mississauga from "./pages/locations/Mississauga";
import Milton from "./pages/locations/Milton";
import Oakville from "./pages/locations/Oakville";
import Etobicoke from "./pages/locations/Etobicoke";
import Scarborough from "./pages/locations/Scarborough";
import Vaughan from "./pages/locations/Vaughan";
import Markham from "./pages/locations/Markham";
import RichmondHill from "./pages/locations/RichmondHill";
import Aurora from "./pages/locations/Aurora";
import Burlington from "./pages/locations/Burlington";
import Ajax from "./pages/locations/Ajax";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />

          {/* Service Routes */}
          <Route path="/services/installation" element={<RoofInstallation />} />
          <Route path="/services/inspection" element={<RoofInspection />} />
          <Route path="/services/repair" element={<RoofRepair />} />
          <Route path="/services/replacement" element={<RoofReplacement />} />
          <Route path="/services/fascia" element={<FasciaRepair />} />
          <Route path="/services/gutters" element={<GuttersRepair />} />
          <Route path="/services/soffit" element={<SoffitRepair />} />
          <Route path="/services/attic-insulation" element={<AtticInsulation />} />
          <Route path="/services/interior-renos" element={<InteriorRenos />} />
          <Route path="/services/residential" element={<ResidentialRoofing />} />
          <Route path="/services/commercial" element={<CommercialRoofing />} />
          <Route path="/services/coating" element={<RoofCoating />} />

          <Route path="/services/:slug" element={<Services />} />

          {/* Location Routes */}
          <Route path="/locations/brampton" element={<Brampton />} />
          <Route path="/locations/mississauga" element={<Mississauga />} />
          <Route path="/locations/milton" element={<Milton />} />
          <Route path="/locations/oakville" element={<Oakville />} />
          <Route path="/locations/etobicoke" element={<Etobicoke />} />
          <Route path="/locations/scarborough" element={<Scarborough />} />
          <Route path="/locations/vaughan" element={<Vaughan />} />
          <Route path="/locations/markham" element={<Markham />} />
          <Route path="/locations/richmond-hill" element={<RichmondHill />} />
          <Route path="/locations/aurora" element={<Aurora />} />
          <Route path="/locations/burlington" element={<Burlington />} />
          <Route path="/locations/ajax" element={<Ajax />} />

          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
