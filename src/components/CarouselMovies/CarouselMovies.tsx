import { Container, Image } from '@chakra-ui/react'
import { FC, useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

import { API_IMAGE_URL } from '../../config'
import { Movie } from '../../models/movies.model'

interface Props {
  similarMovies: Movie[]
}

export const CarouselMovies: FC<Props> = ({ similarMovies }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        // containerProps={{
        //   style: {
        //     width: '100%',
        //     justifyContent: 'space-between',
        //     userSelect: 'text',
        //   },
        // }}
        itemsToShow={6}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
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
            background: 'black',
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
              <Image
                objectFit="cover"
                maxH={{ base: 'sm' }}
                maxW={{ base: 'sm' }}
                borderRadius={`10px`}
                src={`${API_IMAGE_URL}/original/${movie?.poster_path}`}
              />
            </Container>
          )
        })}
      </ReactSimplyCarousel>
    </div>
  )
}
