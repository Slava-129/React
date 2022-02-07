import './Menu.css';
import { NavLink, } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="Lbar">
            <nav className="Menu">
                <NavLink className="NavLink" to="/React">Главная</NavLink>
                <NavLink className='NavLink' to="/HistoryOfCreation">История создания</NavLink>
                <NavLink className='NavLink' to="/DesignFeatures">Конструктивные особенности</NavLink>
                <NavLink className='NavLink' to="/TypewriterList">Список печатных машин</NavLink>

                <NavLink className="NavLink" to="/About">О сайте</NavLink>
            </nav>
        </div>
    );
}

export default Menu;