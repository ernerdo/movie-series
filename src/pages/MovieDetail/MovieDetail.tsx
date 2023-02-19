import {
  Box,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getCast,
  getMovieDetails,
  getSimilarMovies,
} from '../../client/MovieApiClient'
import { CarouselMovies } from '../../components'
import { API_IMAGE_URL } from '../../config'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Movie } from '../../models/movies.model'
import { Cast } from '../../models/casts.model'

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [cast, setCast] = useState<Cast[]>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getMovieDetails(Number(id)).then((response) => {
      console.info('getMovieDetails', response)
      if (!response) return
      setMovie(response)
    })
    getSimilarMovies(Number(id)).then((response) => {
      console.info('getSimilarMovies', response)
      if (!response) return
      const similarMoviesWithBackdrop: Movie[] = response?.results.filter(
        (movie: Movie, index: number, array: Movie[]) =>
          array.findIndex((m) => m.id === movie.id) === index &&
          movie.poster_path
      )
      setSimilarMovies(similarMoviesWithBackdrop)
    })
    getCast(Number(id)).then((response) => {
      console.info('getCast', response)
      if (!response) return
      const castUniqueWithBackdrop: Cast[] = response?.cast.filter(
        (cast: Cast, index: number, array: Cast[]) =>
          array.findIndex((c) => c.id === cast.id) === index &&
          cast.profile_path
      )
      setCast(castUniqueWithBackdrop)
    })
  }, [id])

  return (
    <DefaultLayout>
      <GridItem pl="2" bg={'gray.300'} area={'main'}>
        <Heading>Movie Detail</Heading>
        {movie && (
          <Stack>
            <Box h={`400px`} w={`700px`}>
              <Image
                objectFit={`cover`}
                src={`${API_IMAGE_URL}/original/${movie.backdrop_path}`}
              />
            </Box>
            <Heading>{movie.title}</Heading>
            <Text>{movie.overview}</Text>
            <HStack>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <Box key={genre.id}>
                    <Tag>{genre.name}</Tag>
                  </Box>
                ))}
            </HStack>
            <Heading>Reparto</Heading>
            {/* {cast.length > 0 && (
              <HStack>
                {cast.map((actor) => (
                  <Box key={`cast-${actor.id}`}>
                    <Box>
                      <Image
                        src={`${API_IMAGE_URL}/w1280/${actor?.profile_path}`}
                        objectFit={'cover'}
                      />
                    </Box>
                    <Text>{actor.name}</Text>
                    <Text>{actor.character}</Text>
                  </Box>
                ))}
              </HStack>
            )} */}
            <Heading>Similar Movies</Heading>
            <CarouselMovies similarMovies={similarMovies} />

            {/* {similarMovies.length > 0 && (
              <HStack>
                {similarMovies.map((movie: Movie) => (
                  <Box key={movie.id}>
                    <Box>
                      <Image
                        objectFit={'cover'}
                        src={`${API_IMAGE_URL}/w1280/${movie?.backdrop_path}`}
                      />
                    </Box>
                    <Text>{movie.title}</Text>
                  </Box>
                ))}
              </HStack>
            )} */}
          </Stack>
        )}
      </GridItem>
    </DefaultLayout>
  )
}
export default MovieDetail
