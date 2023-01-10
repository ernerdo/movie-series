import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Stack>
      <HStack justifyContent={`center`}>
        <Link href="https://vitejs.dev" isExternal>
          <Image src="/vite.svg" alt="vite" />
        </Link>
        <Link href="https://reactjs.org" isExternal>
          <Image src={reactLogo} alt="react" />
        </Link>
      </HStack>
      <Heading>Vite + React</Heading>
      <VStack>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </VStack>
      <Text>Click on the Vite and React logos to learn more</Text>
    </Stack>
  )
}

export default App
