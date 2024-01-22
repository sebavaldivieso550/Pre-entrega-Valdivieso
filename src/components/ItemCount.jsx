import React, { useState } from 'react'
import { Flex, Button, Spacer } from '@chakra-ui/react'
import Swal from 'sweetalert2'


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
    Swal.fire(`Agregado al carrito ${contador} unidades.`)
  }

  
  return (
    <div>
      <Flex>
        <Button colorScheme='teal' size='xs' onClick={disminuirContador}>
          -
        </Button>
        <Spacer/>
        <Button onClick={mostrarMensaje}>
          Agregar al Carrito {contador}
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