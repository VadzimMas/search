import {useFetchUserQuery} from '../../redux/api/user.api'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../utils/firebase/firebase'
import {useFetchCartQuery} from '../../redux/api/cart.api'

const useUserProvider = () => {
  const {refetch: refetchUser} = useFetchUserQuery()
  const {refetch: refetchCart} = useFetchCartQuery()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      refetchUser()
      refetchCart()
    })
    return () => unsubscribe()
  }, [refetchUser, refetchCart])
}

export default useUserProvider