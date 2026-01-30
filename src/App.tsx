import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage"; // Import the new TestPage
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage />} /> {/* Render TestPage on the root route */}
          {/* Temporarily comment out other routes to isolate the issue */}
          {/* <Route path="/sobre" element={<Sobre />} /> */}
          {/* <Route path="/servicos" element={<Servicos />} /> */}
          {/* <Route path="/galeria" element={<Galeria />} /> */}
          {/* <Route path="/contacto" element={<Contacto />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;