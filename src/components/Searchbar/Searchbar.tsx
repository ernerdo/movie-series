import { useState } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Input,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useCombobox } from 'downshift'
import { Movie } from '../../models/movies/movies.model'
import { getMultiSearch } from '../../client/MovieSearch'
import { API_IMAGE_URL } from '../../config'
import { Actor } from '../../models/actor/actor.model'

const Searchbar = () => {
  const { t } = useTranslation()
  const placeholder = t('placeholder.searchbar')
  const [inputItems, setInputItems] = useState<any[]>([])

  const goToMovie = (id: number) => {
    const url = `${window.location.href}detail/${id}`
    window.location.assign(url)
  }

  const goToActor = (id: number) => {
    const url = `${window.location.href}actor/${id}`
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
        const movies = await getMultiSearch(inputValue)
        const items = movies ? movies.results : []
        setInputItems(items)
      }
    },
  })

  const searchMovieItem = (item: Movie, index: number) => {
    return (
      <ListItem
        key={index}
        {...getItemProps({ item, index })}
        onClick={() => goToMovie(item.id)}
        display="flex"
        justifyContent="space-between"
        mb="3"
        borderBottom="1px solid black"
        fontWeight="normal"
      >
        {item.title}
        {item.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt="poster movie"
            w="32px"
            h="32px"
            role="img for movie"
          />
        )}
      </ListItem>
    )
  }

  const searchActorItem = (item: Actor, index: number) => {
    const imagePath = item.profile_path ? item.profile_path : ''
    return (
      <ListItem
        key={index}
        {...getItemProps({ item, index })}
        onClick={() => goToActor(item.id)}
        display="flex"
        justifyContent="space-between"
        mb="3"
        borderBottom="1px solid black"
        fontWeight="normal"
      >
        {item.name}
        <Image
          src={`${API_IMAGE_URL}/original/${imagePath}`}
          alt="profile of the actor"
          w="32px"
          h="32px"
          role="img for movie"
        />
      </ListItem>
    )
  }

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
          inputItems
            .filter(
              (item: any) =>
                item.media_type === 'movie' || item.media_type === 'person'
            )
            .map((item: any, index) => {
              if (item?.title) {
                return searchMovieItem(item, index)
              } else {
                return searchActorItem(item, index)
              }
            })}
      </List>
    </Box>
  )
}

export { Searchbar }
