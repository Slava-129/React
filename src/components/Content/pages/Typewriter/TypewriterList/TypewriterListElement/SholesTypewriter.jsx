import Sholes_typewriter from './../../../../../../img/Sholes_typewriter.jpg';
import Sholes_Glidden_1874 from './../../../../../../img/Sholes_Glidden_1874.jpg';
import './TypewriterListElement.css';

const SholesTypewriter = () => {
    return (
        <div className="Content">
            <h1 className='Title'>Пишущая машинка Шолс и Глидден</h1>
            <p>
                Первая пишущая машинка, которая была коммерчески успешной, была запатентована в 1868 году американцами Кристофером Лэйтамом Шолесом, Фрэнком Хейвеном Холлом, Карлосом Глидденом и Сэмюэлем У.
                Соулом в Милуоки, штат Висконсин, хотя Шолес вскоре отрекся от машины и отказался использовать или даже рекомендовать ее.
                Рабочий прототип был изготовлен часовщиком и машинистом Маттиасом Швальбахом.
                Холл, Глидден и Соул продали свои доли в патенте (79 265 долларов США) Денсмору и Шолесу,которые заключили соглашение с E. Remington and Sons (тогда известным как производитель швейных машин) о коммерциализации машины как Sholes and Glidden Type-Writer.
                Так возник термин пишущая машинка. Remington начал производство своей первой пишущей машинки 1 марта 1873 года в Илионе, штат Нью-Йорк.
                У него была раскладка клавиатуры QWERTY, которая из-за успеха машины медленно принималась другими производителями пишущих машинок.
                Как и в случае с большинством других ранних пишущих машинок, из-за того, что печатные панели ударяют вверх, машинистка не могла видеть символы, когда они были напечатаны.
            </p>
            <div className='scrolling-flexbox'>
                <div className='card'>
                    <img src={Sholes_typewriter} alt="Whitestone_typewriter" />
                </div>
                <div className='card'>
                    <img src={Sholes_Glidden_1874} alt="Sholes_Glidden_1874" />
                </div>
                <div className='card'>
                    <img src={Sholes_typewriter} alt="Whitestone_typewriter" />
                </div>
                <div className='card'>
                    <img src={Sholes_Glidden_1874} alt="Sholes_Glidden_1874" />
                </div>
            </div>
        </div>
    );
}

export default SholesTypewriter;  