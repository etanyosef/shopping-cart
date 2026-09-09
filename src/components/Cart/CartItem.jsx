import styles from "./cart.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({item}) {
    const { 
        handleRemoveItemInCart, 
        incrementItemQuantity,
        decrementItemQuantity,
        handleCartQuantityInput
    } = useContext(CartContext);

    function getTotalPrice() {
        const total = item.price * item.count;
        return total.toFixed(2);
    }

    return (
        <div className={styles.item}>
            <div className={styles.imgContainer}>
                <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.details}>
                <h3>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h3>
                <span className={styles.price}>₱{item.price}</span>
            </div>

            <div className={styles.counter}>
                <button
                    onClick={() => decrementItemQuantity(item.id)}
                >➖</button>

                <input 
                    type="number" 
                    min="1"
                    max="99"
                    value={item.count}
                    onChange={(e) => handleCartQuantityInput(e, item.id)}
                />

                <button 
                    onClick={() => incrementItemQuantity(item.id)}
                >➕</button>
            </div>

            <span className={styles.total}>₱{getTotalPrice()}</span>

            <button 
                className={styles.deleteBtn}
                onClick={() => handleRemoveItemInCart(item.id)}
            >❌</button>
        </div>
    )
}