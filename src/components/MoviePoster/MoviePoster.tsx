import {
  Box,
  Button,
  Flex,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Movie } from '../../models/movies/movies.model'

interface MoviePosterComponent {
  movie: Movie
}

const MoviePoster: FC<MoviePosterComponent> = ({ movie }) => {
  const rate = !movie?.vote_average ? 0 : movie?.vote_average
  const movieRate = rate * 10
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Flex
      as="section"
      justifyContent="space-around"
      alignItems="center"
      gap="5px"
      w="90%"
      m="0 auto"
    >
      <Flex direction="column" justifyContent="center" gap="20px" w="48%">
        <Skeleton isLoaded={!isLoading}>
          <Box as="h2" color="white" fontSize="1.7rem">
            {movie?.title}
          </Box>
        </Skeleton>
        <SkeletonText
          isLoaded={!isLoading}
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
        >
          <Box as="p" color="white" fontSize={{ base: '.9rem', sm: '1rem' }}>
            {movie?.overview}
          </Box>
        </SkeletonText>
        <Skeleton isLoaded={!isLoading}>
          <Button
            bg="navyBlue"
            color="white"
            size="md"
            alignSelf="center"
            order="2"
            onClick={() => console.log(movie?.id)}
          >
            See more
          </Button>
        </Skeleton>
      </Flex>

      <Skeleton isLoaded={!isLoading} w="50%" h="300px" mx="auto">
        <Box w="100%" maxW="200px" m="0 auto" position="relative">
          <Image
            src={`${movie?.src}`}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
            alt="Movie"
            w="100%"
            h="150%"
            borderRadius="12px"
          />
          <CircularProgress
            as="span"
            value={movieRate}
            color={movieRate > 7 ? 'green.300' : 'orange.400'}
            position="absolute"
            bottom="1.5"
            right="1.5"
          >
            <CircularProgressLabel color="white">{rate}</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Skeleton>
    </Flex>
  )
}

export { MoviePoster }
