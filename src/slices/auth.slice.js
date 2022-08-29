import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInReq, signUpReq } from "../api/auth.api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../utils/constants";
import {
  isFulfilledAuthAction,
  isLoadingAction,
  isRejectedAction,
} from "../utils/helper";

const initialState = {
  isLoading: false,
  errorMessage: "",
  accesToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  refreshToken: localStorage.getItem(ACCESS_TOKEN_KEY),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.errorMessage = "";
    },
    signOut: (state) => {
      state.accesToken = null;
      state.refreshToken = null;
      localStorage.setItem(ACCESS_TOKEN_KEY, null);
      localStorage.setItem(REFRESH_TOKEN_KEY, null);
    },
  },
  extraReducers: (builder) => {
    return builder
      .addMatcher(isFulfilledAuthAction, (state, { payload }) => {
        state.isLoading = false;
        state.accesToken = payload.accesToken;
        localStorage.setItem(ACCESS_TOKEN_KEY, state.accesToken);
        state.refreshToken = payload.refreshToken;
        localStorage.setItem(REFRESH_TOKEN_KEY, state.refreshToken);
      })
      .addMatcher(isLoadingAction, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const signIn = createAsyncThunk(
  "auth/signin",
  async (payload, { rejectWithValue }) => {
    try {
      let response = await signInReq(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (payload, { rejectWithValue }) => {
    try {
      let response = await signUpReq(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const { signOut, resetState } = authSlice.actions;
export default authSlice.reducer;
