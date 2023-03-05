import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getCast,
  getMovieDetails,
  getMovieVideos,
  getSimilarMovies,
} from '../../client/MovieApiClient'
import { CarouselSwiper, Iframe } from '../../components'
import { API_IMAGE_URL } from '../../config'
import { Footer } from '../../layout'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Cast } from '../../models/casts.model'
import { Movie, Trailer } from '../../models/movies.model'

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [cast, setCast] = useState<Cast[]>([])
  const [trailer, setTrailer] = useState<Trailer>()
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
    getMovieVideos(Number(id)).then((response) => {
      if (!response) return
      const youTube = response?.results.filter(
        (video: Trailer) =>
          video.site === 'YouTube' &&
          video.type === 'Trailer' &&
          video.name === 'Official Trailer'
      )
      setTrailer(youTube[0])
    })
  }, [id])
  const handleImageLoad = () => {
    setIsLoading(false)
  }

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
              <Skeleton isLoaded={!isLoading}>
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
                  fallbackSrc="https://via.placeholder.com/500x281"
                  onLoad={() => {
                    handleImageLoad()
                  }}
                  fallbackStrategy={`beforeLoadOrError`}
                />
              </Skeleton>
            </Box>
            <Stack px={`10%`}>
              <Flex justifyContent={`space-between`} mb={5}>
                <Skeleton isLoaded={!isLoading}>
                  <Heading
                    size={`3xl`}
                    fontSize={`clamp(2rem,3vw,3.5rem)`}
                    color={`black`}
                  >
                    {movie.title}
                  </Heading>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Heading size={`3xl`} color={`black`}>
                    {movie.vote_average}
                  </Heading>
                </Skeleton>
              </Flex>
              <Skeleton isLoaded={!isLoading}>
                <Text fontSize={`xl`} color={`black`}>
                  {movie.overview}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
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
              </Skeleton>
              {cast && (
                <>
                  <Heading color={`black`}>Cast</Heading>
                  <CarouselSwiper cast={cast} />
                </>
              )}
              {trailer && (
                <>
                  <Heading color={`black`}>Trailer</Heading>
                  <Iframe trailer={trailer} />
                </>
              )}
              {similarMovies && (
                <>
                  <Heading color={`black`}>Related movies</Heading>
                  <CarouselSwiper similarMovies={similarMovies} />
                </>
              )}
            </Stack>
          </Stack>
        )}
      </GridItem>
      <Footer />
    </DefaultLayout>
  )
}
export default MovieDetail
