export interface Movie {
  id?: number
  title: string
  type: string
  description: string
  img: string
}

export interface Genres {
  id: number
  name: string
}

export interface Movie2 {
  id: number
  title: string
  overview: string
  backdrop_path: string
  genres: Genres[]
}
