import { Link } from 'react-router-dom';
import './css/Result.css';

function Result({title, description, src}){
    return (
        <Link className='Result' to={`/companydetails/${src}`}>
        <div>
            <h3 className="Result-title">{title}</h3>
            <p className="Result-description">{description}</p>
        </div>
        </Link>
    )
}

export default Result