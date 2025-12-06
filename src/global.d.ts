import "i18next";
import type { AppResources } from "./shared/config/resources";

type TranslationResource = typeof ru;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: AppResources;
  }
}
