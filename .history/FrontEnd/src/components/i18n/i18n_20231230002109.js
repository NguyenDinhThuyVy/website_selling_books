import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '../locales/en/home.json';
import HOME_VI from '../locales/vi/home.json';
export const locales = {
  en: 'English',
  vi: 'Tiếng Việt',
};
const resources = {
  en: {},
  vi: {},
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
