import { Gamepad2, Zap, Play, Square, RotateCcw, Expand, Save, Upload, ArrowDownToLine, Gauge, Volume2 } from 'lucide-react'
import './emulatorControl.scss'
import { useState } from 'react'

function EmulatorControl({ handleFullscreen, handlePlay, handleRestart, handleStop, handleSave, handleLoad, onChangeVolume }) {
    const [volume, setVolume] = useState(50)
    console.log(volume)
    return (
        <div className="emulatorControl">
            <div className="emulatorControlTitle">
                <Gamepad2/>
                <span>Contrôle de l'émulateur</span>
            </div>
            <article className="rapidAction">
                <div className="rapidActionTitle">
                    <Zap/>
                    <span>Actions rapides</span>
                </div>
                <div className="rapidActionBtn">
                    <button className="play" onClick={handlePlay}>
                        <Play/>
                        <span>Démarrer</span>
                    </button>
                    <button className="stop" onClick={handleStop}>
                        <Square/>
                        <span>Arrêter</span>
                    </button>
                    <button className="reset" onClick={handleRestart}>
                        <RotateCcw/>
                        <span>Redémarrer</span>
                    </button>
                    <button className="fullscreen" onClick={handleFullscreen}>
                        <Expand/>
                        <span>Plein écran</span>
                    </button>
                </div>
            </article>
            <article className="saveGame">
                <div className="saveTitle">
                    <Save/>
                    <span>Sauvegarde</span>
                </div>
                <div className="saveAction">
                    <button className="saveGame" onClick={handleSave}>
                        <ArrowDownToLine/>
                        <span>Sauvegarder</span>
                    </button>
                    <button className="chargeGame" onClick={handleLoad}>
                        <Upload/>
                        <span>Charger</span>
                    </button>
                </div>
            </article>
            <article className="sound">
                <div className="soundTitle">
                    <Volume2/>
                    <span>Audio</span>
                </div>
                <div className="soundControl">
                    <input type="range" name="volume" min="0" max="100" step="1" value={volume} 
                            onChange={(event) => {
                                setVolume(event.target.value)
                                onChangeVolume(event.target.value) 
                                }}/>
                </div>
            </article>
        </div>
    )
}

export default EmulatorControl
