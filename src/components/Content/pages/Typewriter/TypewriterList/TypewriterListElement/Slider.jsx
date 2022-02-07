import { useState } from 'react';
import ToggleButtonR from './../../../../../../img/ToggleButtonR.png'
import ToggleButtonL from './../../../../../../img/ToggleButtonL.png'

const Slider = (props) => {
    const [Num, setNum] = useState(0);
    return (
        <div className='Img-flexbox'>
            <div className='Button' onClick={() => setNum(Num > 0 ? Num - 1 : props.ListImg.length - 1)}>
                <img src={ToggleButtonL} alt='Лево' />
            </div>
            <div className='Card'>
                <img src={props.ListImg[Num]} alt="Whitestone_typewriter" />
            </div>
            <div className='Button' onClick={() => setNum(Num < props.ListImg.length - 1 ? Num + 1 : 0)}>
                <img src={ToggleButtonR} alt='Право' />
            </div>
        </div>
    )
}

export default Slider;