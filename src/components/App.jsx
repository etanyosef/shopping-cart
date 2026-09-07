import Header from "./Header/Header";
import '../css/style.css';
import Footer from "./Footer";
import { Link } from "react-router";
import { useState } from "react";
import ShopNowButton from "./ShopNowButton/ShopNowButton";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="welcome-container">
                    <h2 className="welcome-title">Welcome to my Tindahan!</h2>
                    <br />
                    <ShopNowButton />
                </div>
            </main>
            <Footer />
        </>
    )
}