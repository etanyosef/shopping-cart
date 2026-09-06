import { Link } from "react-router";
import Counter from "./Counter/Counter";
import styles from "./Shop.module.css";
import AddToCart from "./AddToCart/AddToCart";

export default function ProductCard({products, handleAddToCart}) {
    return (
        <div className={styles.productCard}>
            <img src={products.image} alt={products.title} />
            <span className={`${styles.category} ${products.category}`}>{products.category}</span>
            <h3>
                <Link to={`/product/${products.id}`}>{products.title}</Link>
            </h3>
            {/* <p>Rating: {products.rating.rate} Count: {products.rating.count}</p> */}
            {/* <p>{products.description}</p> */}
            <em>Php {products.price}</em>
            <Counter />
            <AddToCart products={products} />
        </div>
    )
}