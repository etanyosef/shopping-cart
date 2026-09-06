import styles from "./cart.module.css";

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
                <p>Quantity: {item.count}</p>
                <p>Price: {item.price}</p>
                <p>Total: {getTotalPrice()}</p>
            </div>
        </div>
    )
}