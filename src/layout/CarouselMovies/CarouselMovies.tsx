import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CarouselSwiper } from '../../components'
import { PopularMovie } from '../../models/movies/popular.model'

interface CarouselProps {
  title?: string
  popularMovies: PopularMovie[]
}

const CarouselMovies: FC<CarouselProps> = ({ title, popularMovies }) => {
  return (
    <Flex direction="column">
      <Box as="h2" mb="16px" color="white" fontSize="1.4rem">
        {title}
      </Box>
      <CarouselSwiper popularMovies={popularMovies}></CarouselSwiper>
    </Flex>
  )
}

export { CarouselMovies }
