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
import { useParams, useNavigate, Link } from 'react-router-dom'

import {
  getCast,
  getMovieDetails,
  getMovieVideos,
  getSimilarMovies,
} from '../../client/MovieApiClient'
import { Carousel, Iframe, BackButton, UpButton } from '../../components'
import { API_IMAGE_URL } from '../../config'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Cast } from '../../models/casts/casts.model'
import { Movie } from '../../models/movies/movies.model'
import { Trailer } from '../../models/movies/video.model'
import coverDefault from '../../assets/cover-default.png'
import { useTranslation } from 'react-i18next'

const MovieDetail = () => {
  const navigate = useNavigate()
  const [movie, setMovie] = useState<Movie>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [cast, setCast] = useState<Cast[]>([])
  const [trailer, setTrailer] = useState<Trailer>()
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    getMovieDetails(Number(id)).then((response) => {
      if (!response) navigate('/')
      if (response) setMovie(response)
    })
    getSimilarMovies(Number(id)).then((response) => {
      if (!response) return
      const similarMoviesWithBackdrop = response.results.filter(
        (movie, index, array) =>
          array.findIndex((m) => m.id === movie.id) === index &&
          movie.poster_path
      )
      setSimilarMovies(similarMoviesWithBackdrop)
    })
    getCast(Number(id)).then((response) => {
      if (!response) return
      const castUniqueWithBackdrop = response.cast.filter(
        (cast, index, array) =>
          array.findIndex((c) => c.id === cast.id) === index &&
          cast.profile_path
      )
      setCast(castUniqueWithBackdrop)
    })
    getMovieVideos(Number(id)).then((response) => {
      if (!response) return
      const youTube = response.results.find((video) => video.type === 'Trailer')
      setTrailer(youTube)
    })
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [id])

  return (
    <DefaultLayout>
      <GridItem area={'main'}>
        {movie && (
          <Stack id={`#top`}>
            <Box
              position={`relative`}
              _before={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '10%',
                background: 'linear-gradient(to top,#0a0a12,transparent)',
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
                  src={
                    movie.backdrop_path
                      ? `${API_IMAGE_URL}/original/${movie.backdrop_path}`
                      : coverDefault
                  }
                  onLoad={() => {
                    setIsLoading(false)
                  }}
                />
              </Skeleton>
              <BackButton />
              <UpButton />
            </Box>
            <Stack px={`10%`}>
              <Flex justifyContent={`space-between`} mb={5}>
                <Skeleton isLoaded={!isLoading}>
                  <Heading
                    size={`3xl`}
                    fontSize={`clamp(2rem,3vw,3.5rem)`}
                    color={`white`}
                  >
                    {movie.title ? movie.title : movie.original_title}
                  </Heading>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Heading size={`3xl`} color={`white`}>
                    {movie.vote_average}
                  </Heading>
                </Skeleton>
              </Flex>
              <Skeleton isLoaded={!isLoading}>
                <Text fontSize={`xl`} color={`white`}>
                  {movie.release_date}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Text fontSize={`xl`} color={`white`}>
                  {movie.overview}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <HStack gap={5} mb={5} wrap={`wrap`}>
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <Link
                        to={`/category/${genre?.id}`}
                        key={genre.id}
                        preventScrollReset={false}
                      >
                        <Box key={genre.id}>
                          <Button
                            colorScheme="blue"
                            size="md"
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
                      </Link>
                    ))}
                </HStack>
              </Skeleton>
              {cast && (
                <>
                  <Heading color={`white`}>{t('movie_detail.cast')}</Heading>
                  <Carousel cast={cast} />
                </>
              )}
              {trailer && (
                <>
                  <Heading color={`white`}>Trailer</Heading>
                  <Iframe trailer={trailer} />
                </>
              )}
              {similarMovies.length && (
                <>
                  <Heading color={`white`}>
                    {t('movie_detail.related_movies')}
                  </Heading>
                  <Carousel movies={similarMovies} />
                </>
              )}
            </Stack>
          </Stack>
        )}
      </GridItem>
    </DefaultLayout>
  )
}
export default MovieDetail
