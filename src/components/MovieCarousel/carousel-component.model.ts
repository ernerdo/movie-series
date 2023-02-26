import {  Genres } from '../../models/categories/categories.model'
import { AllPopularMovie } from '../../models/movies/popular.model'

export interface MovieCarouselProps {
  categories: Genres
  movies: AllPopularMovie
  title: string
}
