import Header from "./Header/Header";
import ProductCard from "./Shop/ProductCard";

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // fetch('https://fakestoreapi.com/products/1')
                //     .then(response => response.json())
                //     .then(json => console.log(json));       

                const productIds = [1, 2, 3, 4, 5, 6, 7, 8]
                    
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
                console.log(error)
            } finally {
            }
        })()
    }, [])

    return (
        <>
            <Header />
            
            <main>
                <h2>Shop</h2>
            </main>
        </>
    )
}