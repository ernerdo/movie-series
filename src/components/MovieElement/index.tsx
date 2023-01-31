import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { MovieElementComponent } from './MovieElement.model'

const MovieElement = ({ movie }: MovieElementComponent) => {
  return (
    <Flex as="section" direction="column" gap="5">
      <Flex direction="column">
        <Box as="p" color="var(--text-color)" fontSize="1.2rem">
          {movie.type}
        </Box>
        <Box as="h2" color="var(--title-color)" fontSize="1.4rem">
          {movie.title}
        </Box>
        <Box as="p" color="var(--text-color)" fontSize="1rem">
          {movie.description.slice(0, 100).concat('...')}
        </Box>
      </Flex>
      <Button
        bg="var(--navy-blue)"
        color="var(--white)"
        size="md"
        alignSelf="center"
        order="2"
      >
        See more
      </Button>
      <Image
        src={movie.img}
        alt="Movie Portada"
        alignSelf="center"
        w="280px"
        h="300px"
        bg="gray"
        borderRadius="12px"
      />
    </Flex>
  )
}

export { MovieElement }
