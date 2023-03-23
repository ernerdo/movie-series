import { GridItem, Text, Link, Flex } from '@chakra-ui/react'
const Footer = () => {
  return (
    <GridItem
      as="footer"
      px="5"
      py="7"
      area={'footer'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="32px"
    >
      <Flex alignSelf="baseline" w="90%" m="0 auto">
        <Text fontSize="24px" color="white">
          Project Movie
        </Text>
      </Flex>
      <Flex flexDir="column" color="white">
        <Text>Created by:</Text>
        <Link
          href="https://github.com/darkusphantom"
          target="_blank"
          fontSize="12px"
        >
          @darkusphantom
        </Link>
        <Link href="https://github.com/ernerdo" target="_blank" fontSize="12px">
          @ernerdo
        </Link>
      </Flex>
      <Text color="white">
        <Link href="https://www.themoviedb.org/" target="_blank">
          API TMDB
        </Link>
      </Text>
    </GridItem>
  )
}
export default Footer
