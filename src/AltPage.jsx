import { Link } from "react-router-dom";
import './css/Altpage.css';

function Altpage({span, link, txt}){
return (
        <div className="Altpage">
            <span>{span} </span>
            <Link to={`/${link}`}>{txt}</Link>
        </div>
        )
}

export default Altpage;