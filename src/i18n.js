import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "FSZIxwnUUCg2X8VHlrNjLA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pl",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","pl"],
    
    backend: {
      loadPath: loadPath
    }
  })


  console.log(LanguageDetector.detect)