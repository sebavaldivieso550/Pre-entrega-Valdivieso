import React, {useState, useEffect, useContext} from 'react';
import {Box, Text, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import Loader from './Loader';
import {CartContext} from '../context/cartContext';


const ItemDetail = ({ product }) => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1000)
  }, [])

  const { cart, addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1)

  const aumentarContador = () => {
    setCantidad(cantidad + 1)
  }
  const disminuirContador = () => {
    if(cantidad > 1) {
      setCantidad(cantidad - 1)}
  }

  return (
  <Flex w='100%' h='100%' bgGradient='linear(to-l, #241715, #402A2C, #703D57)' flex='1' align='center'
  justify="center" padding='20px'>
    <Card maxW='sm' maxH='80vh' bgGradient='linear(to-r, #D9B8C4, #957186)'>
      <CardBody >
        {loading ? <Loader/> : <Image
          src= {product.image}
          alt={product.titulo}
          borderRadius='lg'
        />}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.titulo}</Heading>
          <Text>
            {product.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2x1'>
            ${product.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <ItemCount
            cantidad={cantidad}
            aumentarContador={aumentarContador}
            disminuirContador={disminuirContador}
            handleAgregar={() => { addToCart(product, cantidad)}}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  </Flex>
  )
}

export default ItemDetail