import {signInWithPopup} from 'firebase/auth'
import {auth, googleProvider} from './firebase'

export const signInWithGooglePopup = async () => {
  console.log('signInWithGooglePopup')
  await signInWithPopup(auth, googleProvider)
}