// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhrx3Qz91enX29ef953mloWjOfhj2LK88',
  authDomain: 'crown-clothing-db-ef862.firebaseapp.com',
  projectId: 'crown-clothing-db-ef862',
  storageBucket: 'crown-clothing-db-ef862.appspot.com',
  messagingSenderId: '447708441524',
  appId: '1:447708441524:web:00f5a5f0b5ce04de67e0e1',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

//getting user data from sign in google
export const createUserDocumentFromAuth = async (userAuth) => {
  
  //getting user data from db
  const userDocRef = doc(db, 'users', userAuth.uid)
  // look if user exists in db
  const userSnapshot = await getDoc(userDocRef)
  
  //if user does not exist then create user
  if (!userSnapshot.exists()) {
    // destructure displayName and email from sign in google
    const {displayName, email} = userAuth
    // getting date when user was created
    const createdAt = new Date()
    
    try {
      // write user data to db
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log('error creating user', error)
    }
  } else {
    // else user exist in db return user data
    return userDocRef
  }
  
}