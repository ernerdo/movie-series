import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Genres } from '../../models/categories/categories.model'
import { AllPopularMovie, Movie } from '../../models/movies/movies.model'

import { getPopularMovies } from '../../client/MovieApiClient'
import { getGenreMovieList } from '../../client/MovieGenreApiClient'

import { API_IMAGE_URL } from '../../config'

import { CarouselMovies } from '../../layout/CarouselMovies'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'

import { MoviePoster } from '../../components'
import { Categories } from '../../components/Categories/Categories'

const initialPopularMovie: Movie[] = []
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
    useState<Movie[]>(initialPopularMovie)
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
      }, 1000)
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
      <GridItem as="main">
        <Categories categoriesList={genres} />
        <Flex h="300px" position="relative">
          <Flex
            flexDir="column"
            gap="20px"
            color="white"
            w="100%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign="center"
          >
            <Text as="h1" fontSize="2.7rem">
              Welcome to Catalogue Movie
            </Text>
            <Text as="p" fontSize="1.4rem">
              A variety of movies for your entertainment enjoys
            </Text>
          </Flex>
          <Box
            w="100%"
            h="100%"
            bg='url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") no-repeat center center'
            bgSize="cover"
            filter="blur(2px)"
          />
        </Flex>
        <Flex
          as="section"
          flexDir="column"
          gap="80px"
          p="4"
          w="90%"
          maxWidth="1200px"
          margin="auto"
        >
          <CarouselMovies title="Most Popular" movies={popularMovies} />
          <MoviePoster movie={popularMovies[1]} />
          <CarouselMovies title="This Month" movies={popularMovies} />
          <MoviePoster movie={popularMovies[2]} />
          <CarouselMovies title="Recommendations" movies={popularMovies} />
        </Flex>
      </GridItem>
    </DefaultLayout>
  )
}
export default Home
