import {
  GridItem,
  Heading,
  Stack,
  Text,
  Tag,
  Box,
  Image,
  HStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovieDetails,
  getSimilarMovies,
  getCast,
} from '../../client/MovieApiClient'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { API_IMAGE_URL } from '../../config'

interface genres {
  id: number
  name: string
}
interface Movie {
  id: number
  title: string
  overview: string
  backdrop_path: string
  genres: genres[]
}
const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    overview: '',
    backdrop_path: '',
    genres: [],
  })
  const [similarMovies, setSimilarMovies] = useState(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getMovieDetails(Number(id)).then((response) => {
      console.info(response)
      setMovie(response)
    })
    getSimilarMovies(Number(id)).then((res) => {
      setSimilarMovies(res)
    })
    getCast(Number(id)).then((res) => {
      console.info(res)
    })
  }, [id])

  return (
    <DefaultLayout>
      <GridItem pl="2" bg={'gray.300'} area={'main'}>
        <h1>Movie Detail</h1>
        {movie && (
          <Stack>
            <Box>
              <Image src={`${API_IMAGE_URL}/original/${movie.backdrop_path}`} />
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
            <Heading>Similar Movies</Heading>
          </Stack>
        )}
      </GridItem>
    </DefaultLayout>
  )
}
export default MovieDetail
