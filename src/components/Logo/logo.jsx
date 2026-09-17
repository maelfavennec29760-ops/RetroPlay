import logoRetroPlay from '../../assets/controller.png'
import './logo.scss'

function Logo() {
    return (
        <div className="logo">
            <img src={logoRetroPlay} alt="logo retroplay" />
            <span>RetroPlay</span>
        </div>
    )
}

export default Logo;
