import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {getCategories} from '../../utils/firebase/getCategories'

const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      async queryFn() {
        const categories = await getCategories()
        return {data: categories}
      }
    })
  })
})

export const {useFetchCategoriesQuery} = categoriesApi

export default categoriesApi