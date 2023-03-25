import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getCollection} from '../utils/firebase/firebase'

export const getDirectories = createAsyncThunk('directories/fetch',
  async () => {
    return await getCollection('directories')
  }
)

const directoriesSlice = createSlice({
  name: 'directories',
  initialState: {
    directoriesData: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDirectories.fulfilled, (state, action) => {
      state.directoriesData = action.payload
    })
  }
})
export const {} = directoriesSlice.actions

export default directoriesSlice.reducer