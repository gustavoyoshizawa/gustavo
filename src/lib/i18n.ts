import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../data/en-us.json";
import ptTranslations from "../data/pt-br.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
  },
  lng: "pt",
});
