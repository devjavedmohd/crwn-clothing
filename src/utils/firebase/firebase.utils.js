// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDENOGXsImBfI0Km6BE8obK7gU8tSqvhGg",
    authDomain: "crwn-clothing-db-d878d.firebaseapp.com",
    projectId: "crwn-clothing-db-d878d",
    storageBucket: "crwn-clothing-db-d878d.appspot.com",
    messagingSenderId: "71819732517",
    appId: "1:71819732517:web:6b57701a762640dea381cc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error craeting the user', error.message);
        }
    }
    return userDocRef;
}