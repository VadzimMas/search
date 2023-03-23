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
      if (action.payload) {
        const {name, avatar} = action.payload
        state.name = name
        state.avatar = avatar
        state.isUserExist = true
      } else {
        state.name = ''
        state.avatar = ''
        state.isUserExist = false
      }
    }
  }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer

