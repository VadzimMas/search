import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import removeProductFromUserCartDB from '../../utils/firebase/userCart/removeProductFromUserCartDB'
import fetchCurrentUserDataFromDB from '../../utils/firebase/user/fetchCurrentUserDataFromDB'
import {auth} from '../../utils/firebase'
import increaseQuantityOfProductInUserCartDB from '../../utils/firebase/userCart/iccreaseQuantityOfProductInUserCartDB'
import decreaseQuantityOfProductInUserCartDB from '../../utils/firebase/userCart/decreaseQuantityOfProductInUserCartDB'

const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    ///////////////////////////////////////////////////////////////
    fetchCart: builder.query({
      async queryFn() {
        const user = auth.currentUser
        if (user) {
          const data = await fetchCurrentUserDataFromDB()
          if (data) {
            return {data: data.products}
          } else {
            console.log('cartApi : user does not have any products')
            return {data: null}
          }
        } else {
          console.log('User does not exist')
          return {data: null}
        }
      }
    }),
    ///////////////////////////////////////////////////////////////
    removeCartItem: builder.mutation({
      async queryFn(product) {
        await removeProductFromUserCartDB(product)
        return {data: null}
      }
    }),
    ///////////////////////////////////////////////////////////////
    increaseQuantityInCartItem: builder.mutation({
      async queryFn(id) {
        await increaseQuantityOfProductInUserCartDB(id)
        return {data: null}
      }
    }),
    ///////////////////////////////////////////////////////////////
    decreaseQuantityInCartItem: builder.mutation({
      async queryFn(id) {
        await decreaseQuantityOfProductInUserCartDB(id)
        return {data: null}
      }
    })
    ///////////////////////////////////////////////////////////////
  })
})

export const {
               useFetchCartQuery,
               useRemoveCartItemMutation,
               useIncreaseQuantityInCartItemMutation,
               useDecreaseQuantityInCartItemMutation
             } = cartApi

export default cartApi