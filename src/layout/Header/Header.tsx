import { Flex, GridItem, Input, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <GridItem
      as="header"
      area={'header'}
      display="flex"
      flexDirection="column"
      gap="3"
      px="2"
      pt="4"
      w="100%"
      overflow="hidden"
    >
      <Flex justifyContent="space-around" alignItems="center" mb="16px">
        <Link to={`/`}>
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '1.2rem', md: '1.7rem' }}
          >
            Project Movie
          </Text>
        </Link>
        <Input
          w="70%"
          h="30px"
          color="white"
          placeholder="Search a movie, serie, stream..."
        />
      </Flex>
      {children}
    </GridItem>
  )
}
export default Header
