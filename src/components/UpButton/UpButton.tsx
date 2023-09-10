import { ArrowUpIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const UpButton = () => {
  const [showButton, setShowButton] = useState(false)

  const goUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showButton && (
        <Button
          position={`fixed`}
          style={{
            bottom: '2rem',
            zIndex: 1,
          }}
          right={['0.3rem', '2rem']}
          size={['xs', 'sm']}
          onClick={goUp}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  )
}
