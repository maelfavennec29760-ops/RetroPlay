import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home/home.jsx'
import Library from './pages/Library/library.jsx'
import Console from './pages/Console/console..jsx'
import Play from './pages/Play/play.jsx'
import Settings from './pages/Settings/settings.jsx'

import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/library" element={<Library />}/>
        <Route path="/console" element={<Console />}/>
        <Route path="/play" element={<Play />}/>
        <Route path="/settings" element={<Settings />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;