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
}
