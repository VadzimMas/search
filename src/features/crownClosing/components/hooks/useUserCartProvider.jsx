import {useFetchCartQuery} from '../../redux/api/cart.api'
import {useEffect} from 'react'
import {auth, db} from '../../utils/firebase/firebase'
import {doc, onSnapshot} from 'firebase/firestore'

const useUserCartProvider = () => {
  const {refetch} = useFetchCartQuery()
  useEffect(() => {
    if (auth.currentUser) {
      
      const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), (doc) => {
        // console.log('Current data: ', doc.data())
        refetch()
      })
      
      return () => unsubscribe()
    }
  }, [refetch, auth.currentUser])
}

export default useUserCartProvider