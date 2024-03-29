import {useFetchUserQuery} from '../../store/api/user.api'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../../utils/firebase'
import {useFetchCartQuery} from '../../store/api/cart.api'
import {doc, onSnapshot} from 'firebase/firestore'

const useUserLogInOutListener = async () => {
  const {refetch: refetchUser} = useFetchUserQuery()
  const {refetch: refetchCart} = useFetchCartQuery()
  
  useEffect(() => {
    let unsubscribeUserDataChangeListener
    
    const unsubscribeLogInOutListener = onAuthStateChanged(auth, async (user) => {
      console.log('useUserLogInOutListener')
      
      if (user) {
        console.log('user exist')
        refetchUser()
        unsubscribeUserDataChangeListener = onSnapshot(doc(db, 'users', user.uid),
          (doc) => {
            // console.log('Current data: ', doc.data())
            console.log('user data changed')
            refetchCart()
          })
      } else {
        refetchUser()
        refetchCart()
      }
    })
    
    return () => {
      unsubscribeLogInOutListener()
      unsubscribeUserDataChangeListener && unsubscribeUserDataChangeListener()
    }
  }, [refetchUser, refetchCart])
}

export default useUserLogInOutListener