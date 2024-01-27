import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { categoryId } = useParams()
  
  const [products, setProducts] = useState([])

  useEffect(() => {
      const db = getFirestore()
      
      const itemsCollection = collection(db, "Componentes")
      
      getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => doc.data())
          setProducts(docs)
      })

  }, [])

  const mostrarProductos = new Promise((resolve, reject) => {
    
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    } else {
        reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  const productosFiltrados = products.filter((prod) => prod.categoria == categoryId)
    console.log(productosFiltrados)
  return (
    <div>
      {
      categoryId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={products} />
      }
    </div>
  )
}

export default ItemListContainer