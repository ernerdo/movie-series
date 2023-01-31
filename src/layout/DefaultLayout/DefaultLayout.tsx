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
      gridTemplateRows={'100px 1fr 50px'}
      gridTemplateColumns={'100%'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      bg="#5a5a5a"
      fontWeight="bold"
    >
      <GridItem
        area={'header'}
        px="2"
        py="2"
        bg="transparent"
        w="100%"
        overflow="hidden"
      >
        <Header />
        <Categories />
      </GridItem>
      {children}
      <GridItem
        p="2"
        bg="blue.300"
        area={'footer'}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Footer />
      </GridItem>
    </Grid>
  )
}
export default DefaultLayout
