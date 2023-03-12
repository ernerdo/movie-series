import { GridItem, Text, Link, Flex } from '@chakra-ui/react'
const Footer = () => {
  return (
    <GridItem
      as="footer"
      p="2"
      area={'footer'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" alignItems="center">
        <Text color="white">
          Created by{' '}
          <Link href="https://github.com/darkusphantom" target="_blank">
            @darkusphantom
          </Link>{' '}
          &{' '}
          <Link href="https://github.com/ernerdo" target="_blank">
            @ernerdo
          </Link>
        </Text>
        <Text color="white">
          <Link href="https://www.themoviedb.org/" target="_blank">
            API TMDB
          </Link>
        </Text>
      </Flex>
    </GridItem>
  )
}
export default Footer
