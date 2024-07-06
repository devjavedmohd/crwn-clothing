import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './signin.styles.scss'

const SignIn = () => {

    const loginGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    
    return (
        <div className="button-container">
            <h1>Sign In Page</h1>
            <button className="google-sign-in" onClick={loginGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm></SignUpForm>
        </div>        
    )
}

export default SignIn;