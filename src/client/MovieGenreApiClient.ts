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

export const getGenreMovieList = async () => {
  try {
    const response = await baseApiClient.get('/genre/movie/list')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
