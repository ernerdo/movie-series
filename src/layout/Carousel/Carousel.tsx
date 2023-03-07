import { Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { FC } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

interface CarouselProps {
  movieList: any[]
}

const CarouselMovie: FC<CarouselProps> = ({ movieList }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
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
        //here you can also pass className, or any other button element attributes
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
      responsiveProps={[
        {
          itemsToShow: 2,
          itemsToScroll: 2,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {movieList.map((movie) => (
        <Image
          key={movie.id}
          src={movie.src}
          w="100%"
          h="100%"
          borderRadius="inherit"
        />
      ))}
    </ReactSimplyCarousel>
  )
}

export { CarouselMovie }
