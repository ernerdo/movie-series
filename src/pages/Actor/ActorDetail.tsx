import { GridItem, Stack, Image, Text, VStack, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getActorDetails, getActorMovies } from '../../client/ActorApiClient'
import { Header } from '../../layout'
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout'

import { Actor } from '../../models/actor/actor.model'
import { Movie } from '../../models/movies/movies.model'
import { API_IMAGE_URL } from '../../config'
import { Carousel } from '../../components'

export const ActorDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [actor, setActor] = useState<Actor>()
  const [movies, setMovies] = useState<Movie[]>()

  useEffect(() => {
    getActorDetails(Number(id)).then((actor) => {
      if (actor?.response?.data?.status_code === 34 || !actor) {
        navigate('/')
      }
      setActor(actor)
    })
    getActorMovies(Number(id)).then((response) => setMovies(response.cast))
  }, [id])
  return (
    <DefaultLayout>
      <Header />
      <GridItem bg={'whiteAlpha.100'} area={'main'}>
        {actor && (
          <Stack px={`10%`} gap={5}>
            <Stack
              flexDir={{ base: 'column', sm: 'row' }}
              justifyContent={`flex-start`}
              alignItems={`flex-start`}
              gap={5}
            >
              <Image
                display={`block`}
                loading="lazy"
                style={{ aspectRatio: '500/281' }}
                objectFit={`cover`}
                alt={actor.name}
                borderRadius="5px"
                boxSize={{
                  sm: '450px',
                }}
                maxW={`30rem`}
                m={0}
                src={`${API_IMAGE_URL}/original/${actor.profile_path}`}
              />
              <VStack alignItems={`flex-start`} gap={1}>
                <Heading>
                  {actor.name} ({actor.birthday}{' '}
                  {actor.deathday ? ' to ' + actor.deathday : ''})
                </Heading>
                <Text>Biography</Text>
                <Text>
                  {actor.biography} {actor.place_of_birth}
                </Text>
                <Text>⭐{actor.popularity}</Text>
              </VStack>
            </Stack>
            {movies && (
              <Stack>
                <Heading color={`black`}>{`${actor.name}'s movies`}</Heading>
                <Carousel similarMovies={movies} />
              </Stack>
            )}
          </Stack>
        )}
      </GridItem>
    </DefaultLayout>
  )
}