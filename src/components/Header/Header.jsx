import { Link, NavLink } from "react-router"
import styles from "./header.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Header() {
    const {cartLength} = useContext(CartContext);

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
                        <span>{cartLength}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}