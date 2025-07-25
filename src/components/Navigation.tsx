import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home', sectionId: 'home-section' },
    { path: '/projects', label: 'Projects', sectionId: 'projects-section' },
    { path: '/skills', label: 'Skills', sectionId: 'skills-section' },
    { path: '/contact', label: 'Contact', sectionId: 'contact-section' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  // Scroll to section handler
  const handleNavClick = (e: React.MouseEvent, sectionId: string, path: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      if (sectionId === 'home-section') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsOpen(false);
    } else {
      e.preventDefault();
      if (sectionId === 'home-section') {
        navigate('/');
      } else {
        navigate(`/#${sectionId}`);
      }
      setIsOpen(false);
    }
  };

  // ScrollSpy logic
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    if (location.pathname !== "/") return;
    // Use the correct order as in Home.tsx
    const sectionIds = ["projects-section", "skills-section", "contact-section"];
    const handleScroll = () => {
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 0) {
            current = id;
          }
        }
      }
      // If near the bottom of the page, force Contact as active
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
        current = 'contact-section';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Debug: Log activeSection and pathname
  console.log('activeSection:', activeSection, 'pathname:', location.pathname);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="text-2xl font-bold text-glow"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants} className="relative">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 transition-all duration-300 hover:text-primary ${
                      (item.label === 'Home'
                        ? (location.pathname === '/' && (!activeSection || activeSection === 'home-section'))
                        : (location.pathname === '/' && item.sectionId === activeSection) || location.pathname === item.path)
                        ? 'text-primary text-glow'
                        : 'text-foreground'
                    }`}
                    onClick={item.sectionId ? (e) => handleNavClick(e, item.sectionId, item.path) : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-0 right-0 h-full w-80 glass-strong border-l border-neon z-40 md:hidden"
      >
        <div className="flex flex-col pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                to={item.path}
                className={`block py-4 px-4 text-lg transition-all duration-300 hover:text-primary hover:bg-muted/10 rounded-lg ${
                  (item.sectionId && activeSection === item.sectionId) || location.pathname === item.path
                    ? 'text-primary text-glow bg-muted/20'
                    : 'text-foreground'
                }`}
                onClick={item.sectionId ? (e) => handleNavClick(e, item.sectionId, item.path) : undefined}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;