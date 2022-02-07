import { useState } from 'react';
import './Header.css'
import Themes from './../../JS/Themes.js';
import LightButton from './../../img/LightButton.png';
import DarkButton from './../../img/DarkButton.png';
const Header = () => {
    const [Theme, setTheme] = useState(true);
    return (
        <header className="Header">
            <div>
                <h1>Добро пожаловать на Typewriter </h1>
            </div>
            <div className="themeImg" onClick={() => setTheme(!Theme)}>
                <div className="themeButton" onClick={Themes}>
                    <img src={Theme ? DarkButton : LightButton} alt={Theme ? 'DarkButton' : 'LightButton'} />
                    <button>{Theme ? 'Светлая тема' : 'Тёмная тема'}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;