"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "monochrome" | "colorful";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("monochrome");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "colorful") {
        document.documentElement.classList.add("theme-colorful");
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "monochrome" ? "colorful" : "monochrome";
      localStorage.setItem("portfolio-theme", newTheme);
      
      if (newTheme === "colorful") {
        document.documentElement.classList.add("theme-colorful");
      } else {
        document.documentElement.classList.remove("theme-colorful");
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
