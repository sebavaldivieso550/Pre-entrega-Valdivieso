import React,{ useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/cart">
        🛒
        <span className='number'>{cartQuantity()}</span>
      </Link>
    </div>
  )
}

export default CartWidget