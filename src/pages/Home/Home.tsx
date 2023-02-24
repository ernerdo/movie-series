import { useEffect, useState } from 'react'
import { GridItem, Box } from '@chakra-ui/react'

import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { CategoriesList } from '../../components/categories/Categories'
import { CarouselMovie } from '../../components/MovieCarousel/MovieCarousel'
import { initialPopularMovie } from './index'
import { MovieElement } from '../../components/MovieElement'

import { getPopularMovies } from '../../client/MovieApiClient'
import { AllPopularMovie } from '../../models/movies/populars.model'
import { getGenreMovieList } from '../../client/MovieGenreApi'

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    confirm: false,
  })
  const [popularMovies, setPopularMovies] =
    useState<AllPopularMovie>(initialPopularMovie)
  const [categoriesList, setCategoriesList] = useState<any>({})

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        getPopularMovies().then((movies: AllPopularMovie) => {
          setPopularMovies(movies)
        })
        getGenreMovieList().then((genre) => {
          setCategoriesList(genre)
        })
        onConfirm()
      }, 2000)
    }
  }, [state.loading])

  const onConfirm = () =>
    setState({
      ...state,
      loading: false,
      confirm: true,
    })

  return (
    <Box as="main" bg="#0E1219">
      <DefaultLayout>
        <GridItem
          area={'main'}
          p="4"
          display="flex"
          flexDir="column"
          gap="24px"
        >
          <CarouselMovie
            title="Populars"
            movies={popularMovies}
            categories={CategoriesList}
          />
          {!state.loading && (
            <MovieElement movie={popularMovies.results[0]}></MovieElement>
          )}

          <CarouselMovie
            title="This Month"
            movies={popularMovies}
            categories={CategoriesList}
          />
          {!state.loading && (
            <MovieElement movie={popularMovies.results[2]}></MovieElement>
          )}

          <CarouselMovie
            title="Recommendations"
            movies={popularMovies}
            categories={CategoriesList}
          />
        </GridItem>
      </DefaultLayout>
    </Box>
  )
}
export default Home
