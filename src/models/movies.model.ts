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
}

export interface Trailer {
  id: string
  key: string
  name: string
  site: string
  type: string
}
