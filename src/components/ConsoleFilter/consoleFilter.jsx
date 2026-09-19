import gameboyIcon from '../../assets/gameboy.svg'
import gameboyColorIcon from '../../assets/gameboy-color.svg'
import gameboyAdvanceIcon from '../../assets/gameboy-advance.svg'
import nesIcon from '../../assets/nes.svg'
import snesIcon from '../../assets/snes.svg'
import segaMegaDriveIcon from '../../assets/segasmg.svg'

import './consoleFilter.scss'

function ConsoleFilter({ consoleFilter, setConsoleFilter }) {
       const handleChange = (selectedConsole) => {
        setConsoleFilter(selectedConsole)
    }
    return (
        <section className="consoleSelect">
            <button className={consoleFilter === "Tous" ? "active" : ""} onClick={() => handleChange("Tous")}>Tous</button>
            <button className={consoleFilter === "Gameboy" ? "active" : ""} onClick={() => handleChange("Gameboy")}>
                <img src={gameboyIcon} alt="" />
                Gameboy
            </button>
            <button className={consoleFilter === "GameboyColor" ? "active" : ""} onClick={() => handleChange("GameboyColor")}>
                <img src={gameboyColorIcon} alt="" />
                Gameboy Color
            </button>
            <button className={consoleFilter === "GameboyAdvance" ? "active" : ""} onClick={() => handleChange("GameboyAdvance")}>
                <img src={gameboyAdvanceIcon} alt="" />
                Gameboy Advance
            </button>
            <button className={consoleFilter === "Nes" ? "active" : ""} onClick={() => handleChange("Nes")}>
                <img src={nesIcon} alt="" />
                Nes
            </button>
            <button className={consoleFilter === "SuperNes" ? "active" : ""} onClick={() => handleChange("SuperNes")}>
                <img src={snesIcon} alt="" />
                Super Nes
            </button>
            <button className={consoleFilter === "SegaMegaDrive" ? "active" : ""} onClick={() => handleChange("SegaMegaDrive")}>
                <img src={segaMegaDriveIcon} alt="" />
                Sega Mega Drive
            </button>
        </section>
    )
}

export default ConsoleFilter