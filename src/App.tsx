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
import LetterGlitch from "./components/LetterGlitch";
import Iridescence from "./components/Iridescence";
import Ballpit from "./components/Ballpit";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useEffect } from "react";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentTheme } = useTheme();

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
      {currentTheme === 'particles' && (
        <ParticleBackground />
      )}
      {currentTheme === 'glitch' && (
        <div className="fixed inset-0 z-0">
          <LetterGlitch 
            glitchColors={['#a855f7', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6']}
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
          />
        </div>
      )}
      {currentTheme === 'iridescence' && (
        <div className="fixed inset-0 z-0">
          <Iridescence 
            color={[0.7, 0.4, 1.0]}
            speed={1.5}
            amplitude={0.2}
            mouseReact={true}
          />
        </div>
      )}
      {currentTheme === 'ballpit' && (
        <div className="fixed inset-0 z-0">
          <Ballpit 
            className="w-full h-full"
            followCursor={true}
            colors={[0xa855f7, 0x8b5cf6, 0x7c3aed, 0x6d28d9, 0x5b21b6]}
            count={150}
            gravity={0.01}
            friction={0.998}
            wallBounce={0.9}
            maxVelocity={0.12}
          />
        </div>
      )}
      {/* Navigation Bar */}
      <Navigation />
      <main className="pt-16 relative z-10">
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
        <ThemeProvider>
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
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
