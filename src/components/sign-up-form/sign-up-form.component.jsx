import './sign-up-form.styles.scss'

import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

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
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('User different email to create account.')
            } else {
                console.log('user creation encountered error', error);
            }
        }
        
    }
    const handlechange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return ( 
        <div className='sign-up-container'>
            <h2>Don't have an acount</h2>
            <span>Sign up with your email and password</span>
            <form className='group' onSubmit={handleSubmit}>
                <FormInput label="Display Name" className='form-input' type="text" required onChange={handlechange} name='displayName' value={displayName}/>
                <FormInput label="Email" className='form-input' type="email" required onChange={handlechange} name='email' value={email}/>
                <FormInput label="Password" className='form-input' type="password" required onChange={handlechange} name='password' value={password}/>
                <FormInput label="Confirm Password" className='form-input' type="password" required onChange={handlechange} name='confirmPassword' value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;