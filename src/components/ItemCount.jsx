import React, { useState } from 'react'
import { Flex, Button, Text, Spacer } from '@chakra-ui/react'


const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const aumentarContador = () => {
    setContador(contador + 1)
  }
  const disminuirContador = () => {
    if(contador > 0) {
      setContador(contador - 1)}
  }

  const mostrarMensaje = () => {
    
  }
  return (
    <div>
      <Flex>
        <Button colorScheme='teal' size='xs' onClick={disminuirContador}>
          -
        </Button>
        <Spacer/>
        <Button>Agregar al Carrito</Button>
        <Spacer/>
        <Button colorScheme='teal' size='xs' onClick={aumentarContador}>
          +
        </Button>
        <Spacer/>
        <Text>{contador}</Text>
      </Flex>
    </div>
  )
}

export default ItemCount