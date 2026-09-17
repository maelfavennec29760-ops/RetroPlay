import './searchbar.scss'
import { Search } from 'lucide-react'
function SearchBar() {
    return (
        <form className='searchbar'>
            <Search/>
            <input type="search" placeholder="Rechercher un jeu..."/>
        </form>    
    )
}

export default SearchBar;