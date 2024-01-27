import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || []; 

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(initialCart)

    const addToCart = (producto, cantidad) => {
        
        const productoAgregado = {...producto, cantidad};

        const newCart = [...cart];

        const isInCart = newCart.find((producto) => producto.id === productoAgregado.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(productoAgregado);
        }
        setCart(newCart);
    }

    const removeOneItem = (productToRemove) => {
        const updatedCart = cart.map((product) => {
            if (product.id === productToRemove.id) {
                return { ...product, cantidad: product.cantidad - 1 };
            }
            return product;
        });
    
        setCart(updatedCart.filter((product) => product.cantidad > 0));
    }
    

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, cartQuantity, totalPrice, emptyCart, removeOneItem }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider