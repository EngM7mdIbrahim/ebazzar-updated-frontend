import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN_KEY } from '../utils/constants'


const initialState = {
  accesToken:localStorage.getItem(ACCESS_TOKEN_KEY),
  refreshToken: localStorage.getItem(ACCESS_TOKEN_KEY),

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  // extraReducers: builder=>{
  //   return builder.addCase()
  // }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer