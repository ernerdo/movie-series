import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useState, useEffect, MouseEvent } from 'react'
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
   * Gets the language value from the 'value' property of the button.
   * If the value exists, it converts it to lowercase. If it does not exist, it uses the initial language.
   * Updates the state of the current language.
   * And changes the language in the application using the i18n function.
   *
   * @param event - Language switch button click event.
   *
   */
  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    const langValue = event.currentTarget.getAttribute('value')
    const langSelected = langValue ? langValue.toLowerCase() : initialLanguage
    setLang(langSelected)
    i18n.changeLanguage(langSelected)
    window.location.reload()
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
