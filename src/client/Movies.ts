import axios from 'axios'

import { API_KEY, API_URL } from '../config'
import { ID, Page } from '../models/general.model'

const baseApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
  },
})

export const getMovieDetails = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getSimilarMovies = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/similar`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getCast = async (id: number) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/credits`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getImages = async (id: number | string) => {
  try {
    const response = await baseApiClient.get(`/movie/${id}/images`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPopularMovies = async () => {
  try {
    const response = await baseApiClient.get(`/movie/popular`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
