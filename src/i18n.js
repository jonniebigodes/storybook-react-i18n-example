/**
 * this is i18n config that the app/Storybook will consume.
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "es", "pt"],
    interpolation: { escapeValue: false },
    backend:{
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;
