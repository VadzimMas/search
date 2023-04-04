import {doc, getDoc} from 'firebase/firestore'
import {auth, db} from '../index'
import getIP from '../../../../../hooks/getIP'

const fetchCurrentUserDataFromDB = async () => {
  
  
  let user
  if (auth.currentUser) {
    user = auth.currentUser.uid
  } else {
    user = await getIP()
  }
  
  
  if (user) {
    return new Promise(async (resolve, reject) => {
      //getting user data from db
      const userDocRef = doc(db, auth.currentUser ? 'users' : 'guest', user)
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