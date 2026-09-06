import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import styles from "./Shop.module.css";
import loader from "./Loader/shopLoader.module.css";
import { CartContext } from "../../context/CartContext";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { handleAddtoCart } = useContext(CartContext);

    useEffect(() => {
        (async () => {
            try {
                // fetch('https://fakestoreapi.com/products/1')
                //     .then(response => response.json())
                //     .then(json => console.log(json));       

                // get product ids
                setIsLoading(true);

                const productIds = Array.from({length: 10}, (x, i) => i + 1);
                    
                const response = await Promise.all(
                    productIds.map(id => fetch(`https://fakestoreapi.com/products/${id}`))
                );

                if (response.some(response => !response.ok)) {
                    throw new Error('Failed to fetch product')
                }

                const result = await Promise.all(
                    response.map(res => res.json())
                );

                const productList = result.map(product => ({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    image: product.image,
                    description: product.description,
                    price: product.price,
                }));

                console.log(productList)
                setProducts(productList);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    if (isLoading) {
        return (
            <>
                <Header />
                <main>
                    <h2 className="page-title">Shop</h2>
                    <div className={loader.loader}></div>
                </main>
            </>
        )
    }

    return (
        <>
            <Header />
            
            <main>
                <h2 className="page-title">Shop</h2>

                <div className={styles.container}>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            products={product} 
                        />
                    ))}
                </div>

            </main>
        </>
    )
}