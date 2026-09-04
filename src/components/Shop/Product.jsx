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
    }, [])

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