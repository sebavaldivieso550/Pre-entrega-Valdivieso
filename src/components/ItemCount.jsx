import React from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';


const ItemCount = ({cantidad, disminuirContador, aumentarContador, handleAgregar}) => {

  return (
    <div>
      <Flex>
        <Button colorScheme='teal' size='xs' onClick={disminuirContador}>
          -
        </Button>
        <Spacer/>
        <Button onClick={handleAgregar}>
          Agregar al Carrito {cantidad}
        </Button>
        <Spacer/>
        <Spacer/>
        <Button colorScheme='teal' size='xs' onClick={aumentarContador}>
          +
        </Button>
        <Spacer/>
      </Flex>
    </div>
  )
}

export default ItemCount