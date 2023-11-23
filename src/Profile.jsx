import { useState } from 'react';
import './css/Profile.css'
import Form from './Form';
import InputControl from './Input';
import JoblyApi from './api';

function Profile(){
    const user = JoblyApi.getCurrentUser().user;
    let [status, setStatus] = useState();
    const INIT = {
        'username': user.username,
        'first name': user['first name'],
        'last name': user['last name'],
        email: user.email,
    }
    const [values, setValues] = useState(INIT);

    async function process(e){
        e.preventDefault();
        let result = await JoblyApi.saveProfile(user.username, values);
        if (result.success){
            setTimeout(() => {
                setStatus([]);
            }, 1700);
            setValues(JoblyApi.getCurrentUser().user);
        }

        setStatus(result.status);
    }

    function changeData(e){
        let {name, value} = e.target;
        setValues({...values, [name]:value})
    }

    return(
        <div className='Profile'>
            <h1 className='Profile-heading'>Profile</h1>
            <Form
                inputs={[
                    <InputControl value={values['username']} label='username' disabled={true} key={1}/>,
                    <InputControl value={values['first name']} label='first name' change={e => changeData(e)} key={2}/>,
                    <InputControl value={values['last name']} label='last name' change={e => changeData(e)} key={3}/>,
                    <InputControl value={values['email']} label='email' change={e => changeData(e)} key={4}/>,
                    <InputControl value={values['confirm password']} label='confirm password' change={e => changeData(e)} password={true} key={5}/>,
                    <InputControl label='save changes' type='submit' key={6}/>,
            ]}
            formSubmit={process}
            errors={status}
            />
        </div>
    )
}

export default Profile;