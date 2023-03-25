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
      flexWrap={{ base: 'wrap', sm: 'initial' }}
      gap={{ sm: '32px' }}
      maxW="1200px"
      mx="auto"
    >
      <Flex>
        <Text fontSize="24px" color="white" textAlign="center">
          Project Movie
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        w={{ base: '90%', sm: 'initial' }}
        color="white"
        textAlign="center"
      >
        <Text>
          Created by with{' '}
          <Link href="https://www.themoviedb.org/" target="_blank">
            API TMDB
          </Link>{' '}
          by{' '}
          <Link
            href="https://github.com/darkusphantom"
            target="_blank"
            fontSize="12px"
          >
            @darkusphantom
          </Link>
          {' & '}
          <Link
            href="https://github.com/ernerdo"
            target="_blank"
            fontSize="12px"
          >
            @ernerdo
          </Link>
        </Text>
      </Flex>
    </GridItem>
  )
}
export default Footer
