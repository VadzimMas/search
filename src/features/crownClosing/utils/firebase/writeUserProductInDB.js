import {doc, getDoc, setDoc} from 'firebase/firestore'
import {db} from './firebase'

export const writeUserProductInDB = async (user, product) => {
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    let docData = docSnap.data()
    let isProduct = false
    
    // if products array exist and something inside
    if (docData.products && docData.products.length > 0) {
      // go through all products check if new product already exist
      docData.products = docData.products.map((el) => {
        // if exist increment quantity
        if (el.id === product.id) {
          isProduct = true
          el.quantity++
        }
        return el
      })
    }
    
    // if product not exist in db and no db.products array empty => create array and first product
    if (!isProduct && !docData.products) {
      console.log('no product and no  db.products array ')
      docData.products = [{...product, quantity: 1}]
      await setDoc(docRef, {...docData, products: docData.products})
    }
    // if product not exist in db and db.products array already exist => add new product
    else if (!isProduct && docData.products) {
      console.log('product does not exist')
      docData.products = [...docData.products, {...product, quantity: 1}]
      await setDoc(docRef, {...docData, products: docData.products})
    }
    // if exist product in db and db.products array already exist => add new product
    else if (isProduct && docData.products) {
      console.log('product exist')
      docData.products = [...docData.products]
      await setDoc(docRef, {...docData, products: docData.products})
    }
  } else {
    console.log('user not exists in db')
  }
}
