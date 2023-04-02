import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import removeProductFromUserCartDB from '../../utils/firebase/userCart/removeProductFromUserCartDB'
import fetchCurrentUserDataFromDB from '../../utils/firebase/user/fetchCurrentUserDataFromDB'
import {auth} from '../../utils/firebase'

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
    })
    ///////////////////////////////////////////////////////////////
  })
})

export const {
               useFetchCartQuery,
               useRemoveCartItemMutation
             } = cartApi

export default cartApi