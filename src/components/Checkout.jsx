import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useForm } from 'react-hook-form';
import { Box, Input, Button } from '@chakra-ui/react';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2';


const Checkout = () => {
    
    const [orderId, setOrderId] = useState("");
    const [nombre, setNombre] = useState("");

    const { emptyCart, cart, totalPrice } = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    
    const buy = (data) => {
        const order = {
            client: data,
            productos: cart,
            total: totalPrice()
        }
        console.log(order)

        const orderRef = collection(db, "orders");
        addDoc(orderRef, order)
        .then((doc) => {
            setOrderId(doc.id);
            emptyCart();
        })
    }

    const showAlert = () => {
        Swal.fire({
            title: `Muchas gracias por su compra ${nombre}.`,
            text: `El id de su compra es ${orderId}`,
            icon: "success"
        });
    }
    
    if (orderId) {
        return (
            showAlert()
        )
    }

  return (
    <Box w='100%' h='90vh' bgGradient='linear(to-l, #241715, #402A2C, #703D57)' flex='1' align='center'
    justify="center" padding='20px'>
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit(buy)}>
            <Input margin='10px' padding='15px' type='text' placeholder='Nombre completo' {...register("nombre")} onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <Input margin='10px' padding='15px' type='text' placeholder='Apellido' {...register("apellido")}/>
            <Input margin='10px' padding='15px' type='email' placeholder='Correo' {...register("email")}/>
            <Input margin='10px' padding='15px' type='number' placeholder='Telefono' {...register("telefono")}/>
            <Input margin='10px' padding='15px' type='text' placeholder='Ciudad' {...register("ciudad")}/>
            <Button margin='15px' type='submit'>Comprar</Button>
        </form>
    </Box>
  )
}

export default Checkout