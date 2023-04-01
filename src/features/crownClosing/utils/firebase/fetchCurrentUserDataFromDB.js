import {doc, getDoc} from 'firebase/firestore'
import {db} from './firebase'

export const fetchCurrentUserDataFromDB = (user) => {
  if (user) {
    return new Promise(async (resolve, reject) => {
      //getting user data from db
      const userDocRef = doc(db, 'users', user.uid)
      // look if user exists in db
      const userSnapshot = await getDoc(userDocRef)
      if (userSnapshot.exists()) {
        resolve(userSnapshot.data())
      } else {
        console.log('No such document!')
        resolve(null)
      }
    })
  }
}