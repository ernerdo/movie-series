import { Flex, GridItem } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Searchbar } from '../../components/Searchbar'
import { TitlePage } from '../../components/TitlePage'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <GridItem
      as="header"
      area={'header'}
      display="flex"
      flexDirection="column"
      gap="3"
      px="2"
      pt="4"
      pb="2"
      w="100%"
      overflow="hidden"
    >
      <Flex justifyContent="space-around" alignItems="center" mb="16px">
        <TitlePage />
        <Searchbar placeholder="Search a movie, serie, stream..." />
      </Flex>
      {children}
    </GridItem>
  )
}
export default Header
