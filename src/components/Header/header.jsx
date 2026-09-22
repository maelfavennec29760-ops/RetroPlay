import Logo from '../Logo/logo.jsx'
import { NavLink } from 'react-router-dom'
import SearchBar from '../Searchbar/searchbar.jsx'
import './header.scss'

function Header() {
    return (
        <header>
            <Logo/>
            <nav>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/library">Jeux</NavLink>
                <NavLink to="/console">Console</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
            <SearchBar/>
            <NavLink to="/" className="start-btn">Commencer</NavLink>
        </header>
    )
}

export default Header