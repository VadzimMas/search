import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'

const clearUserCartDB = async (product) => {
  const docRef = doc(db, 'users', auth.currentUser.uid)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    let docData = docSnap.data()
    // if products array exist and something inside
    docData.products = []
    console.log(docData)
    // write updated document
    await setDoc(docRef, {...docData})
    
  } else {
    console.log('user not exists in db')
  }
}

export default clearUserCartDB
