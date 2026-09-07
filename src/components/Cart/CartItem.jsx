import styles from "./cart.module.css";
import Counter from "../Shop/Counter/Counter";

export default function CartItem({item}) {

    function getTotalPrice() {
        return item.price * item.count;
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
            <Counter count={item.count} />
            <p>{getTotalPrice()}</p>
            <button className={styles.deleteBtn}>❌</button>
        </div>
    )
}