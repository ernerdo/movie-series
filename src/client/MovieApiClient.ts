import axios from 'axios'
import { API_KEY, API_URL } from '../config'

const baseApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
  },
})

/**
 * Gets the detail of a movie from the API
 *
 * @param id id movie
 * @returns a details movie
 */
export const getMovieDetails = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

/**
 * Gets a list of similar movies from the API
 *
 * @param id id movie
 * @returns a similar movie
 */
export const getSimilarMovies = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/similar`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Gets a Cast from the API
 *
 * @param id id cast
 * @returns a cast
 */
export const getCast = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/credits`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Gets an image of the movie from the API
 *
 * @param id id movie
 * @returns an image movie
 */
export const getImages = async (id: number | string) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/images`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Gets a list of popular movies from the API
 *
 * @returns popular movies
 */
export const getPopularMovies = async () => {
  try {
    const response = await baseApiClient.get(`/movie/popular`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Gets a list of videos from the API
 *
 * @param id id video
 * @returns a movie video
 */
export const getMovieVideos = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/videos`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
