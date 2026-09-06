import { useContext } from "react";
import styles from "./addToCart.module.css";
import { CartContext } from "../../../context/CartContext";

export default function AddToCart({ products }) {
    const { handleAddToCart } = useContext(CartContext);

    return (
        <button 
            className={styles.button}
            onClick={() => handleAddToCart(
                products.id,
                products.title,
                products.image,
                products.price,
                1
            )}
        >Add to cart</button>
    )
}