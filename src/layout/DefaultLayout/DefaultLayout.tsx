import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { useLocation } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  const location = useLocation()
  const detailRouteRegex = /^\/detail\/\d+$/
  const isDetailRoute = detailRouteRegex.test(location.pathname)
  const headerSize = !isDetailRoute ? '80px' : '0px'
  return (
    <Grid
      templateAreas={`"header"
                    "main"
                    "footer"`}
      gridTemplateRows={`${headerSize} 1fr 100px`}
      gridTemplateColumns={'100%'}
      gap="1"
      bg="#0E1219"
      fontWeight="bold"
    >
      {!isDetailRoute && <Header />}
      {children}
      <Footer />
    </Grid>
  )
}
export default DefaultLayout
