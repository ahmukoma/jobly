import { Link, Navigate } from 'react-router-dom';
import './css/Home.css';
import JoblyApi from './api';

function Home(){
    if (JoblyApi.getCurrentUser().token){
        return <Navigate to='/companies'/>;
    }

    return (
        <div className='Home'>
            <h1 className='Home-heading'>Jobly</h1>
            <p className='Home-description'>All the jobs in one, convenient place.</p>
            <div className='Home-links'>
                <button><Link to='/login'>Log in</Link></button>
                <button><Link to='signup'>Sign up</Link></button>
            </div>
        </div>
    )
}

export default Home;