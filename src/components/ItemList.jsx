import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <div>
      {
        productos.map((p) => {
          <Item 
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            precio={p.precio}
            id={p.id}
          />
        })
      }
    </div>
  )
}

export default ItemList