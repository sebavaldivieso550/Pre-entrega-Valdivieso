import React from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import Swal from 'sweetalert2';


const ItemCount = ({cantidad, handleAumentar, handleDisminuir, handleAgregar}) => {

  const addToCartMessage = () => {
    Swal.fire({
      title: "Producto agregado",
      icon: "success",
    });
  }

  return (
    <div>
      <Flex>
        <Button colorScheme='teal' size='xs' onClick={handleDisminuir}>
          -
        </Button>
        <Spacer/>
        <Button onClick={() => { handleAgregar(); addToCartMessage(); }}>
          Agregar al Carrito {cantidad}
        </Button>
        <Spacer/>
        <Spacer/>
        <Button colorScheme='teal' size='xs' onClick={handleAumentar}>
          +
        </Button>
        <Spacer/>
      </Flex>
    </div>
  )
}

export default ItemCount