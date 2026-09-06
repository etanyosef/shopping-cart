import styles from "./cart.module.css";
import { useContext } from "react";
import Header from "../Header/Header";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
    const { cart, setCart, cartLength } = useContext(CartContext)
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