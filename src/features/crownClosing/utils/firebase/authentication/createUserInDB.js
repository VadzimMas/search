import {doc, getDoc, setDoc, Timestamp} from 'firebase/firestore'
import {auth, db} from '../index'

const createUserDataInDB = async (userData) => {
  return new Promise(async (resolve, reject) => {
    console.log('check user in BD')
    const user = auth.currentUser
    if (user) {
      // getting user data from db
      const userDocRef = doc(db, 'users', user.uid)
      // look if user exists in db
      const userSnapshot = await getDoc(userDocRef)
      //if user does not exist then create user
      if (!userSnapshot.exists()) {
        console.log('user does not exist BD => prepare user data')
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
          , ...userData
        }
        try {
          console.log('writing user data in DB')
          // write user data to db
          await setDoc(userDocRef, dataToWrite)
          console.log('user created successful in DB')
          resolve()
        } catch (error) {
          console.log('user not created : ', error)
        }
      } else {
        console.log('user exists in DB')
      }
    } else {
      console.log('user does not exist')
    }
  })
}


export default createUserDataInDB