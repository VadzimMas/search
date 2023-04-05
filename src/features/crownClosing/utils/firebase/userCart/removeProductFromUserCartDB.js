import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'

const removeProductFromUserCartDB = async (product) => {
  const user = auth.currentUser
  if (user) {
    
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      let docData = docSnap.data()
      // if products array exist and something inside
      if (docData.products && docData.products.length > 0) {
        // go through all products and exclude product from cartData
        docData.products = docData.products.filter((el) => {
          return el.id !== product.id
        })
        // write updated document
        await setDoc(docRef, {...docData})
      }
    } else {
      console.log('user not exists in db')
    }
  } else {
    console.log('user does not exist')
  }
  
}

export default removeProductFromUserCartDB
