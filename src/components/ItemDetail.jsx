import React from 'react'
import { Text, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src= {producto.image}
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.titulo}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2x1'>
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <ItemCount />
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail