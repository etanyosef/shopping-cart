export default function ProductCard({products}) {
    return (
        <div>
            <h3>{products.title}</h3>
            {/* <p>Rating: {products.rating.rate} Count: {products.rating.count}</p> */}
            <p>Category: {products.category}</p>
            <img src={products.image} alt={products.title} />
            <p>{products.description}</p>
            <p>Php {products.price}</p>
            <button>Add to cart</button>
        </div>
    )
}