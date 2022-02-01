import './TypewriterList.css';
import Sholes_typewriter from './../../../../../img/Sholes_typewriter.jpg';
import Whitestone_typewriter from './../../../../../img/Whitestone_typewriter.png';
import TypewriterListElement from './TypewriterListElement.jsx'

const TypewriterList = () => {
    return (
        <div className="Content">
            <h1 className="Title">Cписок</h1>
            <div className="TypewriterList">
                <TypewriterListElement
                    Page={'SholesTypewriter'}
                    Title={'Пишущая машинка Шолс и Глидден'}
                    Image={Sholes_typewriter}
                    Text={<>
                    <p>
                        Первая пишущая машинка, которая была коммерчески успешной, была запатентована в 1868 году американцами Кристофером Лэйтамом Шолесом, Фрэнком Хейвеном Холлом, Карлосом Глидденом и Сэмюэлем У.
                        Соулом в Милуоки, штат Висконсин, хотя Шолес вскоре отрекся от машины и отказался использовать или даже рекомендовать ее.
                    </p>
                    </>}
                />
                <TypewriterListElement
                    Page={'WhitestoneTypewriter'}
                    Title={'Печатная машинка Уитстона'}
                    Image={Whitestone_typewriter}
                    Text={<><p>yyiyiu</p><p>skjsklj</p></>}
                />
                <TypewriterListElement
                    Page={'3'}
                    Title={'3'}
                    Image={Whitestone_typewriter}
                    Text={<p>yyiyiu</p>}
                />
                <TypewriterListElement
                    Page={'4'}
                    Title={'4'}
                    Image={Whitestone_typewriter}
                    Text={<p>yyiyiu</p>}
                />
                <TypewriterListElement
                    Page={'5'}
                    Title={'5'}
                    Image={Whitestone_typewriter}
                    Text={<p>yyiyiu</p>}
                />
            </div>
        </div>
    );
}

export default TypewriterList;