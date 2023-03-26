import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Header } from '../Header'
import { Footer } from '../Footer'

type Props = {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"header"
                    "main"
                    "footer"`}
      gridTemplateRows={'120px 1fr 100px'}
      gridTemplateColumns={'100%'}
      gap="1"
      bg="#0E1219"
      fontWeight="bold"
    >
      <Header />
      {children}
      <Footer />
    </Grid>
  )
}
export default DefaultLayout
