import { useEffect, useState } from 'react'
import { GridItem, Box } from '@chakra-ui/react'

import {
  AllPopularMovie,
  PopularMovie,
} from '../../models/movies/popular.model'
import { Genres } from '../../models/categories/categories.model'

import { getPopularMovies } from '../../client/MovieApiClient'
import { getGenreMovieList } from '../../client/MovieGenreApiClient'

import { API_IMAGE_URL } from '../../config'

import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Footer, Header } from '../../layout'
import { CarouselMovies } from '../../layout/CarouselMovies'

import { MoviePoster } from '../../components'
import { Categories } from '../../components/Categories/Categories'

const initialPopularMovie: PopularMovie[] = []

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
    useState<PopularMovie[]>(initialPopularMovie)
  const [genres, setCategoriesList] = useState<Genres>(initialGenres)

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        getPopularMovies().then((movies: AllPopularMovie) => {
          const movieFormatted = movies.results.map((movie) => ({
            ...movie,
            src: `${API_IMAGE_URL}/original/${movie.poster_path}`,
          }))
          setPopularMovies(movieFormatted)
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
          area="main"
          p="4"
          display="flex"
          flexDir="column"
          gap="60px"
        >
          <CarouselMovies title="Most Popular" popularMovies={popularMovies} />
          {!state.loading && <MoviePoster movie={popularMovies[1]} />}
          <CarouselMovies title="This Month" popularMovies={popularMovies} />
          {!state.loading && <MoviePoster movie={popularMovies[2]} />}
          <CarouselMovies
            title="Recommendations"
            popularMovies={popularMovies}
          />
        </GridItem>
        <Footer />
      </DefaultLayout>
    </Box>
  )
}
export default Home
