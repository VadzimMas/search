// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'


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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// export const signInWithGooglePopup = () => createUserWithEmailAndPassword(auth, googleProvider)

export const db = getFirestore()

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
export const createUserDocumentFromAuth = async (userAuth, rest) => {
  if (!userAuth) return
  
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
      await setDoc(userDocRef, {displayName, email, createdAt, ...rest})
    } catch (error) {
      console.log('error creating user', error)
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

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export {getRedirectResult}