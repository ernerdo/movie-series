import { Box, Skeleton } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Trailer } from '../../models/movies/video.model'

interface Props {
  trailer: Trailer
}
export const Iframe: FC<Props> = ({ trailer }) => {
  const [isLoading, setIsLoading] = useState(true)
  const handleIframeLoad = () => {
    setIsLoading(false)
  }
  return (
    <Box
      style={{
        position: 'relative',
        height: 0,
        overflow: 'hidden',
        paddingTop: '56.25%',
        borderRadius: '10px',
      }}
    >
      <Skeleton isLoaded={!isLoading}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title={trailer.name}
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => handleIframeLoad()}
        ></iframe>
      </Skeleton>
    </Box>
  )
}
