import { FC, useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import { Container, Image } from '@chakra-ui/react'

import { API_IMAGE_URL } from '../../config'
import { Cast } from '../../models/casts.model'

interface Props {
  cast: Cast[]
}

export const CarouselCast: FC<Props> = ({ cast }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'text',
          },
        }}
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
              <Image
                objectFit="cover"
                maxH={{ base: 'md' }}
                maxW={{ base: 'md' }}
                borderRadius={`10px`}
                src={`${API_IMAGE_URL}/w1280${cast.profile_path}`}
                alt={cast.name}
              />
              <p>{cast.name}</p>
            </Container>
          )
        })}
      </ReactSimplyCarousel>
    </div>
  )
}
