// import { useHistory } from "react-router-dom";
import Altpage from '../AltPage';
import '../css/Login.css';
import InputControl from '../Input';
import Form from '../Form';
import { useState } from 'react';
import JoblyApi from '../api';
import { Navigate } from 'react-router-dom';

function Login({login, setToken}){
    // const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await JoblyApi.login(formData);
        if (result.success) {
        //   history.push("/companies");
            setToken(JoblyApi.getCurrentUser());
            setFormErrors([]);
            return <Navigate to='/companies' />
        } else {
          setFormErrors(result.errors);
        }
      }

    function changeData(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]:value})
    }

    if (login.token){
        return <Navigate to='/'/>
    }

    return (
        <div className='Login'>
            <Form
                heading='Log in'
                inputs={[
                    <InputControl value={formData['username']} change={e => changeData(e)} label='username' key={1}/>,
                    <InputControl value={formData['password']} change={e => changeData(e)} label='password' password={true} key={2}/>,
                    <InputControl type='submit' label='Log in' key={3}/>
                ]}
                formSubmit={handleSubmit}
                errors={formErrors}
                />

            <Altpage link='signup' txt='Sign up' span='Not a member?'/>
        </div>
    )
}

export default Login;