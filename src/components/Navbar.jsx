import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <Flex  bgGradient='linear(to-b, #243E36, #C0B7B1)'>
          <Link to={"/"}>
            <Box p='4' className='brand'>
              <p>🛍️  Valdivieso E-Commerce</p>
            </Box>
          </Link>  
          <Spacer />
          <Menu>
            <MenuButton >
              Categorias
            </MenuButton>
            <MenuList>
              <Link to={'category/Hardware'}>
                <MenuItem>HARDWARE</MenuItem>
              </Link>
              <Link to={'category/Componentes'}>
                <MenuItem>COMPONENTES</MenuItem>
              </Link>
              <Link to={'category/Perifericos'}>
                <MenuItem>PERIFERICOS</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Spacer />
          <Link to={"/cart"}>
            <Box p='4' >
              <CartWidget />
            </Box>
          </Link>
        </Flex>
    </>
  )
}

export default Navbar