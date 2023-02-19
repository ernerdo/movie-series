import { Image, Skeleton } from '@chakra-ui/react'
import { FC, useState } from 'react'

interface Props {
  path: string
}
export const CarouselImage: FC<Props> = ({ path }) => {
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const [isLoading, setIsLoading] = useState(true)

  return (
    <Skeleton isLoaded={!isLoading}>
      <Image
        src={path}
        onLoad={() => handleImageLoad()}
        loading="lazy"
        objectFit="cover"
        maxH={{ base: 'sm' }}
        maxW={{ base: 'sm' }}
        borderRadius={`10px`}
      />
    </Skeleton>
  )
}
