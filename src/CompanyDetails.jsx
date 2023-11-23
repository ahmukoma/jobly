import { useState } from 'react';
import JoblyApi from './api';
import './css/companydetails.css';
import { Navigate, useParams } from 'react-router-dom';
import PageNotFound from './404';

function CompanyDetails(){
    let [data] = useState(JoblyApi.getCompany(useParams().handle));
    let info = data.data;

    if (!data.success){
        return <PageNotFound/>
    }

    return (
        <div className='CompanyDetails'>
            <h1 className='Name'>{info.name}</h1>
            <label className='Handle'>@{info.handle}</label>
            <p className='Description'>{info.description}</p>
            <h5>Employees: {info.numEmployees}</h5>
        </div>
    )
}

export default CompanyDetails;