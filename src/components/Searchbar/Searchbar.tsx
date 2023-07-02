import { useState } from 'react'
import { Box, Flex, IconButton, Input, List, ListItem } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useCombobox } from 'downshift'
import { Movie } from '../../models/movies/movies.model'
import { getMovieToSearch } from '../../client/MovieSearch'

const Searchbar = () => {
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')
  const [inputItems, setInputItems] = useState<Movie[]>([])

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
    onInputValueChange: async ({ inputValue }) => {
      if (!inputValue) setInputItems([])
      else {
        const movies = await getMovieToSearch(inputValue)
        const items = movies ? movies.results : []
        setInputItems(items)
      }
    },
  })

  return (
    <Box position="relative" w={{ base: 'auto', sm: '10%', md: '40%' }}>
      <Flex pos="relative">
        <Input placeholder={placeholder} color="#fff" {...getInputProps()} />
        <IconButton
          aria-label="Search movie"
          icon={<SearchIcon />}
          pos="absolute"
          right="0"
          borderStartRadius="0"
          {...getToggleButtonProps()}
        />
      </Flex>
      <List
        as="ul"
        pos="absolute"
        top="45px"
        w={isOpen ? '100%' : 0}
        maxHeight={isOpen ? 240 : 0}
        overflowY="scroll"
        background={isOpen ? 'white' : ''}
        opacity={isOpen ? 1 : 0}
        color="black"
        zIndex="4"
        p="2"
        borderRadius="5px"
        {...getMenuProps()}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <ListItem
              key={index}
              {...getItemProps({ item, index })}
              onClick={() => goToMovie(item.id)}
              mb="3"
              borderBottom="1px solid black"
              fontWeight="normal"
            >
              {item.title}
            </ListItem>
          ))}
      </List>
    </Box>
  )
}

export { Searchbar }
