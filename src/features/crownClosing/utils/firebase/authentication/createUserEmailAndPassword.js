import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../index'

const createUserEmailAndPassword = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('try create user with email and password')
      await createUserWithEmailAndPassword(auth, email, password)
      resolve()
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
  })
}

export default createUserEmailAndPassword