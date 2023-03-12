import React from 'react'
import { Grid } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"header"
                    "main"
                    "footer"`}
      gridTemplateRows={'120px 1fr 50px'}
      gridTemplateColumns={'100%'}
      gap="1"
      bg="transparent"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {children}
    </Grid>
  )
}
export default DefaultLayout
