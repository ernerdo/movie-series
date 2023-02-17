import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './styles.css'
import { theme } from './chakra'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
