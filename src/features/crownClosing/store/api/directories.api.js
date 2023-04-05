import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import getCollection from '../../utils/firebase/fetchAppData/getCollection'

const directoriesApi = createApi({
  reducerPath: 'directoriesApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    ////////////////////////////////////////////////////////////////////////
    fetchDirectories: builder.query({
      async queryFn() {
        const directories = await getCollection('directories')
        return {data: directories}
      }
    })
    ////////////////////////////////////////////////////////////////////////
  })
})

export const {useFetchDirectoriesQuery} = directoriesApi

export default directoriesApi