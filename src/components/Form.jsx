import React, { useContext, useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Box, Input, Button } from '@chakra-ui/react';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2'


const Form = () => {

    const { emptyCart } = useContext(CartContext);
    
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');

    const db = getFirestore();
    const ordersCollection = collection(db, "orden");

    const handleSubmit = (e) => {
        e.preventDefault()
        
        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id);

            emptyCart();
            showAlert();
        })}
    const order = {
        orderId,
        nombre,
        apellido,
        email,
        telefono,
        ciudad
    }
        
    console.log('Enviando')

    const showAlert = () => {
        Swal.fire({
            title: `Muchas gracias por su compra ${nombre}.`,
            text: `El id de su compra es ${orderId}`,
            icon: "success"
        });
    }
    

  return (
    <Box w='100%' h='90vh' bgGradient='linear(to-l, #241715, #402A2C, #703D57)' flex='1' align='center'
    justify="center" padding='20px'>
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit}>
            <Input margin='10px' padding='15px' type='text' placeholder='Nombre completo' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <Input margin='10px' padding='15px' type='text' placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} value={apellido}/>
            <Input margin='10px' padding='15px' type='email' placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Input margin='10px' padding='15px' type='number' placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            <Input margin='10px' padding='15px' type='text' placeholder='Ciudad' onChange={(e) => setCiudad(e.target.value)} value={ciudad}/>
            <Button margin='15px' type='submit'>Enviar</Button>
        </form>
    </Box>
  )
}

export default Form