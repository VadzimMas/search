import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    totalOverAllPrice: 0
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload
      //if product already in cart
      const isProduct = state.cartProducts.find((el) => el.id === product.id)
      
      if (isProduct) {
        const temp = state.cartProducts.map((el) => {
          return el.id === product.id ? {...el, quantity: el.quantity += 1} : el
        })
        state.cartProducts = [...temp]
      } else {
        state.cartProducts = [...state.cartProducts, {...product, quantity: 1}]
      }
    },
    upQuantity: (state, action) => {
      const id = action.payload
      
      const temp = state.cartProducts.map((el) => {
        return el.id === id ? {...el, quantity: el.quantity += 1} : el
      })
      state.cartProducts = [...temp]
    },
    downQuantity: (state, action) => {
      const id = action.payload
      
      const temp = state.cartProducts.map((el) => {
        if (el.id === id && el.quantity > 0) {
          return {...el, quantity: el.quantity -= 1}
        } else {
          return el
        }
      })
      
      state.cartProducts = [...temp]
    },
    deleteProductFromCart: (state, action) => {
      const id = action.payload
      state.cartProducts = state.cartProducts.filter(el => el.id !== id)
    },
    setTotalOverAllPrice: (state) => {
      let temp = 0
      
      for (const product of state.cartProducts) {
        temp += product.price * product.quantity
      }
      
      state.totalOverAllPrice = temp
    },
    setCartProducts: (state, action) => {
      console.log(action.payload)
      state.cartProducts = [...action.payload]
    }
  }
})


export const {
               addProductToCart,
               upQuantity,
               downQuantity,
               deleteProductFromCart,
               setTotalOverAllPrice,
               setCartProducts
             } = cartSlice.actions
export default cartSlice.reducer