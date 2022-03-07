import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import {resources} from './resources';

export const defaultLanguage = 'tr';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: defaultLanguage,
  ns: ['common'],
  defaultNS: 'common',
  debug: true,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
