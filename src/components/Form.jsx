import React from 'react'
import { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'

const Form = () => {

    const [nombre, setNombre] = useState=("")
    const [email, setEmail] = useState=("")
    const [id, setId] = useState=("asdasd342")

    const handleSubmit = (e) => {

        e.preventDefault()

        Swal.fire(`Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar su compra.`);
        setNombre("")
        setEmail("")
    }

    return (
        <div>
            <Form action="" onSubmit={handleSubmit}>
                <Input placeholder='Nombre y Apellido' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                <Input placeholder='Correo electronico' type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Button colorScheme='linkedin' type="submit">Enviar Información</Button>
            </Form>

            <Text>
                {`El id de su compra es ${purchaseId}`}
            </Text>
        </div>
  )
}

export default Form