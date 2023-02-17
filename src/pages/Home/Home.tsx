import { GridItem } from '@chakra-ui/react'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { CategoriesList } from '../../components/categories/Categories'
import { CarouselMovie } from '../../components/MovieCarousel/MovieCarousel'
import { initialPopularMovie } from './index'
import { MovieElement } from '../../components/MovieElement'

import { useEffect, useState } from 'react'
import { getPopularMovies } from '../../client/MovieApiClient'
import { PopularMovie } from '../../models/movies/populars.model'
import { getGenreMovieList } from '../../client/MovieGenreApi'

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    confirm: false,
  })
  const [popularMovies, setPopularMovies] =
    useState<PopularMovie>(initialPopularMovie)
  const [categoriesList, setCategoriesList] = useState<any>({})

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        getPopularMovies().then((movies: PopularMovie) => {
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
        {/* <MovieElement movie={MoviesFav[0]}></MovieElement> */}
        {/* <CarouselMovie
          title="Recommendations"
          movies={popularMovies}
          categories={CategoriesList}
        /> */}
      </GridItem>
    </DefaultLayout>
  )
}
export default Home
