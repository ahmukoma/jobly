import { useState } from 'react';
import './css/Companies.css';
import InputControl from './Input';
import Result from './Result';
import Search from './Search';
import JoblyApi from './api';
import Navpage from './Navpage';

function Companies(){
    const [companies, setCompanies] = useState({term: '', data: JoblyApi.getCompanies()});

    function dataChange(e){
        let term = e.target.value;
        setCompanies({term: term, data: JoblyApi.getCompanies(term)})
    }

    return(
        <div className="Companies" id='Companies'>
            <div className='Companies-Search'>
                <Search dataChange={(e) => dataChange(e)} value={companies.term} />
            </div>
            <div className='Companies-result'>
                {companies.data.map((v, i) => {
                    return (<Result title={v.name} description={v.description} key={i} src={v.handle}/>)
                })}
            </div>
            {/* <Navpage /> */}
        </div>
    )
}

export default Companies;