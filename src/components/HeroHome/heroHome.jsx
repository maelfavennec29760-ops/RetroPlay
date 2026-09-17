import gameboyImg from '../../assets/gameboy.webp'
import { Globe, Zap, Gamepad2, Save } from 'lucide-react'
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
            <div className='heroInfos'>
                <article className='browser'>
                    <Globe/>
                    <h3>100% Navigateur</h3>
                    <p>Joue directement en ligne</p>
                </article>
                <article className='noInstall'>
                    <Zap/>
                    <h3>0 Installation</h3>
                    <p>Lance et joue</p>
                </article>
                <article className='console'>
                    <Gamepad2/>
                    <h3>Multi-consoles</h3>
                    <p>GB, GBC, GBA, NES</p>
                </article>
                <article className='save'>
                    <Save/>
                    <h3>Sauvegarde automatique</h3>
                    <p>Reprends où tu t'es arrêté</p>
                </article>
            </div>
        </section>
    )
}

export default HeroHome;