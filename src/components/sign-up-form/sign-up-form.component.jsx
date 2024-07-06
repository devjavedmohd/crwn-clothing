import './sign-up-form.styles.scss'

import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();

        await createAuthUserWithEmailAndPassword();
    }
    const handlechange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form className='group' onSubmit={handleSubmit}>
                <label className='form-input-label'>Dsplay Name</label>
                <input className='form-input' type="text" required onChange={handlechange} name='displayName' value={displayName}/>

                <label className='form-input-label'>Email</label>
                <input className='form-input' type="email" required onChange={handlechange} name='email' value={email}/>

                <label className='form-input-label'>Password</label>
                <input className='form-input' type="password" required onChange={handlechange} name='password' value={password}/>

                <label className='form-input-label'>Confirm Password</label>
                <input className='form-input' type="password" required onChange={handlechange} name='confirmPassword' value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;