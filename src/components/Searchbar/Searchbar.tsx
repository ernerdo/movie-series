import { Box, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getPopularMovies } from '../../client/MovieApiClient'
import { Movie } from '../../models/movies/movies.model'
import { API_IMAGE_URL } from '../../config'

// interface Props {}

const Searchbar: FC<any> = () => {
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')

  const [popularMovies, setPopularMovies] = useState<Movie[]>([])

  const [foundMovie, setFoundMovie] = useState<string[]>([])

  useEffect(() => {
    setTimeout(() => {
      getPopularMovies().then((movies) => {
        if (!movies) return
        const movieFormatted = movies.results.map((movie) => ({
          ...movie,
          src: `${API_IMAGE_URL}/original/${movie.poster_path}`,
        }))
        setPopularMovies(movieFormatted)
        console.log(popularMovies)
      })
    }, 1000)
  }, [])

  const onSearchElement = (event: any) => {
    if (popularMovies.length) {
      const movieToSearch = event.target.value.toLocaleLowerCase()
      const movies = popularMovies.map((movie) =>
        movie.title.toLocaleLowerCase()
      )

      const isMovie = (movie: string) => movie === movieToSearch
      const movieFound = movies.filter(isMovie)
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
    </Box>
  )
}

export { Searchbar }
