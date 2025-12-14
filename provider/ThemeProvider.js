
import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
