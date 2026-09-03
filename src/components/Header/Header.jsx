import { Link } from "react-router"
import styles from "./header.module.css";

export default function Header() {
    return (
        <header>
            <h1>Tindahan</h1>

            <nav>
                <ul className={styles.mainMenu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </header>
    )
}