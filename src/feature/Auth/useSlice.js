import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/useApi";
import storageKey from "constant/storage-key";

// First, create the thunk
export const register = createAsyncThunk("users/register", async (payload) => {
  // call api to register
  const data = await userApi.register(payload);

  // save data local
  localStorage.setItem(storageKey.TOKEN, data.jwt);
  localStorage.setItem(storageKey.USER, JSON.stringify(data.user));
  return data.user;
});

export const login = createAsyncThunk("users/login", async (payload) => {
  // call api to register
  const data = await userApi.login(payload);

  // save data local
  localStorage.setItem(storageKey.TOKEN, data.jwt);
  localStorage.setItem(storageKey.USER, JSON.stringify(data.user));
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(storageKey.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(storageKey.USER);
      localStorage.removeItem(storageKey.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
