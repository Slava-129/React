import './Content.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HistoryOfCreation from './pages/Typewriter/HistoryOfCreation.jsx';
import TypewriterList from './pages/Typewriter/TypewriterList/TypewriterList.jsx';
import DesignFeatures from './pages/Typewriter/DesignFeatures.jsx';
import SholesTypewriter from './pages/Typewriter/TypewriterList/TypewriterListElement/SholesTypewriter.jsx';
import WhitestoneTypewriter from './pages/Typewriter/TypewriterList/TypewriterListElement/WhitestoneTypewriter.jsx';
import Underwood from './pages/Typewriter/TypewriterList/TypewriterListElement/Underwood.jsx';
import ChineseTypewriter from './pages/Typewriter/TypewriterList/TypewriterListElement/ChineseTypewriter.jsx';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/React" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/HistoryOfCreation" element={<HistoryOfCreation />} />
                <Route path="/DesignFeatures" element={<DesignFeatures />} />
                <Route path="/TypewriterList" element={<TypewriterList />} />
                <Route path="/TypewriterList/SholesTypewriter" element={<SholesTypewriter />} />
                <Route path="/TypewriterList/WhitestoneTypewriter" element={<WhitestoneTypewriter />} />
                <Route path="/TypewriterList/Underwood" element={<Underwood />} />
                <Route path="/TypewriterList/ChineseTypewriter" element={<ChineseTypewriter />} />
            </Routes>
        </div>
    );
}

export default Content;