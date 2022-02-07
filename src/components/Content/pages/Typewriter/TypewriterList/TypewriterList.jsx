import './TypewriterList.css';
import TypewriterListElement from './TypewriterListElement.jsx';
import Sholes_typewriter from './../../../../../img/Sholes_typewriter.png';
import Whitestone_typewriter from './../../../../../img/Whitestone_typewriter.png';
import Underwood from './../../../../../img/Underwood.png';
import Chinese_typewriter from './../../../../../img/Chinese_typewriter.png'

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
                    Title={'Пишущая машинка Уитстона'}
                    Image={Whitestone_typewriter}
                    Text={<><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo repellat eligendi commodi officia provident, molestiae veniam corporis officiis alias voluptatibus soluta eveniet, nisi, consequuntur odio laborum fuga facere quam!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corrupti sit repudiandae dignissimos nobis totam cumque doloribus quod minima laborum! Repellendus iusto, placeat tempore sequi tenetur corporis dolores commodi consectetur.</p></>}
                />
                <TypewriterListElement
                    Page={'Underwood'}
                    Title={'Ундервуд'}
                    Image={Underwood}
                    Text={<p>Ундервуд — название пишущих машинок, производившихся одноимённой компанией со штаб-квартирой в Нью-Йорке с 1895 по 1959 год. 
                        Ундервуд иногда называется первой современной и по-настоящему популярной пишущей машинкой</p>}
                />
                <TypewriterListElement
                    Page={'ChineseTypewriter'}
                    Title={'Китайская пишущая машинка'}
                    Image={Chinese_typewriter}
                    Text={<p>
                        Китайская пишущая машинка-это пишущая машинка, которая может печатать китайским шрифтом. 
                        Первые Европейские печатные машинки начали появляться в начале 19 века.
                        Однако, поскольку китайский язык использует логографических письменности, сторона тысячи китайских иероглифов на компьютере, необходимы гораздо более сложные инженерные чем машинки с помощью простого латинского алфавита, или других логографических скрипты.
                        обычный китайский типография использует 6000 китайских иероглифов.
                        Китайские пишущие машинки и похожие японских машинках изобретен киоте Сугимото, которые используют кандзи, заимствованные из китайской системы письма, начали появляться только в начале 20 века.
                        Существовало по меньшей мере пять десятков версий китайских пишущих машинок, начиная от крупных механических моделей и заканчивая сложными электрическими текстовыми процессорами.
                        </p>}
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