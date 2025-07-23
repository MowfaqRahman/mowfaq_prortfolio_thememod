import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageTransitions = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 0.95,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.8,
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransitions}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative animated elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary z-50"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0, transformOrigin: 'right' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default PageTransition;