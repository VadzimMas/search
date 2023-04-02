import {collection, getDocs} from 'firebase/firestore'
import {db} from '../index'

async function getCollection(collectionName) {
  const collectionRef = collection(db, collectionName)
  const collectionSnapshot = await getDocs(collectionRef)
  return collectionSnapshot.docs.map(doc => doc.data())
}

export default getCollection