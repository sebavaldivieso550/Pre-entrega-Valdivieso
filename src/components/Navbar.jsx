import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <Flex>
          <Link to={"/"}>
            <Box p='4' bg='gray.200'>
              <p>🛍️  Valdivieso E-Commerce</p>
            </Box>
          </Link>  
          <Spacer bg='gray.200'/>
          <Menu>
            <MenuButton bg='gray.200'>
              Categorias
            </MenuButton>
            <MenuList>
              <Link to={'category/A'}>
                <MenuItem>Categoria A</MenuItem>
              </Link>
              <Link to={'category/B'}>
                <MenuItem>Categoria B</MenuItem>
              </Link>
              <Link to={'category/C'}>
                <MenuItem>Categoria C</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Spacer bg='gray.200'/>
          <Link to={"/cart"}>
            <Box p='4' bg='gray.200'>
              <CartWidget />
            </Box>
          </Link>
        </Flex>
    </>
  )
}

export default Navbar