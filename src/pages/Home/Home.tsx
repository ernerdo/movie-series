import { GridItem } from '@chakra-ui/react'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { CategoriesList } from '../../components/categories/Categories'
import { CarouselMovie } from '../../components/MovieCarousel/MovieCarousel'
import { initialPopularMovie, Movies, MoviesFav } from './index'
import { MovieElement } from '../../components/MovieElement'

import { useEffect, useState } from 'react'
import { getImages, getPopularMovies } from '../../client/Movies'
import { PopularMovie } from '../../models/movies/populars.model'

const Home = () => {
  const [popularMovie, setPopularMovie] =
    useState<PopularMovie>(initialPopularMovie)

  useEffect(() => {
    getPopularMovies().then((movie) => {
      setPopularMovie(movie[0])
    })
  }, [])

  return (
    <DefaultLayout>
      <GridItem
        area={'main'}
        p="4"
        bg={'gray.300'}
        display="flex"
        flexDir="column"
        gap="24px"
      >
        <CarouselMovie
          title="Populars"
          movies={Movies}
          categories={CategoriesList}
        />
        <MovieElement movie={MoviesFav[0]}></MovieElement>
        <CarouselMovie
          title="This Month"
          movies={Movies}
          categories={CategoriesList}
        />
        <MovieElement movie={MoviesFav[0]}></MovieElement>
        <CarouselMovie
          title="Recommendations"
          movies={Movies}
          categories={CategoriesList}
        />
      </GridItem>
    </DefaultLayout>
  )
}
export default Home
