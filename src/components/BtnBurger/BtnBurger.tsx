import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { BtnTranslate } from '../BtnTranslate'
import { PageLogo } from '../../components/PageLogo'

const BtnBurger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: 'block', lg: 'none' }}>
      <Button
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        background="darkBlue"
        color="white"
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="darkBlue" color="white">
          <DrawerHeader borderBottomWidth="1px">
            <PageLogo />
          </DrawerHeader>
          <DrawerBody position="relative" overflow="hidden">
            <p>Categories</p>
            <p>Some contents...</p>
            <Box pos="absolute" bottom="12px" left="20px">
              <BtnTranslate />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export { BtnBurger }
