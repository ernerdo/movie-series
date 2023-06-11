import { useState, useContext } from 'react'
import { Box, Flex, IconButton, Input, List, ListItem } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { MovieDataContext } from '../../context/Context'
import { useCombobox } from 'downshift'
import { Movie } from '../../models/movies/movies.model'

const Searchbar = () => {
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')

  const movieData = useContext(MovieDataContext)
  const [inputItems, setInputItems] = useState<Movie[]>([])

  const getMovieFiltered = (inputValue: string | undefined) => {
    const word = !inputValue ? '' : inputValue.toLocaleLowerCase()
    return movieData.filter((movie) =>
      movie.title.toLocaleLowerCase().startsWith(word)
    )
  }

  const goToMovie = (movieId: number) => {
    const url = `${window.location.href}detail/${movieId}`
    window.location.assign(url)
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    getToggleButtonProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) =>
      setInputItems(getMovieFiltered(inputValue)),
  })

  return (
    <Box position="relative">
      <Flex pos="relative">
        <Input placeholder={placeholder} color="#fff" {...getInputProps()} />
        <IconButton
          aria-label="Search movie"
          icon={<SearchIcon />}
          pos="absolute"
          right="0"
          {...getToggleButtonProps()}
        />
      </Flex>
      <List
        as="ul"
        pos="absolute"
        w="100%"
        maxHeight={240}
        overflowY="scroll"
        background="#fff"
        color="#000"
        zIndex="1"
        {...getMenuProps()}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <ListItem
              key={index}
              {...getItemProps({ item, index })}
              onClick={() => goToMovie(item.id)}
            >
              {/* <Link to={`/detail/${item.id}`}> */}
              {item.title}
              {/* </Link> */}
            </ListItem>
          ))}
      </List>
    </Box>
  )
}

export { Searchbar }
