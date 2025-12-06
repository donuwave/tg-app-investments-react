import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "../../../locales/ru.json";
import en from "../../../locales/en.json";
import es from "../../../locales/es.json";
import de from "../../../locales/de.json";

const STORAGE_KEY = "app_language";

// аккуратно достаём язык из localStorage (чтоб не упасть в SSR)
const getSavedLanguage = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
};

const savedLang = getSavedLanguage() || "ru";

export const resources = {
  ru: { translation: ru },
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const setLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lng);
  }
};

export default i18n;
