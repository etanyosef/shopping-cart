import { Link } from "react-router";
import Counter from "./Counter/Counter";
import styles from "./Shop.module.css";
import AddToCart from "./AddToCart/AddToCart";
import { useState } from "react";

export default function ProductCard({ products }) {
    const [count, setCount] = useState(1);

    return (
        <div className={styles.productCard}>
            <img src={products.image} alt={products.title} />
            <span className={`${styles.category} ${products.category}`}>{products.category}</span>
            <h3>
                <Link to={`/product/${products.id}`}>{products.title}</Link>
            </h3>
            <div className={styles.productStats}>
                <span>{products.rating}/5 ⭐</span>
                <span>Sold: {products.count}</span>
            </div>
            <em>₱{products.price}</em>
            <Counter count={count} setCount={setCount} />
            <AddToCart products={products} count={count} />
        </div>
    )
}