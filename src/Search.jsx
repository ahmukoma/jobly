import Form from "./Form";
import InputControl from './Input';
import './css/Search.css'

function Search({search, value, dataChange}){
    function passive(e){
        if (search) return search;
        e.preventDefault();
    }
    
    return(
        <div className='Search' id="Search">
            <form onSubmit={(e) => passive(e)} className="Search-form">
                <div className="Search-bar">
                    <input type="text" placeholder="Search term" value={value} className="" onChange={e => dataChange(e)}/>
                    <button type="submit" className="Search-submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;