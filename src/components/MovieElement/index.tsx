import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { API_IMAGE_URL } from '../../config'
import { MovieElementComponent } from './MovieElement.model'

const MovieElement = ({ movie }: MovieElementComponent) => {
  return (
    <Flex as="section" direction="column" gap="5">
      <Flex direction="column">
        <Box as="h2" color="#fff" fontSize="1.4rem">
          {movie?.title}
        </Box>
        <Box as="p" color="#fff" fontSize="1rem">
          {movie?.overview.slice(0, 100).concat('...')}
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
        src={`${API_IMAGE_URL}/original/${movie?.poster_path}`}
        alt="Movie Portada"
        alignSelf="center"
        w="200px"
        h="300px"
        bg="gray"
        borderRadius="12px"
      />
    </Flex>
  )
}

export { MovieElement }
