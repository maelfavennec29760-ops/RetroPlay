import { Gamepad2, Zap, Play, Square, RotateCcw, Expand, Save, Upload, ArrowDownToLine, Gauge, Volume2 } from 'lucide-react'
import './emulatorControl.scss'

function EmulatorControl({ handleFullscreen, handlePlay, handleRestart, handleStop, handleSave, handleLoad }) {
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
            <article className="emulatorSpeed">
                <div className="emulatorSpeedTitle">
                    <Gauge/>
                    <span>Vitesse de l'émulation</span>
                </div>
                <div className="speedSelect">
                    <input type="range" name="speedEmulation" min="50" max="200" step="10" defaultValue="100"/>
                    <div className="speedBtn">
                        <button><span>50%</span></button>
                        <button><span>100%</span></button>
                        <button><span>150%</span></button>
                        <button><span>200%</span></button>
                    </div>
                </div>
            </article>
            <article className="sound">
                <div className="soundTitle">
                    <Volume2/>
                    <span>Audio</span>
                </div>
                <div className="soundControl">
                    <input type="range" name="volume" min="0" max="100" step="1" defaultValue="50"/>
                </div>
            </article>
            <button className="resetEmulatorControl">
                <RotateCcw/>
                <span>Réinitialiser par défaut</span>
            </button>
        </div>
    )
}

export default EmulatorControl
