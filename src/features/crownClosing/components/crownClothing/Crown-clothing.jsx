import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import s from './crown-clothing.module.scss'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../utils/firebase/firebase'
import {useFetchUserQuery} from '../../redux/api/user.api'

function CrownClothing() {
  
  const {refetch} = useFetchUserQuery()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => refetch())
    return () => unsubscribe()
  }, [refetch])
  
  return (
    <div className={s.crownClothing}>
      <Navbar />
      <div id="detail"><Outlet /></div>
    </div>
  )
}

export default CrownClothing
