import JoblyApi from './api';

import './css/Job.css';
const Job = function ({title, company, description, salary, equity, apply=true, fileApp}){
    return(
        <div className="Job">
            <h2 className="Job-title">{title}</h2>
            <div className='Job-bucket'>
                <h3 className="Job-company">{company}</h3>
                <p className="Job-description">{description}</p>
                <p className="Job-salary">Salary: {`$${salary}`}</p>
                <p className="Job-equity">Equity: {`${equity || 0}`}</p>
            </div>
            <button className='Job-apply' disabled={!apply} onClick={fileApp}>{apply ? 'Apply' : 'Applied'}</button>
        </div>
    )
}

export default Job;