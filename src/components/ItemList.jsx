import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'


const ItemList = ({ productos }) => {

  return (
    <div>
      {
        productos.map((p) => (
          <Flex>
            <Item 
              key={p.id}
              image={p.image}
              titulo={p.titulo}
              descripcion={p.descripcion}
              precio={p.precio}
              id={p.id}
            />
          </Flex>
        ))
      }
    </div>
  )
}

export default React.memo(ItemList)