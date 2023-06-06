import { useState, useContext } from 'react'
import { Box, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { MovieDataContext } from '../../context/context'

const Searchbar = () => {
  const movieData = useContext(MovieDataContext);
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')

  const [foundMovie, setFoundMovie] = useState<string[]>([])
  const [searchbarValue, setSearchbarValue] = useState<string>('')


  const onSearchElement = (event: any) => {
    if (movieData.length) {
      const inputValue = event.target.value.toLocaleLowerCase()
      setSearchbarValue(inputValue)

      const moviesNames = movieData.map((movie) =>
        movie.title.toLocaleLowerCase()
      )

      const isMovie = (movie: string) => movie === inputValue
      const movieFound = moviesNames.filter(isMovie)
      setFoundMovie(movieFound)
      console.log(foundMovie)
    }
  }

  return (
    <Box>
      <Box w="70%" maxW="" h="30px" position="relative">
        <Input
          w="100%"
          h="100%"
          pl="30px"
          color="white"
          placeholder={`${placeholder}`}
          onChange={onSearchElement}
        />
        <SearchIcon color="white" position="absolute" left="8px" top="8px" />
      </Box>
      {searchbarValue.length && (
        <Box
          w="100%"
          h="554px"
          p="12px"
          bg="white"
          color="black"
          position="absolute"
          top="80px"
          left="0"
          zIndex="3"
        >
          Soy una caja
        </Box>
      )}
    </Box>
  )
}

export { Searchbar }
