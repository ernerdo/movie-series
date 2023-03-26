import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { Genres } from '../../models/categories/categories.model'

interface CategoriesProps {
  categoriesList?: Genres
}

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
    <Flex
      as="nav"
      gap="12px"
      overflow={`auto`}
      overflowY={`hidden`}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '2px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'white',
          borderRadius: '24px',
        },
      }}
    >
      {genres?.map((category, i) => (
        <Box
          display="inline-block"
          h="max-content"
          color="white"
          bg="darkBlue"
          py="1"
          px="3"
          borderRadius="12px"
          fontSize=".9rem"
          key={i}
          onClick={() => console.log(category.id)}
        >
          {category?.name}
        </Box>
      ))}
    </Flex>
  )
}
export { Categories }
