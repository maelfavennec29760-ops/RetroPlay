import Header from '../../components/Header/header.jsx'
import HeroHome from '../../components/HeroHome/heroHome.jsx'
import './home.scss'

function Home() {
    return (
        <div className='home'>
            <Header/>
            <HeroHome/>
        </div>
    )
}

export default Home