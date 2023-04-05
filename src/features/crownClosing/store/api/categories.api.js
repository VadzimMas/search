import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import getCollection from '../../utils/firebase/fetchAppData/getCollection'

const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    ////////////////////////////////////////////////////////////////////////
    fetchCategories: builder.query({
      async queryFn() {
        const categories = await getCollection('categories')
        return {data: categories}
      }
    })
    ////////////////////////////////////////////////////////////////////////
  })
})

export const {useFetchCategoriesQuery} = categoriesApi
export default categoriesApi