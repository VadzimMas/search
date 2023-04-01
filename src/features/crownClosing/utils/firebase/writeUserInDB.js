import {doc, getDoc, setDoc, Timestamp} from 'firebase/firestore'
import {db} from './firebase'
import {getCurrentUser} from './getCurrentUser'

export const writeUserDataInDB = async () => {
  console.log('writeUserDataInDB')
  const user = await getCurrentUser()
  if (user) {
    console.log('user logged in')
    // getting user data from db
    const userDocRef = doc(db, 'users', user.uid)
    // look if user exists in db
    const userSnapshot = await getDoc(userDocRef)
    //if user does not exist then create user
    if (!userSnapshot.exists()) {
      // destructure displayName and email from user auth
      const {displayName, email, photoURL, uid} = user
      // getting date when user was created
      const createdAt = Timestamp.now()
      // preparing data to write
      const dataToWrite = {
        displayName,
        email,
        photoURL,
        uid,
        createdAt,
        products: []
      }
      try {
        // write user data to db
        await setDoc(userDocRef, dataToWrite)
      } catch (error) {
        console.log('error-page creating user', error)
      }
    } else {
      console.log('user exists in db')
    }
  }
  
}
