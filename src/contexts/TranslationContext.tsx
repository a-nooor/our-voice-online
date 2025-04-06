import React, { createContext, useContext, useState, useEffect } from "react";
import { arTranslations } from "../translations/ar";
import { enTranslations } from "../translations/en";
import { frTranslations } from "../translations/fr";

type Language = {
  code: string;
  name: string;
  flag: string;
  dir: "rtl" | "ltr";
};

type TranslationsType = {
  [key: string]: string;
};

type TranslationContextType = {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: Language[];
};

export const languages: Language[] = [
  { code: "ar", name: "العربية", flag: "🇱🇧", dir: "rtl" },
  { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
];

const translations: Record<string, TranslationsType> = {
  ar: arTranslations,
  en: enTranslations,
  fr: frTranslations,
};

// List of brand names or terms that should not be translated
const preservedTerms = ["Sawtonna", "صوتنا", "صوتنا تمكين، تضامن، مستقبل للجميع"];

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  
  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem("preferred-language");
    if (savedLang) {
      const found = languages.find((lang) => lang.code === savedLang);
      if (found) setCurrentLang(found);
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    // Update HTML dir and lang attributes
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
    
    // Apply specific CSS for RTL/LTR
    if (lang.dir === "ltr") {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    } else {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    }
    
    // Save preference
    localStorage.setItem("preferred-language", lang.code);
    
    // Update state
    setCurrentLang(lang);
    
    console.log(`Language changed to ${lang.name}, direction: ${lang.dir}`);
  };
  
  const t = (key: string): string => {
    // Get translations for current language
    const currentTranslations = translations[currentLang.code] || {};
    
    // For preserved terms, check if the key or translation contains any
    for (const term of preservedTerms) {
      if (key === term || key.includes(term)) {
        return key;
      }
    }
    
    // Return translation or key if not found
    let translation = currentTranslations[key] || key;
    
    // Ensure preserved terms remain untranslated even within strings
    for (const term of preservedTerms) {
      if (translation.includes(term)) {
        // Replace the translated term with the preserved term
        const regex = new RegExp(term, "gi");
        translation = translation.replace(regex, term);
      }
    }
    
    return translation;
  };
  
  return (
    <TranslationContext.Provider value={{ currentLang, setLanguage, t, languages }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
