import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './routes/appRouter'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </div>
  )
}

export default App
