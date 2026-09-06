import { Link, NavLink } from "react-router"
import styles from "./header.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Header() {
    const {cart, setCart, cartLength} = useContext(CartContext);

    function decrement() {
        setCart(prevCart => prevCart - 1)
    }

    function increment() {
        setCart(prevCart => prevCart + 1)
    }

    return (
        <header>
            <h1>Tindahan</h1>

            <nav>
                <ul className={styles.mainMenu}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                        <button onClick={decrement}>-</button>
                        <span>{cartLength}</span>
                        <button onClick={increment}>+</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}