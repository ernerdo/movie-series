import { Movie } from "../movies/movies.model"

export interface ApiError {
  message?: string
  errorType?: string
  // TODO: Change any
  results?: Movie
}
