import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
        <Flex>
          <Box p='4' bg='gray.200'>
            <p>Valdivieso E-Commerce</p>
          </Box>
          <Spacer bg='gray.200'/>
          <Menu>
            <MenuButton bg='gray.200'>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Categoria 1</MenuItem>
              <MenuItem>Categoria 2</MenuItem>
              <MenuItem>Categoria 3</MenuItem>
              <MenuItem>Categoria 4</MenuItem>
              <MenuItem>Categoria 5</MenuItem>
            </MenuList>
          </Menu>
          <Spacer bg='gray.200'/>
          <Box p='4' bg='gray.200'>
            <CartWidget />
          </Box>
        </Flex>
    </>
  )
}

export default Navbar