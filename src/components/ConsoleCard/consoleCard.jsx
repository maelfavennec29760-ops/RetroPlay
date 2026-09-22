import './consoleCard.scss'

function ConsoleCard({ cover, name, manufacturer, year, desc }){
    return (
        <article className="consoleCard">
            <div className="consoleCover">
                <img src={cover} alt={name} />
            </div>
            <div className="consoleInfo">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
            <div className="consoleDetails">
                <span>{manufacturer}</span>
                <span>{year}</span>
            </div>
        </article>
    )
}

export default ConsoleCard