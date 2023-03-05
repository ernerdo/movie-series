import { Text, Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import { API_IMAGE_URL } from '../../config'
import { Cast } from '../../models/casts.model'
import { Movie } from '../../models/movies.model'
import { CarouselImage } from '../CarouselImage'

interface Props {
  cast?: Cast[]
  similarMovies?: Movie[]
}

export const CarouselSwiper: FC<Props> = ({ cast, similarMovies }) => {
  return (
    <Box>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1800: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {cast &&
          cast.map((cast, index) => {
            return (
              <SwiperSlide key={`cast-viewer-${index}`}>
                <CarouselImage
                  path={`${API_IMAGE_URL}/w200${cast.profile_path}`}
                />
                <Text>{cast.name}</Text>
              </SwiperSlide>
            )
          })}
        {similarMovies &&
          similarMovies.map((movie, index) => {
            return (
              <SwiperSlide key={`similar-movie-viewer-${index}`}>
                <CarouselImage
                  path={`${API_IMAGE_URL}/w200/${movie?.poster_path}`}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </Box>
  )
}
