import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const cartLength = cart.length;

    function handleAddToCart(id, title, image, price, count) {
        // setCart(prevCart => {
        //     if (prevCart.id === id) {
        //         console.log(id)
        //         return [
        //             ...prevCart,
        //         ]
        //     } else {
        //         console.log(id)
        //         return [
        //             ...prevCart,
        //             {
        //                 id: id,
        //                 title: title,
        //                 image: image,
        //                 price: price,
        //                 count: count,
        //             },
        //         ];
        //     }
        // });

        if (cartLength === 0) {
            return setCart([
                {
                    id,
                    title,
                    image,
                    price,
                    count
                }
            ]);
        }

        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count + count,
                }
            } else {
                return (
                    prevCart,
                    {
                        id,
                        title,
                        image,
                        price,
                        count,
                    }
                )
            }
        }))
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cartLength, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    )
}