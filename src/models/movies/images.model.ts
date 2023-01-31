export interface MovieImages {
  backdrops: Backdrop[]
  id: number
  logos: any[]
  posters: Poster[]
}

interface Poster {
  aspect_ratio: number
  height: number
  iso_639_1?: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

interface Backdrop {
  aspect_ratio: number
  height: number
  iso_639_1?: any
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
