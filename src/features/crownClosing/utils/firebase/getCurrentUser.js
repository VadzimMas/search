import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'

export const getCurrentUser = () => {
  // console.log('getCurrentUser')
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
      } else {
        resolve(null)
      }
    })
  })
}
