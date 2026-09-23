import { Keyboard, RotateCw, GamepadDirectional, SquarePen } from 'lucide-react'
import './keyconfig.scss'

function KeyConfig() {
    const keys = [
        {name: "Haut", keys: "Z"},
        {name: "Bas", keys: "S"},
        {name: "Gauche", keys: "Q"},
        {name: "Droite", keys: "D"},
        {name: "Bouton A", keys: "A"},
        {name: "Bouton B", keys: "X"},
        {name: "Bouton C", keys: "E"},
        {name: "Start", keys: "Enter"},
        {name: "Select", keys: "Shift"},
    ]
    return (
        <div className="keyConfigFieldset">
            <div className="keyConfigTitle">
                <Keyboard/>
                <span>Configuration des touches</span>
            </div>
            <div className="controllerSelect">
                <GamepadDirectional/>
                <select name="controller" id="controller">
                    <option value="1">Manette 1</option>
                    <option value="2">Manette 2</option>
                    <option value="3">Manette 3</option>
                    <option value="4">Manette 4</option>
                    <option value="5">Manette 5</option>
             </select>
            </div>
            <div className="keyConfig">
                {keys.map((key) => {
                    return (
                    <div className="keyRow" key={key.name}>
                        <label>{key.name}</label>
                        <input type="text" value={key.keys} readOnly />
                        <button><SquarePen /></button>
                    </div>
                    )
                })}
            </div>
            <div className="resetBtn">
                <button><RotateCw/> Rénitialiser par défaut</button>
            </div>
        </div>
    )
}

export default KeyConfig
