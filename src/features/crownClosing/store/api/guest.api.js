import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth} from '../../utils/firebase'
import fetchCurrentUserDataFromDB from '../../utils/firebase/user/fetchCurrentUserDataFromDB'
import createGuestDB from '../../utils/firebase/guest/createGuestDB'

const guestApi = createApi({
  reducerPath: 'guest',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    /////////////////////////////////////////////////////////////////////////
    fetchGuest: builder.query({
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
    createGuest: builder.mutation({
      async queryFn(product) {
        await createGuestDB()
        return {}
      }
    })
    /////////////////////////////////////////////////////////////////////////
    
  })
})

export const {
               useFetchGuestQuery,
               useAddProductToGuestMutation,
               useCreateGuestMutation
             } = guestApi

export default guestApi