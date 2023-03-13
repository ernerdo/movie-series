export interface Genres {
  id: number
  name: string
}
export interface Movie {
  id: number
  title: string
  overview: string
  backdrop_path: string
  poster_path: string
  genres: Genres[]
  vote_average: number
  release_date: string
  original_title: string
  adult: boolean
  genre_ids: number[]
  original_language: string
  popularity: number
  src?: string
  video: boolean
  vote_count: number
}

export interface Trailer {
  id: string
  key: string
  name: string
  site: string
  type: string
}
export interface AllPopularMovie {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
