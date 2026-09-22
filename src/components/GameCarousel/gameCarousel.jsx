import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GameCards from '../../components/GameCard/gameCard.jsx'


function GameCarousel({ gamesToDisplay }){
    const [currentPage, setCurrentPage] = useState(0)
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const previousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    useEffect(() => {
        setCurrentPage(0)
    }, [gamesToDisplay])
    const gamesPerPage = 12
    const startIndex = currentPage * gamesPerPage
    const endIndex = startIndex + gamesPerPage
    const currentGames = gamesToDisplay.slice(startIndex, endIndex)
    return (
        <div className="gamesGrid">
            {currentPage > 0 && (
                <button
                    className="carouselBtn carouselBtnLeft"
                    onClick={previousPage}
                >
                <ChevronLeft />
                </button>
            )}
            {currentGames.map((game) => (
                <GameCards
                    key={game.id}
                    cover={game.cover}
                    title={game.title}
                    console={game.console}
                    year={game.year}
                />
                ))}
            {endIndex < gamesToDisplay.length &&(
                <button
                    className="carouselBtn carouselBtnRight"
                    onClick={nextPage}
                >
                    <ChevronRight />
                </button>
            )}    
        </div>
    )
}

export default GameCarousel