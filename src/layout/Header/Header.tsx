import { Flex, Text, Input, GridItem } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
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
      pb="2"
      w="100%"
      overflow="hidden"
    >
      <Flex justifyContent="space-around" alignItems="center" mb="16px">
        <Text as="h2" color="#fff">
          Project Movie
        </Text>
        <Input
          w="70%"
          h="30px"
          color="#fff"
          placeholder="Search a movie, serie, stream..."
        />
      </Flex>
      {children}
    </GridItem>
  )
}
export default Header
