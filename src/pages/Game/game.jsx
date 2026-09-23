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
        setStarted(true)
    }
    function stopGame(){
        setStarted(false)
    }

    return (
        <main className="gamePage">
            <h1>{game.title}</h1>
            <div className="gameContainer">
                <Emulator game={game} onGameStart={startGame} onGameStop={stopGame} />
                {!started && (
                <div className="startScreen">
                    <img
                        src="/background/backgroundEJS.png"
                        alt="RetroPlay"
                    />
                    <button className="startGame" onClick={startGame}>
                        START GAME
                    </button>
                </div>
                )}
            </div>
        </main>
    )
}

export default Game