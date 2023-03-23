import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getCollectionAndDocument} from '../utils/firebase/firebase'


export const getCategories = createAsyncThunk('categories/fetch',
  async () => {
    return await getCollectionAndDocument('categories')
  })


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesMap: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesMap = action.payload
      state.isLoading = false
    })
  }
})

export default categoriesSlice.reducer




