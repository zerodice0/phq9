import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
