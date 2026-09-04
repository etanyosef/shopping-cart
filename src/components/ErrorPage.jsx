import { Link } from "react-router";
import Header from "./Header/Header";

export default function ErrorPage() {
    return (
        <>
            <Header />
            <main>
                <h2>Oh no, this page doesn't exist!</h2>
                <p>
                    You can go back <Link to="/">home</Link> or go <Link to="/shop">shopping</Link>.
                </p>
            </main>
        </>
    )
}