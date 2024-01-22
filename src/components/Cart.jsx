import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const {cart, setCart} = useContext(cartContext)

  return (
    <div>
      {cart}
    </div>
  )
}

export default Cart