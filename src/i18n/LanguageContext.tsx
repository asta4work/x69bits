import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translation, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("x69bits-language");
    if (saved && (saved === "en" || saved === "ar" || saved === "de")) {
      return saved as Language;
    }
    // Detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "ar") return "ar";
    if (browserLang === "de") return "de";
    return "en";
  });

  const t = translations[language];
  const dir = t.dir;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("x69bits-language", lang);
  };

  // Apply RTL/LTR to document
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
