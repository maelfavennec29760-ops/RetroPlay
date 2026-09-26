import { useParams } from "react-router-dom"
import Emulator from "../../components/Emulator/emulator.jsx"
import games from '../../data/games.json'
import "./game.scss"
import { useState } from "react"

function Game() {
    const { id } = useParams()
    const allGames = Object.values(games).flat()
    const game = allGames.find((game) => {
        return game.id === Number(id)
    })
    console.log(game)

    return (
        <main className="gamePage">
            <h1>{game.title}</h1>
            <div className="gameContainer">
                <Emulator game={game}/>
            </div>
        </main>
    )
}

export default Game