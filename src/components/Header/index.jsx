import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Rick and Morty API</h1>
            <nav>
                <Link to="/About">
                    <button type="button">Saiba mais</button>
                </Link>
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
            </nav>
        </header>
    )
}