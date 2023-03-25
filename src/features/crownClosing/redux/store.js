import {configureStore} from '@reduxjs/toolkit'
import cartReducer, {addProductToCart, deleteProductFromCart, downQuantity, setTotalOverAllPrice, upQuantity} from './cart-slice'
import directoriesReducer from './directories-slice'
import userReducer from './user-slice'
import categoriesReducer from './categories-slice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    directories: directoriesReducer,
    categories: categoriesReducer
  }
})


export default store
export {
  addProductToCart,
  upQuantity,
  downQuantity,
  deleteProductFromCart,
  setTotalOverAllPrice
}