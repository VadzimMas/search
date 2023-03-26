import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {auth, getCurrentUser} from '../utils/firebase/firebase'

export const setCurrentUser = createAsyncThunk('user/set',
  async () => {
    console.log('setCurrentUser thunk')
    try {
      await getCurrentUser()
      const user = auth.currentUser
      const displayName = user.displayName
      const photoURL = user.photoURL
      return {displayName, photoURL}
    } catch {
      return null
    }
  })

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    avatar: '',
    isUserExist: false
  },
  extraReducers: (builder) => {
    builder.addCase(setCurrentUser.fulfilled, ((state, action) => {
      if (action.payload) {
        const {displayName, photoURL} = action.payload
        state.name = displayName
        state.avatar = photoURL
        state.isUserExist = true
      } else {
        state.name = ''
        state.avatar = ''
        state.isUserExist = false
      }
      console.log('current name : ', state.name)
    }))
  }
})

export const {} = userSlice.actions
export default userSlice.reducer

