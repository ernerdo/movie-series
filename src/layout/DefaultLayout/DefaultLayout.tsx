import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Footer, Header } from '../../layout'

type Props = {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"header"
                    "main"
                    "footer"`}
      gridTemplateRows={'50px 1fr 50px'}
      gridTemplateColumns={'1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        <Header />
      </GridItem>

      {children}
      <GridItem pl="2" bg="blue.300" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  )
}
export default DefaultLayout
