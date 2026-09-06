import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const cartLength = cart.length;

    function handleAddToCart(id, title, image, price, count) {
        setCart(prevCart => {
            if (prevCart.id === id) {
                return [
                    ...prevCart,
                ]
            } else {
                return [
                    ...prevCart,
                    {
                        id: id,
                        title: title,
                        image: image,
                        price: price,
                        count: count,
                    },
                ];
            }
        });
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cartLength, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    )
}