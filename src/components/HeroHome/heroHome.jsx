import gameboyImg from '../../assets/gameboy.webp'
import { NavLink } from 'react-router-dom'
import './heroHome.scss'

function HeroHome() {
    return (
        <section className='heroHome'>
            <div className='heroText'>
                <h1>RetroPlay</h1>
                <h2>Les classiques n'ont jamais eu autant de vie</h2>
                <p>Des centaines de jeux rétro directement dans votre navigateur. Aucune installation. Juste jouer</p>
                <nav>
                    <NavLink to="/">Jouer maintenant</NavLink>
                    <NavLink to="/">Explorer la bibliothèque</NavLink>
                </nav>
            </div>
            <img src={gameboyImg} alt="image de gameboy" className='gameboy'/>
        </section>
    )
}

export default HeroHome;