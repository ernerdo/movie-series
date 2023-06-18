import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Genre } from '../../models/categories/categories.model'

interface Props {
  category: Genre
}

export const Tags: FC<Props> = ({ category }) => {
  return (
    <Link
      to={`/category/${category?.id}`}
      key={category.id}
      preventScrollReset={false}
    >
      {category?.name.length > 0 && (
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
          minW={'50px'}
        >
          {category?.name}
        </Box>
      )}
    </Link>
  )
}
