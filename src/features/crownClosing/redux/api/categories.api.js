import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase/firebase'

const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      async queryFn() {
        try {
          const collectionRef = collection(db, 'categories')
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

export const {useFetchCategoriesQuery} = categoriesApi

export default categoriesApi