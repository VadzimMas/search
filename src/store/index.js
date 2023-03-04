import {configureStore} from '@reduxjs/toolkit'
import usersSlice, {
  addUser,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeSearchTerm,
  clearSearchTerm,
  toggleSort,
} from './slices/usersSlice'
import sidebarSlice, {
  isDarkTheme,
  setDarkTheme,
} from './slices/sidebarSlice'
import userApi from './api/userApi'
import {setupListeners} from '@reduxjs/toolkit/query'


const store = configureStore({
  reducer: {
    users: usersSlice,
    sidebar: sidebarSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})


setupListeners(store.dispatch)
export default store
export {
  //userSlice
  addUser,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeSearchTerm,
  clearSearchTerm,
  toggleSort,
  //sidebarSlice
  isDarkTheme,
  setDarkTheme,
}