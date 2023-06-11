import { useState, useContext } from 'react'
import { Box } from '@chakra-ui/react'
// import { SearchIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { MovieDataContext } from '../../context/Context'
import Autosuggest from 'react-autosuggest'

const Searchbar = () => {
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')

  const movieData = useContext(MovieDataContext)
  const data = movieData.map((movie) => movie.title.toLocaleLowerCase())

  const [movies, setMovies] = useState<string[]>(data)
  const [value, setValue] = useState<string>('')
  const [suggestSelected, setSuggestSelected] = useState<string>()

  // event: ChangeEvent<HTMLInputElement>
  const filteringMovies = (input: any) => {
    console.log(input)
    const inputValue = input.value.trim().toLocaleLowerCase()
    const dataFiltered = data.filter((movie) => {
      const isMovieCoincidence = movie
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300 \u036)]/g, '')
        .includes(inputValue)
      if (isMovieCoincidence) return movie
    })

    return !inputValue.length ? [] : dataFiltered
  }
  const onSuggestionsFetchRequested = (value: any) => {
    setMovies(filteringMovies(value))
  }

  const onSuggestionsClearRequested = () => setMovies([])

  const getSuggestionValue = (suggestion: string) => `${suggestion}`

  const selectSuggest = (value: string) => setSuggestSelected(value)
  const renderSuggestion = (suggestion: string) => (
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
      onClick={() => selectSuggest(suggestion)}
    >
      `${suggestion}`
    </Box>
  )

  const onChange = (event: any, { newValue }: { newValue: string }) =>
    setValue(newValue)

  const inputProps = {
    placeholder,
    value,
    onChange,
  }

  return (
    <Box>
      <Autosuggest
        suggestions={movies}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </Box>
  )
}

export { Searchbar }
