/**
 * Gets the current language of the application from local storage.
 *
 * If the language is stored in localStorage, fetches and returns it.
 * If not, it returns the default language (en).
 *
 * @returns the current language of the application.
 */
export const getLanguage = (): string => {
  const key = 'i18nextLng'
  if (typeof window !== 'undefined' && localStorage.getItem(key)) {
    const langSelected = localStorage.getItem(key)
    return JSON.stringify(langSelected).replaceAll('"', '')
  }
  return 'en'
}
