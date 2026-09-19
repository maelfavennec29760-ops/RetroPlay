import { useState } from 'react'

import ConsoleFilter from '../../components/ConsoleFilter/consoleFilter.jsx'
import GameCards from '../../components/GameCard/gameCard.jsx'
import Games from '../../data/games.json'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import './library.scss'

function Library() {

    const [consoleFilter, setConsoleFilter] = useState("Tous")
    const [currentPage, setCurrentPage] = useState(0)

    const gamesPerPage = 12

    const startIndex = currentPage * gamesPerPage
    const endIndex = startIndex + gamesPerPage

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

    const currentGames = gamesToDisplay.slice(startIndex, endIndex)

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const previousPage = () => {
        setCurrentPage(currentPage - 1)
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

            <div className="gamesGrid">

                <button
                    className="carouselBtn carouselBtnLeft"
                    onClick={previousPage}
                >
                    <ChevronLeft />
                </button>

                {currentGames.map((game) => (
                    <GameCards
                        key={game.id}
                        cover={game.cover}
                        title={game.title}
                        console={game.console}
                        year={game.year}
                    />
                ))}

                <button
                    className="carouselBtn carouselBtnRight"
                    onClick={nextPage}
                >
                    <ChevronRight />
                </button>

            </div>

        </main>
    )
}

export default Library