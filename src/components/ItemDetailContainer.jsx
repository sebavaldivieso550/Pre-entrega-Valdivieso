import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const id  = useParams().id;
  
  
    useEffect(() => {

      const docRef = doc(db, `Componentes`, id)
      getDoc(docRef).then((snapshot) => {

        if(snapshot.exists()) {
          setProduct(
            { ...snapshot.data(), id: snapshot.id }
          );
        }
      })
    }, [id])
console.log(product)

  return (
    <div>
      {
        product && <ItemDetail product = {product} />
      }
    </div>
  )
}

export default ItemDetailContainer