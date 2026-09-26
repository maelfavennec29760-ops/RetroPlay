import { Keyboard, RotateCw, GamepadDirectional, SquarePen } from 'lucide-react'
import './keyconfig.scss'
import { useEffect, useState } from 'react'
import defaultKeys from '../../data/defaultKeys.js'

function KeyConfig({ onChangeKey }) {
    const [editing, setEditingKey] = useState(null)
    const [keys, setKeys] = useState(defaultKeys)
    useEffect(() => {
        if(!editing) {
            return
        }
        const handleKeyDown = (event) => {
            console.log("Commande :", editing)
            console.log("Touche :", event.key)
            console.log("Code :", event.keyCode)
            setKeys((currentKeys) => {
                return currentKeys.map((key) => {
                    if(key.control === editing) {
                        return {
                            ...key,
                            keys: event.key.toUpperCase()
                        }
                    }
                    return key
                })
            })
            console.log("KEYCONFIG ENVOIE :", editing, event.keyCode)
            onChangeKey(editing, event.keyCode)
            setEditingKey(null)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [editing])
    const resetKeys = () => {
        setKeys(defaultKeys)
    }
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
                        <button onClick={() => setEditingKey(key.control)}><SquarePen /></button>
                    </div>
                    )
                })}
            </div>
            <div className="resetBtn">
                <button onClick={resetKeys}><RotateCw/> Rénitialiser par défaut</button>
            </div>
        </div>
    )
}

export default KeyConfig
