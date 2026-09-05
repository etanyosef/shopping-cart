import Header from "./Header/Header";
import '../css/style.css';
import Footer from "./Footer";
import { Link } from "react-router";
import { useState } from "react";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="welcome-container">
                    <h2 className="welcome-title">Welcome to my Tindahan!</h2>
                    <br />
                    <button>
                        <Link to="/shop">Shop Now</Link>
                    </button>
                </div>
            </main>
            <Footer />
        </>
    )
}