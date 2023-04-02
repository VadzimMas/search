import {signInWithPopup} from 'firebase/auth'
import {auth, googleProvider} from '../index'

const signInWithGooglePopup = async () => {
  console.log('signInWithGooglePopup')
  await signInWithPopup(auth, googleProvider)
}

export default signInWithGooglePopup