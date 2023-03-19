import React from 'react'
import { Flex } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <Flex
      flexDirection="column"
      gap="1"
      bg="transparent"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {children}
    </Flex>
  )
}
export default DefaultLayout
