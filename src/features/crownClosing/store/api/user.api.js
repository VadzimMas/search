import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth} from '../../utils/firebase'
import addProductToUserCardDB from '../../utils/firebase/userCart/addProductToUserCardDB'
import fetchCurrentUserDataFromDB from '../../utils/firebase/user/fetchCurrentUserDataFromDB'

const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    /////////////////////////////////////////////////////////////////////////
    fetchUser: builder.query({
      async queryFn() {
        const user = auth.currentUser
        if (user) {
          console.log('User exist => uid : ', user.uid)
          const userData = await fetchCurrentUserDataFromDB(user)
          if (userData) {
            const displayName = userData.displayName
            const photoURL = userData.photoURL
            return {data: {displayName, photoURL}}
          } else {
            console.log('User does not have any data????')
            return {data: null}
          }
        } else {
          console.log('User does not exist')
          return {data: null}
        }
      }
    }),
    /////////////////////////////////////////////////////////////////////////
    addProductToUser: builder.mutation({
      async queryFn(product) {
        const user = auth.currentUser
        if (user) {
          await addProductToUserCardDB(user, product)
        } else {
        }
        return {}
      }
    })
    /////////////////////////////////////////////////////////////////////////
    
  })
})

export const {useFetchUserQuery, useAddProductToUserMutation} = userApi

export default userApi