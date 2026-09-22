import { useState } from 'react'

import ConsoleFilter from '../../components/ConsoleFilter/consoleFilter.jsx'
import Games from '../../data/games.json'
import GameCarousel from '../../components/GameCarousel/gameCarousel.jsx'


import './library.scss'

function Library() {

    const [consoleFilter, setConsoleFilter] = useState("Tous")
    let gamesToDisplay
    if (consoleFilter === "Tous") {
        gamesToDisplay = Object.values(Games).flat()
    }
    if (consoleFilter === "Gameboy") {
        gamesToDisplay = Games.gameboy
    }
    if (consoleFilter === "GameboyColor") {
        gamesToDisplay = Games.gameboyColor
    }
    if (consoleFilter === "GameboyAdvance") {
        gamesToDisplay = Games.gameboyAdvance
    }
    if (consoleFilter === "Nes") {
        gamesToDisplay = Games.nes
    }
    if (consoleFilter === "SuperNes") {
        gamesToDisplay = Games.superNes
    }
    if (consoleFilter === "SegaMegaDrive") {
        gamesToDisplay = Games.segaMegaDrive
    }

    return (
        <main className="library">

            <div className="libraryText">
                <h1>Bibliothèque de jeux</h1>
                <p>Des centaines de jeux classiques à (re)découvrir</p>
            </div>
            <ConsoleFilter
                consoleFilter={consoleFilter}
                setConsoleFilter={setConsoleFilter}
            />
            <GameCarousel gamesToDisplay={gamesToDisplay}/>
        </main>
    )
}

export default Library