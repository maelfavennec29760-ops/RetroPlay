import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GameCards from '../../components/GameCard/gameCard.jsx'


function GameCarousel({ gamesToDisplay }){
    const [currentPage, setCurrentPage] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [visibleGames, setVisibleGames] = useState(0)
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const previousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    useEffect(() => {
        setCurrentPage(0)
        setVisibleGames(8)
    }, [gamesToDisplay])
    const gamesPerPage = 12
    const startIndex = currentPage * gamesPerPage
    const endIndex = startIndex + gamesPerPage
    const currentGames = isMobile ? gamesToDisplay.slice(0, visibleGames) : gamesToDisplay.slice(startIndex, endIndex)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    const loadRef = useRef(null)
    useEffect(() => {
        if(!isMobile) return
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if(entry.isIntersecting) {
                setVisibleGames((previous) => previous + 8)
            }
        })
        if(loadRef.current) {
            observer.observe(loadRef.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [isMobile])
    return (
        <div className="gamesGrid">
            {!isMobile && currentPage > 0 && (
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
                    id={game.id}
                    cover={game.cover}
                    title={game.title}
                    console={game.console}
                    year={game.year}
                />
                ))}
            {isMobile && visibleGames < gamesToDisplay.length && (
                <div className='infiniteScrollLoader' ref={loadRef}></div>
            )}    
            {!isMobile && endIndex < gamesToDisplay.length &&(
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