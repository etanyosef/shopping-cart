import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const cartLength = cart.length;

    function handleAddToCart(id, title, image, price, count) {
        setCart(prevCart => {
            const isInCart = prevCart.find(item => item.id === id);

            if (isInCart) {
                return prevCart.map(item => {
                    if (item.id === id) {
                        return {...item, count: item.count + count}
                    } else {
                        return item
                    } 
                }); 
            }

            return [...prevCart, {id, title, image, price, count}];
        })

        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cartLength, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    )
}