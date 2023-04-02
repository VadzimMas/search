import {doc, getDoc} from 'firebase/firestore'
import {auth, db} from '../index'

const fetchCurrentUserDataFromDB = () => {
  if (auth.currentUser) {
    return new Promise(async (resolve, reject) => {
      //getting user data from db
      const userDocRef = doc(db, 'users', auth.currentUser.uid)
      // look if user exists in db
      const userSnapshot = await getDoc(userDocRef)
      if (userSnapshot.exists()) {
        resolve(userSnapshot.data())
      } else {
        console.log('No such document!')
        resolve()
      }
    })
  } else {
    return {data: null}
  }
}


export default fetchCurrentUserDataFromDB