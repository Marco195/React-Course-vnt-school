import styles from "./Header.module.css"
import {Link} from "react-router-dom"

//Link faz part do react-router-dom e substitui o "a href", onde é possívle navegar entre as paginas sem que o
//componente no default layout seja recarregado 
export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <h3>vnt<span>/school</span></h3>
                <Link to="/about">About</Link>
            </div>
        </header>
        );
}