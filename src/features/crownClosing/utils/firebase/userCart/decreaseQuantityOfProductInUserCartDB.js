import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'

const decreaseQuantityOfProductInUserCartDB = async (id) => {
  const docRef = doc(db, 'users', auth.currentUser.uid)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    let docData = docSnap.data()
    
    // if products array exist and something inside
    if (docData.products && docData.products.length > 0) {
      // go through all products check if new product already exist
      docData.products = docData.products.map((el) => {
        // if exist increment quantity
        if (el.id === id) {
          el.quantity--
        }
        return el
      })
    }
    
    await setDoc(docRef, docData)
    
  } else {
    console.log('user not exists in db => breaking...')
  }
}


export default decreaseQuantityOfProductInUserCartDB