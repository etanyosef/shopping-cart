import { Link, NavLink } from "react-router"
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
    return (
        <header>
            <h1>Tindahan</h1>

            <nav>
                <ul className={styles.mainMenu}>
                    <li>
                        <NavLink 
                            to="/"
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/shop"
                        >Shop</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cart"
                        >Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}