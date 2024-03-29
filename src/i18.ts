/* eslint-disable camelcase */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import common_en from './translations/en.json'
import common_es from './translations/es.json'

/**
 * Object that stores the translation resources for each language.
 */
const resources = {
  en: {
    translation: common_en,
  },
  es: {
    translation: common_es,
  },
}

/**
 * Function that obtains the default language of the application from local storage.
 *
 * @returns The default language of the application.
 */
const defaultLang = (): string => {
  const lang = localStorage.getItem('i18nextLng')
  return !lang ? 'en' : lang
}

/**
 * i18n configuration for the application.
 */
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
