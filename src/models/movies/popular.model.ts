export interface PopularMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  src?: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface AllPopularMovie {
  page: number
  results: PopularMovie[]
  total_pages: number
  total_results: number
}
