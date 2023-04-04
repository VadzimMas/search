import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth} from '../../utils/firebase'
import fetchCurrentUserDataFromDB from '../../utils/firebase/user/fetchCurrentUserDataFromDB'
import addProductToUserCardDB from '../../utils/firebase/userCart/addProductToUserCardDB'

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
        await addProductToUserCardDB(product)
        return {}
      }
    })
    /////////////////////////////////////////////////////////////////////////
    
  })
})

export const {useFetchUserQuery, useAddProductToUserMutation} = userApi

export default userApi