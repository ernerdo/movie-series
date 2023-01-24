import { GridItem } from '@chakra-ui/react'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
const Home = () => {
  return (
    <DefaultLayout>
      <GridItem pl="2" bg={'gray.300'} area={'main'}>
        Home
      </GridItem>
    </DefaultLayout>
  )
}
export default Home
