import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import styles from "./Shop.module.css"
import Header from "../Header/Header";
import Counter from "./Counter/Counter";
import AddToCart from "./AddToCart/AddToCart";

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct]  = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

                const result = await response.json();

                setProduct(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })()
    }, []);

    function handleCountChange(e) {
        if (e.target.value > 99) return
        setCount(e.target.value);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function increment() {
        if (count === 99) return
        setCount(prevCount => prevCount + 1);
    }

    if (isLoading) {
        return (
            <>
                <Header />
                <main>
                    <h2>Loading...</h2>
                </main>
            </>
        )
    }

    if (!product) {
        return (
            <>
                <Header />
                <main>
                    <h2>Product does not exist. Go back to <Link to="/shop">Shop</Link>.</h2>
                </main>
            </>
        )
    }

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
        <>
            <Header />
            <main>
                <div className={styles.productContainer}>
                    <div className={styles.productInfo}>
                        <img src={product.image} alt={product.title} />
                        <span className={styles.productDesc}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <em>Php {product.price}</em>

                            <Counter />

                            <AddToCart />
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}