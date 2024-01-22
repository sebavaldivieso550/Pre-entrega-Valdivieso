import { createContext, useState } from "react";

export const cartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        
        const itemAgregado = {...item, cantidad};

        const newCart = {...cart};

        const isInTheCart = newCart.find((producto) => producto.id === itemAgregado.id);

        if (isInTheCart) {
            isInTheCart.cantidad += cantidad;
        } else {
            newCart.push(itemAgregado);
        }
        setCart(newCart);
    }

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    )

}

export default ShoppingCartProvider