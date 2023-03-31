import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth, getCurrentUser, writeUserData} from '../../utils/firebase/firebase'

const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      async queryFn() {
        const user = auth.currentUser
        if (user) {
          // console.log('User exist')
          const displayName = user.displayName
          const photoURL = user.photoURL
          return {data: {displayName, photoURL}}
        } else {
          // console.log('User does not exist')
          return {data: null}
        }
      }
    }),
    addProductToUser: builder.mutation({
      async queryFn(product) {
        const user = await getCurrentUser()
        if (user) {
          // console.log(product)
          writeUserData(user, product)
        } else {
        
        }
      }
    })
  })
})

export const {useFetchUserQuery, useAddProductToUserMutation} = userApi

export default userApi