import {createSlice} from '@reduxjs/toolkit'
import userApi from '../api/userApi'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    searchTerm: '',
    likes: 0,
    dislikes: 0,
    sortOrder: true,
    users: [],
  },
  reducers: {
    changeFirstName: (state, action) => {
      state.firstName = action.payload
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    clearSearchTerm: (state, action) => {
      state.searchTerm = ''
    },
    toggleSort: (state, action) => {
      state.sortOrder = !state.sortOrder
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.addUser.matchFulfilled,
      (state, action) => {
        state.firstName = ''
        state.lastName = ''
        state.email = ''
      })
  },
})


export const {
  addUser,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeSearchTerm,
  clearSearchTerm,
  toggleSort,
} = usersSlice.actions
export default usersSlice.reducer