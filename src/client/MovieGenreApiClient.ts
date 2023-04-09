import axios from 'axios'

import { API_KEY, API_URL } from '../config'

const getLanguage = (): string => {
  const key = 'i18nextLng'
  if (localStorage.getItem(key)) {
    const langSelected = localStorage.getItem(key)
    return JSON.stringify(langSelected).replaceAll('"', '')
  }
  return 'en'
}

const baseApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
    language: getLanguage(),
  },
})

export const getGenreMovieList = async () => {
  try {
    const response = await baseApiClient.get('/genre/movie/list')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
