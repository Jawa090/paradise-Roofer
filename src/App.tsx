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
import BramptonSimple from "./pages/locations/BramptonSimple";
import BramptonRoofing from "./pages/locations/BramptonRoofing";
import BramptonRenovation from "./pages/locations/BramptonRenovation";
import MississaugaSimple from "./pages/locations/MississaugaSimple";
import MississaugaRoofing from "./pages/locations/MississaugaRoofing";
import MississaugaRenovation from "./pages/locations/MississaugaRenovation";
import MiltonSimple from "./pages/locations/MiltonSimple";
import MiltonRoofing from "./pages/locations/MiltonRoofing";
import MiltonRenovation from "./pages/locations/MiltonRenovation";
import OakvilleSimple from "./pages/locations/OakvilleSimple";
import OakvilleRoofing from "./pages/locations/OakvilleRoofing";
import OakvilleRenovation from "./pages/locations/OakvilleRenovation";
import EtobicokeSimple from "./pages/locations/EtobicokeSimple";
import EtobicokeRoofing from "./pages/locations/EtobicokeRoofing";
import EtobicokeRenovation from "./pages/locations/EtobicokeRenovation";
import ScarboroughSimple from "./pages/locations/ScarboroughSimple";
import ScarboroughRoofing from "./pages/locations/ScarboroughRoofing";
import ScarboroughRenovation from "./pages/locations/ScarboroughRenovation";
import VaughanSimple from "./pages/locations/VaughanSimple";
import VaughanRoofing from "./pages/locations/VaughanRoofing";
import VaughanRenovation from "./pages/locations/VaughanRenovation";
import MarkhamSimple from "./pages/locations/MarkhamSimple";
import MarkhamRoofing from "./pages/locations/MarkhamRoofing";
import MarkhamRenovation from "./pages/locations/MarkhamRenovation";
import RichmondHillSimple from "./pages/locations/RichmondHillSimple";
import RichmondHillRoofing from "./pages/locations/RichmondHillRoofing";
import RichmondHillRenovation from "./pages/locations/RichmondHillRenovation";
import AuroraSimple from "./pages/locations/AuroraSimple";
import AuroraRoofing from "./pages/locations/AuroraRoofing";
import AuroraRenovation from "./pages/locations/AuroraRenovation";
import BurlingtonSimple from "./pages/locations/BurlingtonSimple";
import BurlingtonRoofing from "./pages/locations/BurlingtonRoofing";
import BurlingtonRenovation from "./pages/locations/BurlingtonRenovation";
import AjaxSimple from "./pages/locations/AjaxSimple";
import AjaxRoofing from "./pages/locations/AjaxRoofing";
import AjaxRenovation from "./pages/locations/AjaxRenovation";

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
          <Route path="/locations/brampton" element={<BramptonSimple />} />
          <Route path="/locations/brampton/roofing" element={<BramptonRoofing />} />
          <Route path="/locations/brampton/renovation" element={<BramptonRenovation />} />
          <Route path="/locations/mississauga" element={<MississaugaSimple />} />
          <Route path="/locations/mississauga/roofing" element={<MississaugaRoofing />} />
          <Route path="/locations/mississauga/renovation" element={<MississaugaRenovation />} />
          <Route path="/locations/milton" element={<MiltonSimple />} />
          <Route path="/locations/milton/roofing" element={<MiltonRoofing />} />
          <Route path="/locations/milton/renovation" element={<MiltonRenovation />} />
          <Route path="/locations/oakville" element={<OakvilleSimple />} />
          <Route path="/locations/oakville/roofing" element={<OakvilleRoofing />} />
          <Route path="/locations/oakville/renovation" element={<OakvilleRenovation />} />
          <Route path="/locations/etobicoke" element={<EtobicokeSimple />} />
          <Route path="/locations/etobicoke/roofing" element={<EtobicokeRoofing />} />
          <Route path="/locations/etobicoke/renovation" element={<EtobicokeRenovation />} />
          <Route path="/locations/scarborough" element={<ScarboroughSimple />} />
          <Route path="/locations/scarborough/roofing" element={<ScarboroughRoofing />} />
          <Route path="/locations/scarborough/renovation" element={<ScarboroughRenovation />} />
import VaughanSimple from "./pages/locations/VaughanSimple";
import VaughanRoofing from "./pages/locations/VaughanRoofing";
import VaughanRenovation from "./pages/locations/VaughanRenovation";
import MarkhamSimple from "./pages/locations/MarkhamSimple";
import MarkhamRoofing from "./pages/locations/MarkhamRoofing";
import MarkhamRenovation from "./pages/locations/MarkhamRenovation";
import RichmondHillSimple from "./pages/locations/RichmondHillSimple";
import RichmondHillRoofing from "./pages/locations/RichmondHillRoofing";
import RichmondHillRenovation from "./pages/locations/RichmondHillRenovation";
          <Route path="/locations/vaughan" element={<VaughanSimple />} />
          <Route path="/locations/vaughan/roofing" element={<VaughanRoofing />} />
          <Route path="/locations/vaughan/renovation" element={<VaughanRenovation />} />
          <Route path="/locations/markham" element={<MarkhamSimple />} />
          <Route path="/locations/markham/roofing" element={<MarkhamRoofing />} />
          <Route path="/locations/markham/renovation" element={<MarkhamRenovation />} />
          <Route path="/locations/richmond-hill" element={<RichmondHillSimple />} />
          <Route path="/locations/richmond-hill/roofing" element={<RichmondHillRoofing />} />
          <Route path="/locations/richmond-hill/renovation" element={<RichmondHillRenovation />} />
          <Route path="/locations/aurora" element={<AuroraSimple />} />
          <Route path="/locations/aurora/roofing" element={<AuroraRoofing />} />
          <Route path="/locations/aurora/renovation" element={<AuroraRenovation />} />
          <Route path="/locations/burlington" element={<BurlingtonSimple />} />
          <Route path="/locations/burlington/roofing" element={<BurlingtonRoofing />} />
          <Route path="/locations/burlington/renovation" element={<BurlingtonRenovation />} />
          <Route path="/locations/ajax" element={<AjaxSimple />} />
          <Route path="/locations/ajax/roofing" element={<AjaxRoofing />} />
          <Route path="/locations/ajax/renovation" element={<AjaxRenovation />} />

          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


