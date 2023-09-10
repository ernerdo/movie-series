import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
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
            top: '6rem',
            zIndex: 3,
          }}
          left={['0.3rem', '1rem']}
          size={['xs', 'sm']}
          onClick={goBack}
        >
          <ArrowBackIcon />
        </Button>
      )}
    </>
  )
}
