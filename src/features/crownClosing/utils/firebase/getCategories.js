import {db} from './firebase'
import {collection, getDocs} from 'firebase/firestore'

export const getCategories = async () => {
  try {
    const collectionRef = collection(db, 'categories')
    const collectionSnapshot = await getDocs(collectionRef)
    return collectionSnapshot.docs.map(doc => doc.data())
  } catch (error) {
    console.error(error.message)
    return {error: error.message}
  }
}

