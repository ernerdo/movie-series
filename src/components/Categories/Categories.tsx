import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CategoriesProps } from './categories.model'

const Categories: FC<CategoriesProps> = ({ categoriesList }) => {
  const genres = categoriesList?.genres.map((category) => {
    if (category.name === 'TV Movie') {
      category.name = 'TV'
    }
    if (category.name === 'Science Fiction') {
      category.name = 'SCIFI'
    }
    return category
  })

  return (
    <Flex as="nav" gap="12px" p="1" overflow={`auto`} overflowY={`hidden`}>
      {genres?.map((category, i) => (
        <Box
          display="inline-block"
          h="max-content"
          color="#fff"
          bg="#1169c9"
          py="1"
          px="3"
          borderRadius="12px"
          fontSize=".9rem"
          key={i}
        >
          {category?.name}
        </Box>
      ))}
    </Flex>
  )
}
export { Categories }
