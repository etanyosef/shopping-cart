import styles from "./cart.module.css";

export default function CartItem({item}) {

    function getTotalPrice() {
        return item.price * item.count;
    }

    return (
        <div className={styles.item}>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.count}</p>
                <p>Price: {item.price}</p>
                <p>Total: {getTotalPrice()}</p>
            </div>
        </div>
    )
}