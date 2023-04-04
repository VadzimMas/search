import {doc, getDoc, setDoc} from 'firebase/firestore'
import {auth, db} from '../index'
import getIP from '../../../../../hooks/getIP'

const removeProductFromUserCartDB = async (product) => {
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
}

export default removeProductFromUserCartDB
