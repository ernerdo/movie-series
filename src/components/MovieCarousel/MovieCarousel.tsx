import { Flex, Box, Tab, Tabs, TabList, Image } from '@chakra-ui/react'
import { API_IMAGE_URL } from '../../config'
import { Category } from '../../models/categories.model'
import { MovieCarousel } from './carousel-component.model'
// TODO: Eliminar el componente React-Carousel y Swipper si no se va a usar
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
// import './MovieCarousel.css'

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// }

const CarouselMovie = ({ categories, movies, title }: MovieCarousel) => {
  return (
    <Flex as="section" direction="column" py="2" overflow="hidden">
      <Box as="h2" color="var(--text-color)" fontSize="1.2rem">
        {title}
      </Box>
      <Tabs as="nav" mb="5" overflowX="scroll">
        <TabList>
          {categories.map((category: Category, i: number) => (
            <Tab key={i}>{category.name}</Tab>
          ))}
        </TabList>
      </Tabs>
      {/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="myCarousel"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {moviesResult.map((movie: any) => (
          <Image
            key={movie.id}
            src={`${API_IMAGE_URL}/original/${movie.poster_path}`}
          ></Image>
        ))}
      </Carousel> */}
      <Box overflowX="scroll" whiteSpace="nowrap">
        {movies.results.map((movie: any) => (
          <Box
            display="inline-block"
            w="160px"
            h="220px"
            bg="#fff"
            borderRadius="12px"
            mr="10px"
            cursor="pointer"
            key={movie.id}
          >
            <Image
              src={`${API_IMAGE_URL}/original/${movie.poster_path}`}
              w="inherit"
              h="inherit"
              borderRadius="inherit"
            ></Image>
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
export { CarouselMovie }
