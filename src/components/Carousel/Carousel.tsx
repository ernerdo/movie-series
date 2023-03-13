import { Text, Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import { API_IMAGE_URL } from '../../config'
import { Cast } from '../../models/casts/casts.model'
import { Movie } from '../../models/movies/movies.model'
import { CarouselImage } from '../CarouselImage'
import imageDefault from '../../assets/image-default.png'

interface Props {
  cast?: Cast[]
  movies?: Movie[]
}

export const Carousel: FC<Props> = ({ cast, movies }) => {
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
                  actorId={cast.id}
                />
                <Text>{cast.name}</Text>
              </SwiperSlide>
            )
          })}
        {movies &&
          movies.map((movie, index) => {
            return (
              <SwiperSlide key={`similar-movie-viewer-${index}`}>
                <CarouselImage
                  path={
                    movie.poster_path
                      ? `${API_IMAGE_URL}/w200/${movie?.poster_path}`
                      : imageDefault
                  }
                  movieId={movie?.id}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </Box>
  )
}
