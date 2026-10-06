import { useParams } from "react-router-dom"
import Emulator from "../../components/Emulator/emulator.jsx"
import games from '../../data/games.json'
import "./game.scss"

function Game() {
    const { id } = useParams()
    const allGames = Object.values(games).flat()
    const game = allGames.find((game) => {
        return game.id === Number(id)
    })
    console.log(game)

    return (
        <main className="gamePage">
           <div className="mobileWarning">
                <span className="mobileWarningBadge">Mobile</span>
                <h2>RetroPlay arrive bientôt sur mobile</h2>
                <p>
                    Nous travaillons encore sur l'expérience de jeu sur smartphone.
                    En attendant, profitez pleinement de RetroPlay depuis un ordinateur.
                </p>
                <span className="mobileWarningNote">
                    🎮 Support tactile en préparation
                </span>
            </div>
            <h1>{game.title}</h1>
            <div className="gameContainer">
                <Emulator game={game}/>
            </div>
        </main>
    )
}

export default Game