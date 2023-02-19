import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  CircularProgress,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getCast,
  getMovieDetails,
  getSimilarMovies,
} from '../../client/MovieApiClient'
import { CarouselCast, CarouselMovies } from '../../components'
import { API_IMAGE_URL } from '../../config'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Cast } from '../../models/casts.model'
import { Movie } from '../../models/movies.model'

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [cast, setCast] = useState<Cast[]>([])
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMovieDetails(Number(id)).then((response) => {
      if (!response) return
      setMovie(response)
    })
    getSimilarMovies(Number(id)).then((response) => {
      if (!response) return
      const similarMoviesWithBackdrop: Movie[] = response?.results.filter(
        (movie: Movie, index: number, array: Movie[]) =>
          array.findIndex((m) => m.id === movie.id) === index &&
          movie.poster_path
      )
      setSimilarMovies(similarMoviesWithBackdrop)
    })
    getCast(Number(id)).then((response) => {
      if (!response) return
      const castUniqueWithBackdrop: Cast[] = response?.cast.filter(
        (cast: Cast, index: number, array: Cast[]) =>
          array.findIndex((c) => c.id === cast.id) === index &&
          cast.profile_path
      )
      setCast(castUniqueWithBackdrop)
    })
    setIsLoading(false)
  }, [id])
  if (isLoading)
    return (
      <DefaultLayout>
        <GridItem bg={'whiteAlpha.100'} area={'main'}>
          <CircularProgress isIndeterminate color="blue.300" />
        </GridItem>
      </DefaultLayout>
    )

  return (
    <DefaultLayout>
      <GridItem bg={'whiteAlpha.100'} area={'main'}>
        {movie && (
          <Stack>
            <Box
              position={`relative`}
              _before={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '10%',
                background: 'linear-gradient(to top,#fafafa,transparent)',
              }}
            >
              <Image
                loading="lazy"
                style={{ aspectRatio: '500/281' }}
                display={`block`}
                objectFit={`cover`}
                objectPosition={`top`}
                m={`auto`}
                maxH={`80vh`}
                w={`100%`}
                alt={movie.title}
                src={`${API_IMAGE_URL}/original/${movie.backdrop_path}`}
              />
            </Box>
            <Stack px={`10%`}>
              <Flex justifyContent={`space-between`} mb={5}>
                <Heading
                  size={`3xl`}
                  fontSize={`clamp(2rem,3vw,3.5rem)`}
                  color={`black`}
                >
                  {movie.title}
                </Heading>
                <Heading size={`3xl`} color={`black`}>
                  {movie.vote_average}
                </Heading>
              </Flex>
              <Text fontSize={`xl`} color={`black`}>
                {movie.overview}
              </Text>
              <HStack gap={5} mb={5}>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <Box key={genre.id}>
                      <Button
                        colorScheme="blue"
                        size="md"
                        onClick={() => console.log(genre.name)}
                        _hover={{
                          bg: 'blue.500',
                          color: 'white',
                          transform: 'scale(1.05)',
                          translateY: '-2px',
                        }}
                      >
                        {genre.name}
                      </Button>
                    </Box>
                  ))}
              </HStack>
              <Heading color={`black`}>Cast</Heading>
              <CarouselCast cast={cast} />
              <Heading color={`black`}>Related movies</Heading>
              <CarouselMovies similarMovies={similarMovies} />
            </Stack>
          </Stack>
        )}
      </GridItem>
    </DefaultLayout>
  )
}
export default MovieDetail
