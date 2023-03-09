import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CarouselSwiper } from '../../components'
import { TabsCategories } from '../../components/TabsCategories'
import { Genres } from '../../models/categories/categories.model'

interface CarouselProps {
  title?: string
  genres?: Genres
  movies: any
}

const CarouselMovies: FC<CarouselProps> = ({ title, genres, movies }) => {
  return (
    <Flex direction="column">
      <Box as="h2" mb="16px" color="#fff" fontSize="1.4rem">
        {title}
      </Box>
      <TabsCategories categories={genres} />
      <CarouselSwiper popularMovies={movies}></CarouselSwiper>
    </Flex>
  )
}

export { CarouselMovies }
