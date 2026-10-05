import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Games from '../../data/games.json'
import './searchbar.scss'

function SearchBar() {
    const [search, setSearch] = useState("")
    const allGames = Object.values(Games).flat()
    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    }
    const filteredGames = allGames.filter((game) => 
        normalizeText(game.title).includes(normalizeText(search))
    )
    console.log(filteredGames)
    return (
        <form className='searchbar'>
            <Search/>
            <input type="search" placeholder="Rechercher un jeu..." value={search} onChange={(event) => setSearch(event.target.value)}/>
            {search && (
                <div className="searchResults">
                    {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <Link to={`/play/${game.id}`} className="searchResult" key={game.id} onClick={() => setSearch("")}>
                            <img src={game.cover} alt={game.title} />
                            <div>
                                <p>{game.title}</p>
                                <span>{game.console}</span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="noSearchResult">
                        Aucun jeu trouvé
                    </p>
                )}
                </div>
            )}
        </form>    
    )
}

export default SearchBar;