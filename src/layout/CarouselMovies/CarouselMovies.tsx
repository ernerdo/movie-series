import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from '../../components'
import { Movie } from '../../models/movies/movies.model'

interface CarouselProps {
  title?: string
  movies: Movie[]
}

const CarouselMovies: FC<CarouselProps> = ({ title, movies }) => {
  const { t } = useTranslation()

  return (
    <Flex direction="column">
      <Box as="h2" mb="16px" color="white" fontSize="1.4rem">
        {t(`${title}`)}
      </Box>
      <Carousel movies={movies}></Carousel>
    </Flex>
  )
}

export { CarouselMovies }
