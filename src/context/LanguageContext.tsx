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
  const [lang, setLangState] = useState<Language>("en");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    // Persist to localStorage
    try { localStorage.setItem("portfolio-lang", newLang); } catch {}
    // Set html lang + dir for RTL support
    const t = allTranslations[newLang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
  }, []);

  // Restore persisted language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang") as Language | null;
      if (saved && allTranslations[saved]) {
        setLang(saved);
      }
    } catch {}
  }, [setLang]);

  const t = allTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
