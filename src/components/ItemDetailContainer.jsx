import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams()

  const productos = [
    { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000, categoria: "A"},
    { id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000, categoria: "A"},
    { id: 3, titulo: "Producto C", descripcion: "descripcion de producto C", precio: 3000, categoria: "A"},
    { id: 4, titulo: "Producto D", descripcion: "descripcion de producto D", precio: 6000, categoria: "A"},
    { id: 5, titulo: "Producto E", descripcion: "descripcion de producto E", precio: 2000, categoria: "A"},
    { id: 6, titulo: "Producto F", descripcion: "descripcion de producto F", precio: 5000, categoria: "B"},
    { id: 7, titulo: "Producto G", descripcion: "descripcion de producto G", precio: 2000, categoria: "B"},
    { id: 8, titulo: "Producto H", descripcion: "descripcion de producto H", precio: 6000, categoria: "B"},
    { id: 9, titulo: "Producto I", descripcion: "descripcion de producto I", precio: 1400, categoria: "B"},
    { id: 10, titulo: "Producto J", descripcion: "descripcion de producto J", precio: 2300, categoria: "B"},
    { id: 11, titulo: "Producto K", descripcion: "descripcion de producto K", precio: 2600, categoria: "C"},
    { id: 12, titulo: "Producto L", descripcion: "descripcion de producto L", precio: 8700, categoria: "C"},
    { id: 13, titulo: "Producto M", descripcion: "descripcion de producto M", precio: 5900, categoria: "C"},
    { id: 14, titulo: "Producto N", descripcion: "descripcion de producto N", precio: 4800, categoria: "C"},
    { id: 15, titulo: "Producto O", descripcion: "descripcion de producto O", precio: 5600, categoria: "C"},
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
        reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
/*       console.log(resultado) */
    })
    .catch((error) => {
      console.log(error)
    })

    const productoFiltrado = productos.find((producto) => producto.id == id)
    console.log(productoFiltrado)

  return (
    <div>
      {
        productos.map((p) => {
          return (
            <ItemDetail 
              titulo={p.titulo}
              descripcion={p.descripcion}
              precio={p.precio}
            />
          )
        })
      }
    </div>
  )
}

export default ItemDetailContainer