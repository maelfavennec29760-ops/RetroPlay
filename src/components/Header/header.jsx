import Logo from '../Logo/logo.jsx'
import { NavLink } from 'react-router-dom'
import SearchBar from '../Searchbar/searchbar.jsx'
import './header.scss'
import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => {
        setMenuOpen(false)
    }
    return (
        <header>
            <Logo/>
            <div className={`headerMenu ${menuOpen ? "menuOpen" : ""}`}>
                <nav>
                    <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
                    <NavLink to="/library" onClick={closeMenu}>Jeux</NavLink>
                    <NavLink to="/console" onClick={closeMenu}>Console</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>A propos</NavLink>
                </nav>
                <SearchBar/>
            </div>
            <button className="menuBurger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "fermer le menu" : "ouvrir le menu"}>
                {menuOpen ? "✕" : "☰"}
            </button>

        </header>
    )
}

export default Header