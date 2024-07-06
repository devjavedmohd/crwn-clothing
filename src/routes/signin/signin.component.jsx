import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './signin.styles.scss'

import Button from "../../components/button/button.component";

const SignIn = () => {

    const loginGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <Button className="google-sign-in" onClick={loginGoogleUser}>Sign in with Google</Button>
            <SignUpForm></SignUpForm>
        </div>        
    )
}

export default SignIn;