import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChatIcon } from '@chakra-ui/icons'

const initialLanguage = 'en'

const BtnTranslate = () => {
  const [lang, setLang] = useState(initialLanguage)
  const { t, i18n } = useTranslation()
  const btnTitle = t('btn.select_language')

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')) {
      const langSelected = localStorage.getItem('i18nextLng')
      const langFormatted = JSON.stringify(langSelected)
        .replaceAll('"', '')
        .toLocaleUpperCase()
      setLang(langFormatted)
    }
  }, [])

  /**
   * Function that changes the language of the application.
   *
   * @param event - Language switch button click event.
   */
  const changeLanguage = (
    // eslint-disable-next-line no-undef
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const langValue = event.currentTarget.getAttribute('value')
    const langSelected = langValue ? langValue.toLowerCase() : initialLanguage
    setLang(langSelected)
    i18n.changeLanguage(langSelected)
  }

  return (
    <Menu>
      <MenuButton display="flex" alignItems="center">
        <ChatIcon mr="6px" />
        {lang.toUpperCase()}
      </MenuButton>
      <MenuList color="black">
        <MenuGroup title={btnTitle}>
          <MenuItem value="en" onClick={changeLanguage}>
            EN
          </MenuItem>
          <MenuItem value="es" onClick={changeLanguage}>
            ES
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export { BtnTranslate }
