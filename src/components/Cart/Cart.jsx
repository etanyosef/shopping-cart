import styles from "./cart.module.css";
import { useContext } from "react";
import { Link } from "react-router";
import Header from "../Header/Header";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import ShopNowButton from "../ShopNowButton/ShopNowButton";
import Footer from "../Footer";

export default function Cart() {
    const { cart, cartLength } = useContext(CartContext);
    let cartTotal = 0;

    if (cartLength === 0) return (
        <>
            <Header />
            <main>
                <div className={styles.emptyCartContainer}>
                    <h2>Your cart is empty.</h2>
                    <ShopNowButton />
                </div>
            </main>
            <Footer />
        </>
    )

    return (
        <>
            <Header />
            
            <main>
                <div className={styles.container}>
                    <h2>🛒 Shopping Cart</h2>
                    <hr />
                    {cart.map(item => {
                        cartTotal += item.count * item.price;
                        return <CartItem key={item.id} item={item} />
                    })}
                    <hr />
                    <div className={styles.cartTotal}>
                        <b>Total: {cartTotal.toFixed(2)}</b>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}