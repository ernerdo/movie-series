import { Container, Box } from '@chakra-ui/react'
import { FC, useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

import { API_IMAGE_URL } from '../../config'
import { Movie } from '../../models/movies.model'
import { CarouselImage } from '../CarouselImage'

interface Props {
  similarMovies: Movie[]
}

export const CarouselMovies: FC<Props> = ({ similarMovies }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  return (
    <Box
      style={{
        maxWidth: '100vw',
      }}
    >
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={4}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: '#3182ce',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: '#3182ce',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        easing="linear"
        infinite={true}
      >
        {similarMovies.map((movie, index) => {
          return (
            <Container key={`similar-movie-viewer-${index}`}>
              <CarouselImage
                path={`${API_IMAGE_URL}/w200/${movie?.poster_path}`}
              />
            </Container>
          )
        })}
      </ReactSimplyCarousel>
    </Box>
  )
}
