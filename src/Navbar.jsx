import { Link, Navigate } from 'react-router-dom';
import './css/Navbar.css';
import { useContext, useState } from 'react';
import JoblyApi from './api';
import UserContext from './auth/UserContext';

function Navbar (){
    let [token, setToken] = useContext(UserContext);
    let [url, setUrl] = useState('');

    function setHighlight(){
        return window.location.href.split('/')[3].split('?')[0];
    }

    function highlight(t){
        return t === url ? "selected" : "";
    }

    function logout(){
        setToken(JoblyApi.getCurrentUser(true));
    }

    function loggedIn(){
        if (token.token !== ''){
            return (
                <>
                <li><Link to='/companies' className={`${highlight('companies')}`} >Companies</Link></li>
                <li><Link to='/jobs' className={`${highlight('jobs')}`} >Jobs</Link></li>
                <li><Link to='/profile' className={`${highlight('profile')}`} >Profile</Link></li>
                <li><button className='lo-hot' onClick={logout}>Log out {token.user.username}</button></li>
                </>
            )
        }else{
            return  (
                <>
                <li><Link to='/login'>Log in</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
                </>
            )
        }
    }
    
    return(
        <div className='Navbar'>
            <h1 className="Navbar-logo"><Link to='/'>Jobly</Link></h1>
            <ul className="Navbar-links">
                {loggedIn()}
            </ul>
        </div>
    )
}

export default Navbar;