import ConsoleData from '../../data/consoles.json'
import ConsoleCards from '../../components/ConsoleCard/consoleCard.jsx'
import './console.scss'


function Console() {
    return (
        <main className="consolePage">
            <div className="consoleText">
                <h1>Consoles</h1>
                <p>Liste des consoles émulées</p>
            </div>
            <div className="consolesGrid">
                {ConsoleData.map((console) => (
                    <ConsoleCards
                        key={console.id}
                        cover={console.cover}
                        name={console.name}
                        desc={console.desc}
                        manufacturer={console.manufacturer}
                        year={console.year}
                    />
                ))}
            </div>
        </main>
    )
}

export default Console