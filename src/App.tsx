import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen">
    <Navigation />
    <main className="pt-16">
      <PageTransition>
        {children}
      </PageTransition>
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Placeholder routes - will be implemented */}
            <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">About Page Coming Soon</h1></div>} />
            <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Projects Page Coming Soon</h1></div>} />
            <Route path="/skills" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Skills Page Coming Soon</h1></div>} />
            <Route path="/resume" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Resume Page Coming Soon</h1></div>} />
            <Route path="/articles" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Articles Page Coming Soon</h1></div>} />
            <Route path="/profiles" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Profiles Page Coming Soon</h1></div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-glow">Contact Page Coming Soon</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
