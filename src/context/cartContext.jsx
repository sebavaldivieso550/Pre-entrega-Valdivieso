import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || []; 

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(initialCart)

    const addToCart = (producto, cantidad) => {
        
        const productoAgregado = {...producto, cantidad};

        const newCart = [...cart];

        const isInCart = newCart.find(producto => producto.id === productoAgregado.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(productoAgregado);
        }
        setCart(newCart);
    }

    const aumentarCantidad = (itemId) => {
        const newCart = cart.map(producto => {
            if (producto.id === itemId) {
                return { ...producto, cantidad: producto.cantidad + 1 };
            }
            return producto;
        });
        setCart(newCart);
    }

    const disminuirCantidad = (itemId) => {
        const newCart = cart.map(producto => {
            if (producto.id === itemId && producto.cantidad > 1) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
            return producto;
        });
        setCart(newCart);
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
        <CartContext.Provider value={{
            cart,
            addToCart,
            cartQuantity,
            totalPrice,
            emptyCart,
            disminuirCantidad,
            aumentarCantidad
            }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider