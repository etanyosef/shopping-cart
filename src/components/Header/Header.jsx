import { Link } from "react-router"
export default function Header() {
    return (
        <header>
            <h1>Tindahan</h1>

            <nav>
                <ul>
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