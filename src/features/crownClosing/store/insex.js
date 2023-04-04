import {configureStore} from '@reduxjs/toolkit'
import directoriesApi from './api/directories.api'
import {setupListeners} from '@reduxjs/toolkit/query'
import categoriesApi from './api/categories.api'
import userApi from './api/user.api'
import cartApi from './api/cart.api'
import guestApi from './api/guest.api'


const store = configureStore({
  reducer: {
    [directoriesApi.reducerPath]: directoriesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [guestApi.reducerPath]: guestApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(directoriesApi.middleware)
      .concat(userApi.middleware)
      .concat(cartApi.middleware)
      .concat(guestApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store
