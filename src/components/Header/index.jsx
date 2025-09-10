import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Meu Portifólio</h1>
            <nav>
                <Link to="/">
                    <button type="button" className='btn-nav'>Home</button>
                </Link>
                <Link to="/ApiRickandMorty">
                    <button type="button" className='btn-nav'>API Rick and Morty</button>
                </Link>
            </nav>
        </header>
    )
}