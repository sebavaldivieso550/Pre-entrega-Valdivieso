import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App