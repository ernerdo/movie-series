import axios from 'axios'
import { API_KEY, API_URL } from '../config'
import { getLanguage } from '../utils/languages'

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
 * Gets the list of movie genres from The Movie Database API.
 *
 * @returns A promise that resolves to the list of movie genres, or an exception if an error occurs.
 */
export const getGenreMovieList = async () => {
  try {
    const response = await baseApiClient.get('/genre/movie/list')
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}
