import {createSlice} from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    setDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
})


export const {
  isDarkTheme,
  setDarkTheme,
} = sidebarSlice.actions

export default sidebarSlice.reducer