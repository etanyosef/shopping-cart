import { useContext } from "react";
import styles from "./addToCart.module.css";
import { CartContext } from "../../../context/CartContext";

export default function AddToCart({ products, count }) {
    const { handleAddToCart } = useContext(CartContext);

    return (
        <button 
            className={styles.button}
            onClick={() => handleAddToCart(
                products.id,
                products.title,
                products.image,
                products.price,
                count
            )}
        >Add to cart</button>
    )
}