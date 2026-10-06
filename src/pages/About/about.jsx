import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import sassLogo from '../../assets/sass.svg'
import ejsLogo from '../../assets/logoEJS.svg'
import jsonLogo from '../../assets/json.svg'
import './about.scss'

function About() {
    return (
        <main className="about">
            <section className="aboutHero">
                <h1>
                    À PROPOS DE
                    <span> RETROPLAY</span>
                </h1>
                <p>
                    Redécouvrez les classiques du jeu vidéo
                    directement depuis votre navigateur.
                </p>

                <div className="aboutHeroLine"></div>
            </section>
            <div className="aboutContent">
                <section className="aboutIntro">
                    <div className="aboutIntroText">
                        <h2>🎮 RETROPLAY</h2>
                        <p>
                            RetroPlay est une plateforme web qui permet de découvrir
                            et de jouer à des jeux vidéo rétro directement depuis
                            le navigateur.
                        </p>
                        <p>
                            Le projet propose une sélection de jeux issus de
                            différentes consoles, avec une expérience simple,
                            rapide et accessible.
                        </p>
                    </div>
                    <div className="aboutIntroVisual">
                        🎮
                    </div>
                </section>
            <div className="aboutGrid">
                <section className="aboutCard">
                    <h2>💡 LE PROJET</h2>
                    <p>
                        RetroPlay est un projet personnel développé pour approfondir
                        mes compétences en développement web, notamment avec React.
                    </p>
                    <p>
                        Ce projet me permet de combiner ma passion pour les jeux vidéo
                        rétro et l'apprentissage de nouvelles technologies, tout en
                        créant une application utile et agréable à utiliser.
                    </p>
                </section>
                <section className="aboutCard">
                    <h2>⭐ FONCTIONNALITÉS</h2>
                    <ul className="featuresList">
                        <li>🎮 Catalogue de jeux rétro</li>
                        <li>🔍 Recherche globale</li>
                        <li>☰ Filtres par console</li>
                        <li>▶️ Émulation directement dans le navigateur</li>
                        <li>❤️ Système de favoris</li>
                        <li>⚙️ Configuration des touches</li>
                    </ul>
                </section>
            </div>
            <section className="aboutTechnologies">
                <h2>💻 TECHNOLOGIES</h2>
                <p>RetroPlay est développé avec des technologies modernes du web.</p>
                <div className="technologiesGrid">
                    <div className="techCard">
                        <div className="techCardTitle">
                            <img src={reactLogo} alt="" />
                            <strong>React</strong>
                            <span>Bibliothèque JavaScript</span>
                        </div>
                    </div>
                        <div className="techCard">
                            <div className="techCardTitle">
                                <img src={viteLogo} alt="" />
                                <strong>Vite</strong>
                                <span>Outil de build rapide</span>
                            </div>
                        </div>
                        <div className="techCard">
                            <div className="techCardTitle">
                                <img src={sassLogo} alt="" />
                                <strong>Sass</strong>
                                <span>Styles modernes et modulaire</span>
                            </div>
                        </div>
                        <div className="techCard">
                            <div className="techCardTitle">
                                <img src={ejsLogo} alt="" />
                                <strong>EJS Emulator</strong>
                                <span>Emulation de jeux rétro</span>
                            </div>
                        </div>
                        <div className="techCard">
                            <div className="techCardTitle">
                                <img src={jsonLogo} alt="" />
                                <strong>JSON</strong>
                                <span>catalogue des jeux</span>
                            </div>
                        </div>
                </div>
            </section>
            </div>
        </main>
    )
}

export default About