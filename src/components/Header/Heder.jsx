import Themes from './../../JS/Themes.js';

const Header = () => {
    return (
        <header className="Header">
            <h1>Добро пожаловать на Typewriter</h1>
            <button className="themeButton" onClick={Themes}>Theme</button>
        </header>
    );
}

export default Header;