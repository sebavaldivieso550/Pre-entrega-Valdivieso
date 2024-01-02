import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const Item = ({ titulo, id, image }) => {
  return (
    <Flex>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src= {image}
            alt=''
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{titulo}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/item/${id}`}>  
              <Button>
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