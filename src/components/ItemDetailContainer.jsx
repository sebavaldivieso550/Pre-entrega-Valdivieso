import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const { id } = useParams()
  
  
    useEffect(() => {

      const db = getFirestore()
      const oneItem = doc(db, `Componentes`, `${id}`)
      getDoc(oneItem).then((snapshot) => {

        if(snapshot.exists()) {
          const doc = snapshot.data()
          setProduct(doc)
        }
      })
    }, [])


console.log(product)
  return (
    <div>
      {
        <ItemDetail product = {product} />
      }
    </div>
  )
}

export default ItemDetailContainer