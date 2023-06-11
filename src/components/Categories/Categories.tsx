import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { Genres } from '../../models/categories/categories.model'
import { Link } from 'react-router-dom'

interface CategoriesProps {
  categoriesList?: Genres
}

const Categories: FC<CategoriesProps> = ({ categoriesList }) => {
  const genres = categoriesList?.genres.map((category) => {
    if (category.name === 'TV Movie' || category.name === 'Película de TV') {
      category.name = 'TV'
    }
    if (
      category.name === 'Science Fiction' ||
      category.name === 'Ciencia ficción'
    ) {
      category.name = 'SCIFI'
    }
    return category
  })

  return (
    <Flex
      as="nav"
      gap="12px"
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
      wrap={`wrap`}
    >
      {genres?.map((category) => (
        <Link
          to={`/category/${category?.id}`}
          key={category.id}
          preventScrollReset={false}
        >
          <Box
            display="inline-block"
            h="max-content"
            color="white"
            bg="darkBlue"
            py="1"
            px="3"
            borderRadius="12px"
            fontSize=".9rem"
            _hover={{
              cursor: 'pointer',
              bg: 'lightBlue',
              color: 'darkBlue',
              transform: 'scale(1.1)',
              translateY: '-10px',
              transition: 'all .3s ease',
            }}
          >
            {category?.name}
          </Box>
        </Link>
      ))}
    </Flex>
  )
}
export { Categories }
