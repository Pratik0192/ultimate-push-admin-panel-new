import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDetails) => {
    let payload = {};
    await axios.post(
      `${import.meta.env.VITE_BASEURL}/api/v1/register`, 
      userDetails
    ).then(res => {
      payload.status = 200;
      payload.message = res.data.message;
    }).catch(err => {
      payload.status = err.response.status
      payload.message = err.response.data.message;
    });
    return payload;
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDetails) => {
    let payload = {};
    await axios.post(
      `${import.meta.env.VITE_BASEURL}/api/v1/login`, 
      userDetails
    ).then(res => {
      payload.status = 200;
      payload.message = res.data.message;
      payload.token = res.data.token;
    }).catch(err => {
      payload.status = err.response.status;
      payload.message = err.response.data.message;
    });
    return payload;
  }
);


export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (token) => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASEURL}/api/v1/userdetails`,
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      }
    );
    return res.data;
  }
);



const userSlice = createSlice({
  name: "User",
  initialState: {
    isUserLoggedIn: false, 
    userData: null, 
    token: null,
    loading: false,
    statusCode: 0,
    authMessage: null
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = true;
    },
    resetStatusCode: (state, action) => {
      state.statusCode = 0;
    },
    resetAuthMessage: (state, action) => {
      state.authMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.statusCode = action.payload.status;
        state.authMessage = action.payload.message;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });

    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusCode = action.payload.status;
        state.authMessage = action.payload.message;
        if(action.payload.status === 200){
          state.token = action.payload.token;
          localStorage.setItem("token", action.payload.token);
          state.isUserLoggedIn = true;
        }
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });

    builder
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        console.log("UserDetails: ", action.payload);
        state.isUserLoggedIn = true;
        state.userData = action.payload.user;
        state.token = localStorage.getItem("token");
        state.loading = false;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        console.log("Failed to fetch User Data");
        state.loading = false;
        console.log(action.error.message);
      })
  }
});


export const userActions = userSlice.actions;

export default userSlice;