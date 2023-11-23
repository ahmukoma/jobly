import { useState } from 'react';
import './css/Companies.css';
import Job from './Job';
import Search from "./Search";
import JoblyApi from './api';
import Navpage from './Navpage';

function Jobs(){
    const [jobs, setJobs] = useState({term: '', data: JoblyApi.getJobs()});
    const [pages, setPages] = useState({});
    const [myApplications, updateApplications] = useState(JoblyApi.getCurrentUser().user.applications || []);

    function navPage(b){

    }

    async function fileApplication(id){
        updateApplications(await JoblyApi.applyToJob(id));
    }

    function dataChange(e){
        let term = e.target.value;
        setJobs({term: term, data: JoblyApi.getJobs(term)})
    }

    return (
        <div className="Companies Jobs">
            <div className="Jobs-search">
                <Search dataChange={(e) => dataChange(e)} value={jobs.term}/>
            </div>
            <div className="Jobs-result">
                {jobs.data.map((v, i) => {
                    return (<Job 
                                key={i}
                                title={v.title}
                                company={v.companyName}
                                description={v.description}
                                salary={v.salary || 0}
                                equity={v.equity}
                                fileApp={() => fileApplication(v.id)}
                                apply={myApplications.indexOf(v.id) === -1}
                                />)
                })}
            </div>
            {/* <Navpage/> */}
        </div>
    )
}

export default Jobs;