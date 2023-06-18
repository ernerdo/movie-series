import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMoviesByCategory } from '../../client/MovieApiClient'
import { CardMovie } from '../../components'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'
import { Movie } from '../../models/movies/movies.model'

export const CategoryMovies = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [movies, setMovies] = useState<Movie[]>([])
  const observerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    getMoviesByCategory(Number(id), currentPage).then((movies) => {
      if (!movies) {
        navigate('/')
      } else {
        setMovies((prevMovies) => [...prevMovies, ...movies.results])
      }
    })
  }, [id, currentPage])
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [])

  return (
    <DefaultLayout>
      <GridItem area={'main'}>
        {movies && (
          <Grid
            templateColumns={`repeat(auto-fit, minmax(200px, 1fr))`}
            px="10%"
            py="10"
            margin="auto"
            gap={4}
          >
            {movies.map((movie) => (
              <CardMovie movie={movie} key={movie.id} />
            ))}
            <div ref={observerRef}></div>
          </Grid>
        )}
      </GridItem>
    </DefaultLayout>
  )
}
