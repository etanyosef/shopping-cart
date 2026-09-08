import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import styles from "./Shop.module.css";
import loader from "./Loader/shopLoader.module.css";
import Categories from "../Categories/Categories";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                // fetch('https://fakestoreapi.com/products/1')
                //     .then(response => response.json())
                //     .then(json => console.log(json));       

                // get product ids
                setIsLoading(true);

                const productIds = Array.from({length: 20}, (x, i) => i + 1);
                    
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
                    rating: product.rating.rate,
                    count: product.rating.count,
                }));

                console.log(result)
                setProducts(productList);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    // get categories from products
    const categories = Object.values(
        products.reduce((a, {category}) => {
            a[category] = {category}
            return a;
        }, {})
    ).map(cat => cat.category);

    function handleFilterProducts() {
        if (filter !== null) {
            return products.filter(item => (
                item.category === filter
            ))
        } else {
            return products
        }
    }

    function handleFilterClick(e) {
        const filterBtn = e.target.textContent;

        setFilter(prevFilter => {
            if (prevFilter === filterBtn) {
                return null
            } else {
                return filterBtn;
            }
        })

        console.log(filter)
    }

    console.log(handleFilterProducts())

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

                {categories.length > 0 && (
                    <Categories 
                        categories={categories} 
                        filter={filter}
                        handleFilterClick={handleFilterClick}
                    />
                )}

                <div className={styles.container}>
                    {handleFilterProducts().map(product => (
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