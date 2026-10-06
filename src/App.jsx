import { Routes, Route, useLocation} from 'react-router-dom'

import Home from './pages/Home/home.jsx'
import Library from './pages/Library/library.jsx'
import Console from './pages/Console/console..jsx'
import Game from './pages/Game/game.jsx'
import About from './pages/About/about.jsx'

import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  const location = useLocation()
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/library" element={<Library />}/>
        <Route path="/console" element={<Console />}/>
        <Route path="/play/:id" element={<Game />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
    {location.pathname !== "/about" && <Footer />}
    </>
  )
}

export default App;