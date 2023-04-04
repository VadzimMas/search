import {useFetchUserQuery} from '../../store/api/user.api'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../../utils/firebase'
import {useFetchCartQuery} from '../../store/api/cart.api'
import {doc, onSnapshot} from 'firebase/firestore'
import {useCreateGuestMutation} from '../../store/api/guest.api'
import getIP from '../../../../hooks/getIP'

const useUserLogInOutListener = async () => {
  const {refetch: refetchUser} = useFetchUserQuery()
  const {refetch: refetchCart} = useFetchCartQuery()
  const [createGuest] = useCreateGuestMutation()
  
  useEffect(() => {
    let unsubscribeUserDataChangeListener
    let unsubscribeGuestDataChangeListener
    
    const unsubscribeLogInOutListener = onAuthStateChanged(auth, async (user) => {
      console.log('useUserLogInOutListener')
      refetchUser()
      if (user) {
        console.log('user exist')
        unsubscribeUserDataChangeListener = onSnapshot(doc(db, 'users', user.uid), (doc) => {
          // console.log('Current data: ', doc.data())
          console.log('user data changed')
          refetchCart()
        })
      } else {
        const ip = await getIP()
        console.log('guest exist')
        createGuest()
        unsubscribeGuestDataChangeListener = onSnapshot(doc(db, 'guest', ip), (doc) => {
          // console.log('Current data: ', doc.data())
          console.log('guest data changed')
          refetchCart()
        })
      }
    })
    
    return () => {
      unsubscribeLogInOutListener()
      unsubscribeUserDataChangeListener()
      unsubscribeGuestDataChangeListener()
    }
  }, [createGuest, refetchUser, refetchCart])
}

export default useUserLogInOutListener