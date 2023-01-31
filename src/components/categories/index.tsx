import { Box, Flex } from '@chakra-ui/react'
import { Category } from '../../models/categories.model'
import { CategoriesList } from './Categories'

const Categories = () => {
  return (
    <Box as="nav" overflow="scroll" p="1">
      <Flex gap="12px">
        {CategoriesList.map((category: Category, i: number) => (
          <Box
            as="li"
            display="inline-block"
            color="#fff"
            bg="#1169c9"
            padding="1"
            borderRadius="12px"
            fontSize=".9rem"
            key={i}
          >
            {category.name}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
export { Categories }
