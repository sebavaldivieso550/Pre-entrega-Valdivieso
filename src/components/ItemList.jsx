import React from 'react'
import Item from './Item'
import { Flex, Box } from '@chakra-ui/react'


const ItemList = ({ productos }) => {

  return (
    <div>
      <Box w='100%' h='100%' bgGradient='linear(to-l, #241715, #402A2C, #703D57)' >
        <Flex wrap="wrap">
          {productos.map((producto) => (
            <Item key={producto.id}
              producto = {producto}
            />
          ))}
        </Flex>
      </Box>
    </div>
  )
}

export default (ItemList)