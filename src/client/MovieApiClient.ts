import axios from 'axios'
import { API_KEY, API_URL } from '../config'
import { AllCast } from '../models/casts/casts.model'
import { AllMovies, Movie } from '../models/movies/movies.model'
import { MovieVideos } from '../models/movies/video.model'
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
 * Gets the detail of a movie from the API
 *
 * @async
 * @function
 * @param id id movie
 * @returns a details movie
 */
export const getMovieDetails = async (id: number): Promise<Movie | null> => {
  try {
    const response = await baseApiClient.get(`/movie/${id}`)
    if (response.status === 304) return null
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Gets a list of similar movies from the API
 *
 * @async
 * @function
 * @param id id movie
 * @returns a similar movie
 */
export const getSimilarMovies = async (
  id: number
): Promise<AllMovies | null> => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/similar`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Gets a Cast from the API
 *
 * @async
 * @function
 * @param id id cast
 * @returns a cast
 */
export const getCast = async (id: number): Promise<AllCast | null> => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/credits`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Gets an image of the movie from the API
 *
 * @async
 * @function
 * @param id id movie
 * @returns an image movie
 */
export const getImages = async (id: number | string) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/images`)
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

/**
 * Gets a list of popular movies from the API
 *
 * @async
 * @function
 * @returns popular movies
 */
export const getPopularMovies = async (): Promise<AllMovies | null> => {
  try {
    const response = await baseApiClient.get(`/movie/popular`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Get a list of top rated movies from the API
 *
 * @async
 * @function
 * @returns latest movies
 */
export const getTopRatedMovies = async (): Promise<AllMovies | null> => {
  try {
    const response = await baseApiClient.get(`/movie/top_rated`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
/**
 * Gets a list of upcoming movies from the API
 *
 * @async
 * @function
 * @returns upcoming movies
 */
export const getUpcomingMovies = async (): Promise<AllMovies | null> => {
  try {
    const response = await baseApiClient.get(`/movie/upcoming`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

/**
 * Gets a list of videos from the API
 *
 * @async
 * @function
 * @param id id video
 * @returns a movie video
 */
export const getMovieVideos = async (
  id: number
): Promise<MovieVideos | null> => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/videos`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
