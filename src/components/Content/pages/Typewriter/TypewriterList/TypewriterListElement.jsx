import { Link } from 'react-router-dom';


const TypewriterListElement = (props) => {
    let Path = "/TypewriterList/" + props.Page;

    return (
        <div className="TypewriterListElement">
            <div className="ElementTitle">
                <Link className="Link" to={Path}>
                    <h2>{props.Title}</h2>
                </Link>
            </div>
            <div className="ElementImage">
                <Link className="Link" to={Path}>
                    <img src={props.Image} alt="Sholes_typewriter" />
                </Link>
            </div>
            <div className="ElementContent">
                {props.Text}
            </div>
        </div>
    );
}
export default TypewriterListElement;