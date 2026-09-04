import { Link } from "react-router";
import styles from "./Shop.module.css";

export default function ProductCard({products}) {
    return (
        <div className={styles.product}>
            <h3>
                <Link to={`/product/${products.id}`}>{products.title}</Link>
            </h3>
            {/* <p>Rating: {products.rating.rate} Count: {products.rating.count}</p> */}
            <span className={`${styles.category} ${products.category}`}>{products.category}</span>
            <img src={products.image} alt={products.title} />
            {/* <p>{products.description}</p> */}
            <p>Php {products.price}</p>
            <button>Add to cart</button>
        </div>
    )
}