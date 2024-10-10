import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './main.css';
import {ChakraProvider} from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
