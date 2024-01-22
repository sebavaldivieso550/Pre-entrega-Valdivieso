import React from 'react'
import { Text, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import {useState, useEffect} from 'react'
import Loader from './Loader'

const ItemDetail = ({ producto }) => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1000)
  }, [])

  return (
    <Card maxW='sm'>
      <CardBody>
        {loading ? <Loader/> : <Image
          src= {producto.image}
          alt=''
          borderRadius='lg'
        />}
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