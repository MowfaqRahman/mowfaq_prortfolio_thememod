import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  currentTheme: 'particles' | 'glitch' | 'iridescence' | 'ballpit';
  setTheme: (theme: 'particles' | 'glitch' | 'iridescence' | 'ballpit') => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'particles' | 'glitch' | 'iridescence' | 'ballpit'>('particles');

  const setTheme = (theme: 'particles' | 'glitch' | 'iridescence' | 'ballpit') => {
    setCurrentTheme(theme);
  };

  const cycleTheme = () => {
    const themes: ('particles' | 'glitch' | 'iridescence' | 'ballpit')[] = ['particles', 'glitch', 'iridescence', 'ballpit'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 