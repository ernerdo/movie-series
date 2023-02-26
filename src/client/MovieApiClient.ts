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
 * Obtiene el detalle de una pelicula desde la API
 *
 * @param id id de la pelicula
 * @returns
 */
export const getMovieDetails = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Obtiene un listado de las peliculas similares desde la API
 *
 * @param id id de la pelicula
 * @returns
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
 * Obtiene un Cast  desde la API
 *
 * @param id cast
 * @returns
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
 * Obtiene una imagen de la pelicula desde la API
 *
 * @param id de la pelicula
 * @returns una imagen de la pelicula
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
 * Obtiene un listado de las peliculas populares desde la API
 *
 * @returns Peliculas populares
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
 * Obtiene un listado de videos desde la API
 *
 * @param id id del video
 * @returns Array de videos
 */
export const getMovieVideos = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/videos`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
