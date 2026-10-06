import { Link } from 'react-router-dom'
import './gameCard.scss'

function GameCard({ cover, title, console, year, id }) {
    return (
        <Link className='gameCardLink' to={`/play/${id}`}>
        <article className='gameCard'>
            <div className='gameCover'>
                <img src={cover} alt={title} />
            </div>
            <div className='gameInfo'>
                <h2>{title}</h2>
                <div className='gameDetails'>
                    <span className="console">{console}</span>
                    <span className="year">{year}</span>
                </div>
            </div>
        </article>
        </Link>
    )
}

export default GameCard;