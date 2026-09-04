import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Header from "../Header/Header";

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct]  = useState(null);
    const [error, setError] = useState(null);

    console.log(productId)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

                const result = await response.json();

                setProduct(result);
            } catch (error) {

            } finally {
                console.log(product);
            }
        })()
    }, []);

    function handleCountChange(e) {
        if (e.target.value > 9) return
        setCount(e.target.value);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function increment() {
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

    return (
        <>
            <Header />
            <main>
                {product ? (
                    <h2>{product.title}</h2>
                ) : (
                    <h2>Product des not exist.</h2>
                )}
            </main>
        </>
    )
}