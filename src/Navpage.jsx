import './css/Navpage.css';

function Navpage({currPage = 1, pages = 1, navigate}){
     return (
     <div className='Navpage'>
        <button onClick={() => navigate(false)}>{'<'}</button>
        <label> {currPage}/{pages}</label>
        <button onClick={() => navigate(true)}>{'>'}</button>
    </div>)
}

export default Navpage;