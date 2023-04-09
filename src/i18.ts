/* eslint-disable camelcase */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import common_en from './translations/en.json'
import common_es from './translations/es.json'

const resources = {
  en: {
    translation: common_en,
  },
  es: {
    translation: common_es,
  },
}

const defaultLang = (): string => {
  const lang = localStorage.getItem('i18nextLng')
  return !lang ? 'en' : lang
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLang(),
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
