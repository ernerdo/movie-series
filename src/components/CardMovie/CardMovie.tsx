import { GridItem, Skeleton, Image } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Movie } from '../../models/movies/movies.model'
import { Link } from 'react-router-dom'

interface Props {
  movie: Movie
}
export const CardMovie: FC<Props> = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <GridItem>
      <Skeleton isLoaded={!isLoading}>
        <Link to={`/detail/${movie.id}`} preventScrollReset={false}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
            objectFit={`cover`}
            borderRadius={`10px`}
            transform={`scale(1)`}
            transition={`transform 0.3s ease-in-out`}
            _hover={{
              transform: `scale(1.05)`,
            }}
          />
        </Link>
      </Skeleton>
    </GridItem>
  )
}
