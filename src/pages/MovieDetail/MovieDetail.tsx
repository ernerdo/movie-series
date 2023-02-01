import { GridItem } from '@chakra-ui/react'
import { getMovieDetails } from '../../client/MovieApiClient'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'

const MovieDetail = () => {
  getMovieDetails(123).then((res) => {
    console.info(res)
  })
  return (
    <DefaultLayout>
      <GridItem pl="2" bg={'gray.300'} area={'main'}>
        Movie Detail
      </GridItem>
    </DefaultLayout>
  )
}
export default MovieDetail
