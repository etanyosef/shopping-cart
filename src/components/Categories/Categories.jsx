import styles from "./categories.module.css";

export default function Categories({categories, filter, handleFilterClick}) {

    function categoryIcon(cat) {
        if (cat === 'electronics') {
            return '💻';
        } else if (cat === 'jewelery') {
            return '💍';
        } else if (cat === "women's clothing") {
            return '👗';
        } else if (cat === "men's clothing") {
            return '👔';
        }
    }

    return (
        <div className={styles.categories}>
            {categories.map(cat => (
                <button 
                    key={cat} 
                    onClick={(e) => handleFilterClick(e)}
                    className={ filter === cat ? styles.active : null }
                >{cat}</button>
            ))}
        </div>
    )
}