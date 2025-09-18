import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ReportWaste from "./pages/ReportWaste";
import CollectWaste from "./pages/CollectWaste";
import Rewards from "./pages/Rewards";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              } />
              <Route path="/report" element={
                <>
                  <Navbar />
                  <ReportWaste />
                  <Footer />
                </>
              } />
              <Route path="/collect" element={
                <>
                  <Navbar />
                  <CollectWaste />
                  <Footer />
                </>
              } />
              <Route path="/rewards" element={
                <>
                  <Navbar />
                  <Rewards />
                  <Footer />
                </>
              } />
              <Route path="/settings" element={
                <>
                  <Navbar />
                  <Settings />
                  <Footer />
                </>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
