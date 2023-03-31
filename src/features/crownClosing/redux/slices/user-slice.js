import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    avatar: '',
    isUserExist: false
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.isUserExist = true
    }
  }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer

