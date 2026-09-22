import './emulator.scss'

function Emulator({ game }) {
    const emulatorUrl = `/emulator/player.html?rom=${encodeURIComponent(game.rom)}&console=${encodeURIComponent(game.console)}`
    return (
        <iframe className="emulator" src={emulatorUrl} title="RetroPLay Emulator"></iframe>
    )
}

export default Emulator