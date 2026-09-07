import { Link } from "react-router";

import styles from "./ShopNowButton.module.css";

export default function ShopNowButton() {
    return (
        <Link to="/shop" className={styles.btn}>Shop now</Link>
    )
}