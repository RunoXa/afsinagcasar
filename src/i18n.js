import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-http-backend'
import {initReactI18next} from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'tr',
    fallbackLng: 'tr',
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
});

export default i18n;