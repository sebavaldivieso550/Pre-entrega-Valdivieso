import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {Center} from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <Navbar />
      <Center p='4' bg='blue.200'>
        <ItemListContainer greeting={"Bienvenido a Valdivieso E-Commerce"}/>
      </Center>
    </>
  )
}

export default App