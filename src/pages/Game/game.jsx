import { useParams } from "react-router-dom"
import Emulator from "../../components/Emulator/emulator.jsx"
import games from '../../data/games.json'
import "./game.scss"
import { useState } from "react"

function Game() {
    const [started, setStarted] = useState(false)
    const { id } = useParams()
    const allGames = Object.values(games).flat()
    const game = allGames.find((game) => {
        return game.id === Number(id)
    })
    console.log(game)
    function startGame(){
        const iframe = document.querySelector(".emulator")
        iframe.contentWindow.postMessage({
            action: "startGame"
        }, window.location.origin)
        setStarted(true)
    }
    return (
        <main className="gamePage">
            <h1>{game.title}</h1>
            <div className="gameContainer">
                <Emulator game={game} />
                {!started && (
                <div className="startScreen">
                    <img
                        src="/background/backgroundEJS.png"
                        alt="RetroPlay"
                    />
                    <button onClick={startGame}>
                        START GAME
                    </button>
                </div>
                )}
            </div>
        </main>
    )
}

export default Game