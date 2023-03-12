import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CarouselSwiper } from '../../components'
import { Genres } from '../../models/categories/categories.model'
import { PopularMovie } from '../../models/movies/popular.model'

interface CarouselProps {
  title?: string
  genres?: Genres
  movies: PopularMovie[]
}

const CarouselMovies: FC<CarouselProps> = ({ title, movies }) => {
  return (
    <Flex direction="column">
      <Box as="h2" mb="16px" color="white" fontSize="1.4rem">
        {title}
      </Box>
      <CarouselSwiper popularMovies={movies}></CarouselSwiper>
    </Flex>
  )
}

export { CarouselMovies }
