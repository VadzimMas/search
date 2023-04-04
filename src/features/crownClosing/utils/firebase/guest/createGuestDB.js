import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'
import axios from 'axios'

const createGuestDB = () => {
  if (!auth.currentUser) {
    return new Promise(async (resolve, reject) => {
      const ip = await getIp()
      //getting user data from db
      const userDocRef = doc(db, 'guest', ip)
      // look if user exists in db
      const userSnapshot = await getDoc(userDocRef)
      if (userSnapshot.exists()) {
        resolve(userSnapshot.data())
      } else {
        console.log('No guest in DB => creating!')
        await setDoc(userDocRef, {products: [], ip: ip})
        resolve()
      }
    })
  } else {
    return {data: null}
  }
}

const getIp = async () => {
  const res = await axios.get('https://api.ipify.org/?format=json')
  console.log(res.data.ip)
  return res.data.ip
}

export default createGuestDB