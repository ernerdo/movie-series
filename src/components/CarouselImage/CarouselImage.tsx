import { Image, Skeleton } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  path: string
  movieId?: number
  actorId?: number
}
export const CarouselImage: FC<Props> = ({ path, movieId, actorId }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Skeleton isLoaded={!isLoading}>
      <Link
        to={movieId ? `/detail/${movieId}` : `/actor/${actorId}`}
        preventScrollReset={false}
      >
        <Image
          src={path}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          objectFit={`cover`}
          h={{ base: `200px`, md: `300px` }}
          w={{ base: `150px`, md: `200px` }}
          borderRadius={`10px`}
        />
      </Link>
    </Skeleton>
  )
}
