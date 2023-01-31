import { Flex, Box, Tab, Tabs, TabList } from '@chakra-ui/react'

import { Category } from '../../models/categories.model'

const CarouselMovie = ({ categories, movies, title }: any) => {
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
      <Box overflowX="scroll" whiteSpace="nowrap">
        {movies.map((movie: any, i: number) => (
          <Box
            display="inline-block"
            w="180px"
            h="250px"
            bg="#fff"
            borderRadius="20px"
            mr="10px"
            cursor="pointer"
            key={i}
          >
            {movie.title}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
export { CarouselMovie }
