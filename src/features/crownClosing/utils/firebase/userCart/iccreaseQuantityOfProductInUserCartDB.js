import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'
import getIP from '../../../../../hooks/getIP'

const increaseQuantityOfProductInUserCartDB = async (id) => {
  let user
  if (auth.currentUser) {
    user = auth.currentUser.uid
  } else {
    user = await getIP()
  }
  
  const docRef = doc(db, auth.currentUser ? 'users' : 'guest', user)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    let docData = docSnap.data()
    
    // if products array exist and something inside
    if (docData.products && docData.products.length > 0) {
      // go through all products check if new product already exist
      docData.products = docData.products.map((el) => {
        // if exist increment quantity
        if (el.id === id) {
          el.quantity++
        }
        return el
      })
    }
    
    await setDoc(docRef, docData)
    
  } else {
    console.log('user not exists in db => breaking...')
  }
}


export default increaseQuantityOfProductInUserCartDB