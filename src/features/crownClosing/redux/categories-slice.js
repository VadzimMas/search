import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getCollection} from '../utils/firebase/firebase'


export const getCategories = createAsyncThunk('categories/fetch',
  async () => {
    return await getCollection('categories')
  })

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesData: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesData = action.payload
    })
  }
})

export default categoriesSlice.reducer




