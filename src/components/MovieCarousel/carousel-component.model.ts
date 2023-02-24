import { Category } from '../../models/categories.model'
import { AllPopularMovie } from '../../models/movies/populars.model'

export interface MovieCarousel {
  categories: Category[]
  movies: AllPopularMovie
  title: string
}
