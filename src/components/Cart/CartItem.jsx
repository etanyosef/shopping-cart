import styles from "./cart.module.css";
import Counter from "../Shop/Counter/Counter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({item}) {
    const { 
        handleRemoveItemInCart, 
        incrementItemQuantity,
        decrementItemQuantity,
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
                <h3>{item.title}</h3>
                {/* <em>Php {item.price}</em> */}
            </div>
            {/* <p>Quantity: {item.count}</p> */}
            {/* <Counter count={item.count} /> */}

            <div className={styles.counter}>
                <button
                    onClick={() => decrementItemQuantity(item.id)}
                >➖</button>
                <span>{item.count}</span>
                <button 
                    onClick={() => incrementItemQuantity(item.id)}
                >➕</button>
            </div>

            <div>
                <span className={styles.total}>{getTotalPrice()}</span>
            </div>

            <button 
                className={styles.deleteBtn}
                onClick={() => handleRemoveItemInCart(item.id)}
            >❌</button>
        </div>
    )
}