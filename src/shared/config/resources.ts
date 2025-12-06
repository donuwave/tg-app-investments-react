import ru from "../../../locales/ru.json";
import en from "../../../locales/en.json";
import es from "../../../locales/es.json";
import de from "../../../locales/de.json";

export const resources = {
  ru: { translation: ru },
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
} as const;

export const defaultNS = "translation" as const;
export const defaultLng = "ru" as const;

export type AppResources = (typeof resources)["ru"];
