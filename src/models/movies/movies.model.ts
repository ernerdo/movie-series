import { Genre } from "../categories/categories.model"

export interface Movie {
  id: number
  title: string
  overview: string
  backdrop_path: string
  poster_path: string
  genres: Genre[]
  vote_average: number
  release_date: string
  original_title: string
  adult: boolean | null;
  genre_ids: number[]
  original_language: string
  popularity: number
  src?: string
  video: boolean
  vote_count: number
}

export interface AllMovies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
