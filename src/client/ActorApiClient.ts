import axios from 'axios'
import { API_KEY, API_URL } from '../config'

const getLanguage = (): string => {
  if (localStorage.getItem('i18nextLng')) {
    const langSelected = localStorage.getItem('i18nextLng')
    return JSON.stringify(langSelected).replaceAll('"', '').toLocaleUpperCase()
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

/**
 * Gets the detail of a actor from the API
 * @param id id actor
 * @returns a details actor
 **/
export const getActorDetails = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/person/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}
/**
 *
 * @param id id actor
 * @returns movies of actor
 */
export const getActorMovies = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/person/${id}/movie_credits`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
