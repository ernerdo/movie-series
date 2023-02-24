import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Footer, Header } from '../../layout'
import { Categories } from '../../components/categories'

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
      <Header>
        <Categories />
      </Header>
      {children}
      <Footer />
    </Grid>
  )
}
export default DefaultLayout
