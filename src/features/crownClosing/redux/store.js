import {configureStore} from '@reduxjs/toolkit'
import cartReducer, {addProductToCart, deleteProductFromCart, downQuantity, setTotalOverAllPrice, upQuantity} from './slices/cart-slice'
import userReducer from './slices/user-slice'
import directoriesApi from './api/directories.api'
import {setupListeners} from '@reduxjs/toolkit/query'
import categoriesApi from './api/categories.api'
import userApi from './api/user.api'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [directoriesApi.reducerPath]: directoriesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(directoriesApi.middleware)
      .concat(userApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store
export {
  addProductToCart,
  upQuantity,
  downQuantity,
  deleteProductFromCart,
  setTotalOverAllPrice
}
