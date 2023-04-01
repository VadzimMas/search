import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth} from '../../utils/firebase/firebase'
import {fetchCurrentUserDataFromDB} from '../../utils/firebase/fetchCurrentUserDataFromDB'

const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCart: builder.query({
      async queryFn() {
        const user = auth.currentUser
        if (user) {
          const {products} = await fetchCurrentUserDataFromDB(user)
          if (products) {
            return {data: products}
          } else {
            console.log('cartApi : user does not have any products')
            return {}
          }
        } else {
          console.log('cartApi : user not logged in')
          return {}
        }
      }
    })
  })
})

export const {useFetchCartQuery} = cartApi

export default cartApi