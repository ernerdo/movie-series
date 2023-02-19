import { Container, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

import { API_IMAGE_URL } from '../../config'
import { Cast } from '../../models/casts.model'
import { CarouselImage } from '../CarouselImage'

interface Props {
  cast: Cast[]
}

export const CarouselCast: FC<Props> = ({ cast }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  return (
    <div
      style={{
        maxWidth: '115rem',
      }}
    >
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
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
        infinite={true}
      >
        {cast.map((cast, index) => {
          return (
            <Container key={`cast-viewer-${index}`}>
              <CarouselImage
                path={`${API_IMAGE_URL}/w200${cast.profile_path}`}
              />
              <Text>{cast.name}</Text>
            </Container>
          )
        })}
      </ReactSimplyCarousel>
    </div>
  )
}
