import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getCollectionAndDocument} from '../utils/firebase/firebase'

export const getDirectories = createAsyncThunk('directories/fetch',
  async () => {
    return await getCollectionAndDocument('directories')
  }
)

const directoriesSlice = createSlice({
  name: 'directories',
  initialState: {
    directoriesMap: {},
    isLoading: false,
    error: null
  },
  reducers: {
    setIsDirectoriesMapLoading: (state, action) => {
      state.isCategoriesMapLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDirectories.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getDirectories.rejected, (state, action) => {
      state.error = action.error
      state.isLoading = false
    })
    builder.addCase(getDirectories.fulfilled, (state, action) => {
      state.directoriesMap = {...action.payload}
      state.isLoading = false
    })
  }
})
export const {
  setDirectoriesMap,
  setIsDirectoriesMapLoading
} = directoriesSlice.actions

export default directoriesSlice.reducer