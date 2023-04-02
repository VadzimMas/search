// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {createUserWithEmailAndPassword, getAuth, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhrx3Qz91enX29ef953mloWjOfhj2LK88',
  authDomain: 'crown-clothing-db-ef862.firebaseapp.com',
  projectId: 'crown-clothing-db-ef862',
  storageBucket: 'crown-clothing-db-ef862.appspot.com',
  messagingSenderId: '447708441524',
  appId: '1:447708441524:web:00f5a5f0b5ce04de67e0e1'
}
//initialise firebaseApp , db , auth
const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})


// // creating user with email and password
// export const createUser = async (email, password) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password)
//   } catch (error) {
//     console.log(error.code)
//     console.log(error.message)
//   }
// }

export const updateUserProfile = async (rest) => {
  new Promise(async (resolve, reject) => {
    try {
      console.log('trying update user profile')
      await updateProfile(auth.currentUser, {...rest})
      resolve(true)
    } catch (error) {
      console.log('updateProfile', error)
    }
  })
}
// sign in user with email and password
export const signInUserEmailPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    console.log('signInUserEmailPassword')
  } catch (error) {
    console.log(error.code)
    console.log(error.message)
  }
}


//////////////////////////////////////////////////////////////////////////////


// export const signInWithGooglePopup = () => createUserWithEmailAndPassword(auth, googleProvider)


//adding collection and Document
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  
  await batch.commit()
}

// get collection and Document
export const getCollectionAndDocument = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey)
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  
  return categoryMap
}

//getting user data from sign in google
export const createUserInDB = async () => {
  const user = auth.currentUser
  if (!user) return
  
  //getting user data from db
  const userDocRef = doc(db, 'users', user.uid)
  // look if user exists in db
  const userSnapshot = await getDoc(userDocRef)
  //if user does not exist then create user
  if (!userSnapshot.exists()) {
    // destructure displayName and email from google auth
    const {displayName, email} = user
    // getting date when user was created
    const createdAt = new Date()
    
    try {
      // write user data to db
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log('error-page creating user', error)
    }
  } else {
    // else user exist in db return user data
    return userDocRef
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  await signOut(auth)
  console.log('signOutUser')
}

// export const onAuthStateChangeListener = (callback) => {
//   return onAuthStateChanged(auth, callback)
// }


export {getRedirectResult}