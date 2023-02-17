import { Category } from '../../models/categories.model'
import { PopularMovie } from '../../models/movies/populars.model'

export interface MovieCarousel {
  categories: Category[]
  movies: PopularMovie
  title: string
}
