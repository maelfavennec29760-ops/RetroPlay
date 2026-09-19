import './gameCard.scss'

function GameCard({ cover, title, console, year }) {
    return (
        <article className='gameCard'>
            <div className='gameCover'>
                <img src={cover} alt={title} />
            </div>
            <div className='gameInfo'>
                <h2>{title}</h2>
                <div className='gameDetails'>
                    <span>{console}</span>
                    <span>{year}</span>
                </div>
            </div>
        </article>
    )
}

export default GameCard;