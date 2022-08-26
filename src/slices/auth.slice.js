import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInReq } from '../api/auth'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../utils/constants'
import { isLoadingAction, isRejectedAction } from '../utils/helper'


const initialState = {
  isLoading: false,
  errorMessage: "",
  accesToken:localStorage.getItem(ACCESS_TOKEN_KEY),
  refreshToken: localStorage.getItem(ACCESS_TOKEN_KEY),

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state)=>{
      state.isLoading = false;
      state.errorMessage = "";
    }
  },
  extraReducers: builder=>{
    return builder
    // .addCase(signIn.fulfilled, (state, {payload})=>{
    //   state.accesToken = payload.accesToken;
    //   localStorage.setItem(REFRESH_TOKEN_KEY, state.accesToken);
    //   state.refreshToken = payload.refreshToken;
    //   localStorage.setItem(REFRESH_TOKEN_KEY, state.refreshToken);
    // })
    .addMatcher(isLoadingAction,(state)=>{
        state.isLoading = true;
    }).addMatcher(isRejectedAction, (state, action)=>{
        state.errorMessage = action.error;
    })
  }
})

export const signIn = createAsyncThunk('auth/signin', async (payload,api)=>{
  let response = await signInReq(payload);
  return {};
})

export default authSlice.reducer