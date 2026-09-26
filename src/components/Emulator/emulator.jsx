import KeyConfig from '../Keyconfig/keyconfig.jsx'
import EmulatorControl from '../EmulatorControl/emulatorControl.jsx'
import defaultKeys from '../../data/defaultKeys.js'
import './emulator.scss'
import { useRef, useState } from 'react'

function Emulator({ game, onGameStart, onGameStop }) {
    const emulatorUrl = `/emulator/player.html?rom=${encodeURIComponent(game.rom)}&console=${encodeURIComponent(game.console)}`
    const emulatorRef = useRef(null)
    const [started, setStarted] = useState(false)
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
        setStarted(true)
        setTimeout(() => {
            emulatorRef.current?.contentWindow?.postMessage(
                {
                    action: "resetKeys",
                    keys: defaultKeys
                }, window.location.origin
            )
        }, 1000)
        
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
        setStarted(false)
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
    const onChangeVolume = (volume) => {
        emulatorRef.current.contentWindow.postMessage(
            {
                action: "volume",
                value: volume
            }, window.location.origin
        )
    }
    const handleChangeKey = (control, keyCode) => {
        console.log("EMULATOR REÇOIT :", control, keyCode)
        console.log("IFRAME :", emulatorRef.current)
        console.log("CONTENT WINDOW :", emulatorRef.current?.contentWindow)
        emulatorRef.current?.contentWindow?.postMessage(
            {
                action: "changeKey",
                control: control,
                keyCode: keyCode
            },
            window.location.origin
        )
    }
    return (
        <>
        {!started && (
                <div className="startScreen">
                    <img
                        src="/background/backgroundEJS.png"
                        alt="RetroPlay"
                    />
                    <button className="startGame" onClick={handlePlay}>
                        START GAME
                    </button>
                </div>
                )}
        <div className="emulatorLayout">
            <EmulatorControl 
                handleFullscreen={handleFullscreen}
                handlePlay={handlePlay}
                handleRestart={handleRestart}
                handleStop={handleStop}
                handleSave={handleSave}
                handleLoad={handleLoad}
                onChangeVolume={onChangeVolume}
            />
            <div className="emulatorFrame">
                <iframe className="emulator" src={emulatorUrl} ref={emulatorRef} title="RetroPLay Emulator"></iframe>
            </div>
            <KeyConfig onChangeKey={handleChangeKey}/>
        </div>
        </>
    )
}

export default Emulator

