import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/cartContext';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/checkout' element={<Checkout/>} />
          </Routes>
        
        </BrowserRouter>
      </CartProvider>
    </div>
)
}

export default App