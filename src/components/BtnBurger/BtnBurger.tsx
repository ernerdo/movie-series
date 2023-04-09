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
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody position="relative">
            <p>Categories</p>
            <p>Some contents...</p>
            <Box pos="absolute" bottom="12px" left="20px">
              <BtnTranslate/>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export { BtnBurger }
