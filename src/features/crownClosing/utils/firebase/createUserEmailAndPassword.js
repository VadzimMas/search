import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'

export const createUserEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    switch (error.code) {
      case ('auth/email-already-in-use'): {
        alert(`you already have an account, sign in instead...`)
        break
      }
      default: {
        alert(`creating user failed... ${error}`)
      }
    }
  }
}