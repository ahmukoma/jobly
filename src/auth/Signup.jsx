import InputControl from '../Input';
import Form from '../Form';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Altpage from '../AltPage';
import JoblyApi from '../api';

function Signup({signup, logIn, setLogIn}){
    //const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        'first name': "",
        'last name': "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
     */
    if (logIn.token){
        return <Navigate to='/'/>
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await JoblyApi.signup(formData);
        if (result.success) {
            //history.push("/companies");
            setFormErrors([]);
            setLogIn(JoblyApi.getCurrentUser());
        } else {
            setFormErrors(result.errors);
        }
    }

    /** Update form data field */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    }
    
    return (
        <div>
        <Form
            heading='Sign Up'
            inputs={[
                <InputControl value={formData['username']} label='username' change={e => handleChange(e)} key={1} />,
                <InputControl value={formData['password']} label='password' password={true} change={e => handleChange(e)} key={2}/>,
                <InputControl value={formData['first name']} label='first name' change={e => handleChange(e)} key={3}/>,
                <InputControl value={formData['last name']} label='last name' change={e => handleChange(e)} key={4}/>,
                <InputControl value={formData['email']} label='email' change={e => handleChange(e)} key={5}/>,
                <InputControl type='conditions' otherClasses='terms-container' key={6}/>,
                <InputControl label='sign up' type='submit' key={7}/>,
            ]}
            formSubmit={handleSubmit}
            errors={formErrors}
        />

        <Altpage link='login' txt='Log in' span='Already a member?'/>
        </div>
    )
}

export default Signup;