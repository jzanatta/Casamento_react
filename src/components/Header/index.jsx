import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Music from '../Music'

function Header() {
    return (
        <div className="cabecalho">
            <header className={styles.header}>
                <span> J e I </span>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/casal">O casal</Link>
                    <Link to="/presentes">Lista de presentes</Link>
                    <Link to="/presenca">Confirme sua presença</Link>
                </nav>
            </header>
            <Music />
        </div>
    )
}

export default Header