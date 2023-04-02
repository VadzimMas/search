import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {fetchCurrentUserDataFromDB} from '../../utils/firebase/fetchCurrentUserDataFromDB'
import removeUserProductFromDB from '../../utils/firebase/removeUserProductFromDB'

const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    ///////////////////////////////////////////////////////////////
    fetchCart: builder.query({
      async queryFn() {
        const {products} = await fetchCurrentUserDataFromDB()
        if (products) {
          return {data: products}
        } else {
          console.log('cartApi : user does not have any products')
          return {data: null}
        }
      }
    }),
    ///////////////////////////////////////////////////////////////
    removeCartItem: builder.mutation({
      async queryFn(product) {
        await removeUserProductFromDB(product)
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