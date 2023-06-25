import axios from 'axios'
import { API_KEY, API_URL } from '../config'
import { AllMovies } from '../models/movies/movies.model'
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
 * Search for movies by their original, translated and alternative titles.
 *
 * @async
 * @function
 * @query movie to search
 * @returns coincidence of the movie
 */
export const getMovieToSearch = async (
  query: string
): Promise<AllMovies | null> => {
  try {
    const params = {
      query,
      include_adult: false,
      media_type: 'movie',
    }
    const response = await baseApiClient.get(`/search/movie`, { params })
    if (response.status === 404 || response.status === 401) return null
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Search for actors by their original, translated and alternative titles.
 *
 * @async
 * @function
 * @query movie to search
 * @returns coincidence of the movie
 */
export const getActorToSearch = async (
  query: string
): Promise<AllMovies | null> => {
  try {
    const params = {
      query,
      include_adult: false,
      media_type: 'movie',
    }
    const response = await baseApiClient.get(`/search/person`, { params })
    if (response.status === 404 || response.status === 401) return null
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
