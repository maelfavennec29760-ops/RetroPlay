import { Globe, Zap, Gamepad2, Save } from 'lucide-react'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
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
                    <p>GB, GBC, GBA, NES...</p>
                </article>
                <article className='save'>
                    <Save/>
                    <h3>Sauvegarde automatique</h3>
                    <p>Reprends où tu t'es arrêté</p>
                </article>
            </footer>
    )
}

export default Footer;