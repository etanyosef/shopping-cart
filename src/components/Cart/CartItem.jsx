import styles from "./cart.module.css";
import { Link } from "react-router";
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
                <h3>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h3>
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