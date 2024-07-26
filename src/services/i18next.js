import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import nl from '../locales/nl.json';

export const languageResources = {
  en: { translation: en },
  nl: { translation: nl },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'nl',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
