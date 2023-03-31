import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase/firebase'

const directoriesApi = createApi({
  reducerPath: 'directories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchDirectories: builder.query({
      async queryFn() {
        try {
          const collectionRef = collection(db, 'directories')
          const collectionSnapshot = await getDocs(collectionRef)
          const collectionData = collectionSnapshot.docs.map(doc => doc.data())
          return {data: collectionData}
        } catch (error) {
          console.error(error.message)
          return {error: error.message}
        }
      }
    })
  })
})

export const {useFetchDirectoriesQuery} = directoriesApi

export default directoriesApi