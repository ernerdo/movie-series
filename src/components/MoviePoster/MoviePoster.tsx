import {
  Box,
  Button,
  Flex,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import { FC } from 'react'
import { PopularMovie } from '../../models/movies/popular.model'

interface MoviePosterComponent {
  movie: PopularMovie
}

const MoviePoster: FC<MoviePosterComponent> = ({ movie }) => {
  const rate = !movie?.vote_average ? 0 : movie?.vote_average
  const movieRate = rate * 10
  const colorRate = movieRate > 7 ? 'green.300' : 'orange.400'

  return (
    <Flex as="section" direction="column" gap="5">
      <Flex direction="column">
        <Box as="h2" color="#fff" fontSize="1.4rem">
          {movie?.title}
        </Box>
        <Box as="p" color="#fff" fontSize="1rem">
          {movie?.overview.slice(0, 100).concat('...')}
        </Box>
      </Flex>
      <Button
        bg="var(--navy-blue)"
        color="var(--white)"
        size="md"
        alignSelf="center"
        order="2"
      >
        See more
      </Button>

      <Box w="max-content" mx="auto" position="relative">
        <Image
          src={`${movie?.src}`}
          alt="Movie"
          w="200px"
          h="300px"
          bg="gray"
          borderRadius="12px"
        />
        <CircularProgress
          as="span"
          value={movieRate}
          color={colorRate}
          position="absolute"
          bottom="1.5"
          right="1.5"
        >
          <CircularProgressLabel color="#fff">{rate}</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Flex>
  )
}

export { MoviePoster }
