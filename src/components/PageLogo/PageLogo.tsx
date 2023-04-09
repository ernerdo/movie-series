import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

const PageLogo = () => {
  return (
    <Link to={`/`} style={{ width: '20%' }}>
      <Text as="h2" color="white" fontSize={{ base: '1.2rem', md: '1.7rem' }}>
        Project Movie
      </Text>
    </Link>
  )
}

export { PageLogo }
