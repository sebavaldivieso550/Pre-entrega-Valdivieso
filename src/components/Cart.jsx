import React, { useContext} from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import { Box, Flex, Image, Button } from '@chakra-ui/react';
const Cart = () => {

  const { cart, totalPrice, emptyCart, removeOneItem } = useContext(CartContext)

  const handleVaciar = () => {
    emptyCart();
  }

  return (
    <Box w='100%' h='100%' bgGradient='linear(to-l, #241715, #402A2C, #703D57)' flex='1' align='center'
    justify="center" padding='20px'>
      <h1>Carrito</h1>

      {
        cart.map((prod) => (
          <Flex key={prod.id} margin='15px' padding='5px' align='center' justify='space-between' bgGradient='linear(to-r, #D9B8C4, #957186)' borderRadius='10px '>
            <br />
            <Image borderRadius='lg' src={prod.image} alt=""/>
            <h3>{prod.titulo}</h3>
            <p>Cant: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <br />
            <Button >Remover uno</Button>
            <Button >Remover todo</Button>
            <br />
          </Flex>
        ))
      }

      {
        cart.length > 0 ?
        <>
          <h2>Precio total: ${totalPrice()}</h2>
          <Button onClick={handleVaciar} margin='10px'>Vaciar</Button>
          <Link to={"/form"}><Button margin='10px'>Finalizar compra</Button></Link>
        </> :
        <h2>El carrito esta vacío.</h2>
      }

    </Box>
  )
}

export default Cart