import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { Genres } from '../../models/categories/categories.model'
import { Tags } from '../Tags'

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
        <Tags category={category} key={category.id} />
      ))}
    </Flex>
  )
}
export { Categories }
