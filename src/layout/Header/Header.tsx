import { Box, Center, Flex, Image, Input, Spacer } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box as="header" mb="12px">
      <Flex alignItems="center">
        <Center w="32px" h="32px">
          <Image
            borderRadius="full"
            boxSize="32px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Center>
        <Spacer />
        <Input
          w="85%"
          h="30px"
          placeholder="Search a movie, serie, stream..."
        />
      </Flex>
    </Box>
  )
}
export default Header
