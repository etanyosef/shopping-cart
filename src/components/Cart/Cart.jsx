import styles from "./cart.module.css";
import { useContext } from "react";
import { Link } from "react-router";
import Header from "../Header/Header";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import ShopNowButton from "../ShopNowButton/ShopNowButton";

export default function Cart() {
    const { cart, cartLength } = useContext(CartContext)

    if (cartLength === 0) return (
        <>
            <Header />
            <main>
                <div className={styles.emptyCartContainer}>
                    <h2>Your cart is empty.</h2>
                    <ShopNowButton />
                </div>
            </main>
        </>
    )

    return (
        <>
            <Header />
            
            <main>
                <h2 className="page-title">Cart</h2>
                <div className={styles.container}>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
            </main>
        </>
    )
}