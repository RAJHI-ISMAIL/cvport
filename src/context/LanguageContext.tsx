"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Language, Translations, allTranslations } from "@/data/translations";

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: allTranslations.en,
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("portfolio-lang") as Language | null;
        if (saved && allTranslations[saved]) {
          return saved;
        }
      } catch {}
    }
    return "en";
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio-lang", newLang);
    } catch {}
  }, []);

  // Sync html lang + dir whenever lang changes
  useEffect(() => {
    const translation = allTranslations[lang];
    if (translation) {
      document.documentElement.lang = translation.lang;
      document.documentElement.dir = translation.dir;
    }
  }, [lang]);

  const t = allTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
