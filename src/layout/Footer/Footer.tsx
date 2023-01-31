import { Box, Text, Link } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box>
      <Text>
        Created by{' '}
        <Link href="https://github.com/darkusphantom" target="_blank">
          @darkusphantom
        </Link>{' '}
        &{' '}
        <Link href="https://github.com/ernerdo" target="_blank">
          @ernerdo
        </Link>
      </Text>
    </Box>
  )
}
export default Footer
