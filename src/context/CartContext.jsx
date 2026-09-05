import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(1);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}