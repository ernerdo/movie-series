import { Image, Skeleton } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  path: string
  id?: number
}
export const CarouselImage: FC<Props> = ({ path, id }) => {
  const [isLoading, setIsLoading] = useState(true)
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      <Link to={id ? `/detail/${id}` : `/`} preventScrollReset={false}>
        <Image
          src={path}
          onLoad={() => handleImageLoad()}
          loading="lazy"
          objectFit={`cover`}
          h={`300px`}
          w={`200px`}
          borderRadius={`10px`}
        />
      </Link>
    </Skeleton>
  )
}
