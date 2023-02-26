import { useEffect, useState } from 'react'
import { GridItem, Box } from '@chakra-ui/react'

import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Footer, Header } from '../../layout'

import { CarouselMovie } from '../../components/MovieCarousel/MovieCarousel'
import { MovieElement } from '../../components/MovieElement/MovieElement'
import { Categories } from '../../components/Categories/Categories'

import { AllPopularMovie } from '../../models/movies/popular.model'
import { Genres } from '../../models/categories/categories.model'

import { getPopularMovies } from '../../client/MovieApiClient'
import { getGenreMovieList } from '../../client/MovieGenreApi'

const initialPopularMovie: AllPopularMovie = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

const initialGenres: Genres = {
  genres: [{ id: 0, name: '' }],
}

const Home = () => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    confirm: false,
  })
  const [popularMovies, setPopularMovies] =
    useState<AllPopularMovie>(initialPopularMovie)
  const [genres, setCategoriesList] = useState<Genres>(initialGenres)

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
        <Header>
          <Categories categoriesList={genres} />
        </Header>
        <GridItem
          as="section"
          area={'main'}
          p="4"
          display="flex"
          flexDir="column"
          gap="24px"
        >
          <CarouselMovie
            title="Most Popular"
            movies={popularMovies}
            categories={genres}
          />
          {!state.loading && (
            <MovieElement movie={popularMovies.results[0]}></MovieElement>
          )}

          <CarouselMovie
            title="This Month"
            movies={popularMovies}
            categories={genres}
          />
          {!state.loading && (
            <MovieElement movie={popularMovies.results[2]}></MovieElement>
          )}

          <CarouselMovie
            title="Recommendations"
            movies={popularMovies}
            categories={genres}
          />
        </GridItem>
        <Footer />
      </DefaultLayout>
    </Box>
  )
}
export default Home
