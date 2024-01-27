import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Flex, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import Loader from './Loader'


const Item = ({ producto }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1000)
  }, [])

  return (
    <Flex className='card-item' padding="15px" flex='1' gap='4' align='center' flexWrap='wrap' justify="center">
      <Card maxW='sm'bgGradient='linear(to-r, #D9B8C4, #957186)'>
        <CardBody>
          {loading ? <Loader/> : <Image
            maxH={{ base: '100%', sm: '250px'}}
            maxW={{ base: '100%', sm: '300px'}}
            src= {producto.image}
            alt={producto.titulo}
            borderRadius='lg'
          />}
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{producto.titulo}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/item/${producto.id}`}>  
              <Button justify="center">
                Ver detalle
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  )
}

export default Item