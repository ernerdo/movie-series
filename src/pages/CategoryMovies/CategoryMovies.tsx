import { GridItem } from '@chakra-ui/react'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMoviesByCategory } from '../../client/MovieApiClient'
import { Movie } from '../../models/movies/movies.model'

export const CategoryMovies = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [movies, setMovies] = useState<Movie[]>()
  useEffect(() => {
    getMoviesByCategory(Number(id)).then((movies) => {
      if (!movies) {
        navigate('/')
      }

      setMovies(movies?.results)
      console.log(movies)
    })
  }, [id])
  return (
    <DefaultLayout>
      <GridItem area={'main'}>{movies && <div>Category</div>}</GridItem>
    </DefaultLayout>
  )
}
