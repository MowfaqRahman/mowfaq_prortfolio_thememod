import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ParticleBackground from "./components/ParticleBackground";
import { useEffect } from "react";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section after navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (location.pathname === "/" && hash) {
      const section = document.getElementById(hash.replace('#', ''));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, sectionId?: string) => {
    if (sectionId) {
      e.preventDefault();
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/#${sectionId}`);
      }
    } else {
      // Home: scroll to top
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      {/* Navigation Bar */}
      <Navigation />
      <main className="pt-16">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
};

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
