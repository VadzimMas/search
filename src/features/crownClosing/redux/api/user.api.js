import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth} from '../../utils/firebase/firebase'
import {writeUserProductInDB} from '../../utils/firebase/writeUserProductInDB'
import {fetchCurrentUserDataFromDB} from '../../utils/firebase/fetchCurrentUserDataFromDB'

const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      async queryFn() {
        const user = auth.currentUser
        const userData = await fetchCurrentUserDataFromDB(user)
        if (userData) {
          console.log('User exist')
          const displayName = userData.displayName
          const photoURL = userData.photoURL
          return {data: {displayName, photoURL}}
        } else {
          console.log('User does not exist')
          return {data: null}
        }
      }
    }),
    addProductToUser: builder.mutation({
      async queryFn(product) {
        const user = auth.currentUser
        if (user) {
          await writeUserProductInDB(user, product)
        } else {
        }
        return {}
      }
    })
  })
})

export const {useFetchUserQuery, useAddProductToUserMutation} = userApi

export default userApi