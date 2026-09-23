import KeyConfig from '../Keyconfig/keyconfig.jsx'
import EmulatorControl from '../EmulatorControl/emulatorControl.jsx'
import './emulator.scss'
import { useRef } from 'react'

function Emulator({ game, onGameStart, onGameStop }) {
    const emulatorUrl = `/emulator/player.html?rom=${encodeURIComponent(game.rom)}&console=${encodeURIComponent(game.console)}`
    const emulatorRef = useRef(null)
    //Fullscreen
    const handleFullscreen = () => {
        emulatorRef.current.requestFullscreen()
    }
    //Play
    const handlePlay = () => {
        emulatorRef.current.contentWindow.postMessage(
            { action: "play" },
            window.location.origin
        )
        onGameStart()
    }
    //Restart 
    const handleRestart = () => {
        emulatorRef.current.contentWindow.postMessage(
            { action: "restart" },
            window.location.origin
        )
    }
    //Stop
    const handleStop = () => {
        const iframe = emulatorRef.current
        if(iframe){
            iframe.src = iframe.src
        }
        onGameStop()
    }
    //Save
    const handleSave = () => {
        emulatorRef.current.contentWindow.postMessage(
            { action: "save" },
            window.location.origin
        )
    }
    //Load Save
    const handleLoad = () => {
        const input = document.createElement("input")
            input.type = "file"
            input.accept = ".state,.sav"
            input.click()
        input.addEventListener("change", async () => {
            const file = input.files[0]
            const buffer = await file.arrayBuffer()
            const state = new Uint8Array(buffer)
        emulatorRef.current.contentWindow.postMessage({
            action: "loadSave",
            data: state,
            filename: file.name
        }, window.location.origin)
        } )   
         
    }
    return (
        <div className="emulatorLayout">
            <EmulatorControl 
                handleFullscreen={handleFullscreen}
                handlePlay={handlePlay}
                handleRestart={handleRestart}
                handleStop={handleStop}
                handleSave={handleSave}
                handleLoad={handleLoad}
            />
            <div className="emulatorFrame">
                <iframe className="emulator" src={emulatorUrl} ref={emulatorRef} title="RetroPLay Emulator"></iframe>
            </div>
            <KeyConfig />
        </div>
    )
}

export default Emulator

