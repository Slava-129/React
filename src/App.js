import React from 'react';
import './App.css';
import './Themes.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Menu from './components/Menu/Menu.jsx';
import Content from './components/Content/Content.jsx';
import Rbar from './components/Rbar/Rbar.jsx';

const App = () => {
    return (
      <div className="App dark-theme">
        <Header />
        <Menu />
        <Content />
        <Rbar />
        <Footer />
      </div>
    );
}


export default App;

