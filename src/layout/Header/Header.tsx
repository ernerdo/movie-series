import { Box, Flex, GridItem } from '@chakra-ui/react'
import { BtnBurger } from '../../components/BtnBurger'
import { BtnTranslate } from '../../components/BtnTranslate'
import { PageLogo } from '../../components/PageLogo'
import { Searchbar } from '../../components/Searchbar'

const Header = () => {
  return (
    <GridItem
      as="header"
      area={'header'}
      display="flex"
      flexDirection="column"
      gap="3"
      px="2"
      pt="4"
      w="100%"
      overflow="hidden"
    >
      <Flex
        justifyContent="space-around"
        alignItems="center"
        gap="3"
        mb="16px"
      >
        <PageLogo />
        <Searchbar />
        <Box
          w="30%"
          maxW="75px"
          color="white"
          display={{ base: 'none', lg: 'block' }}
        >
          <BtnTranslate />
        </Box>
        <BtnBurger />
      </Flex>
    </GridItem>
  )
}
export default Header
