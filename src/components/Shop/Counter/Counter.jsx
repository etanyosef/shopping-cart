import { useState } from "react";
import styles from "./counter.module.css";

export default function Counter({ count, setCount }) {

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        if (count === 1) return count;
        
        setCount(prevCount => prevCount - 1);
    }

    function handleCountChange(e) {
        setCount(e.target.value);
    }

    return (
        <div className={styles.counter}>
            <button onClick={decrement}>-</button>
            <input 
                type="number" 
                min={1} 
                max={99} 
                value={count}
                onChange={(e) => handleCountChange(e)}
            />
            <button onClick={increment}>+</button>
        </div>
    )
}