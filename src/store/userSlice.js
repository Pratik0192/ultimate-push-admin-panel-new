import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Async thunk for user login
export const loginUser = createAsyncThunk('/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASEURL}/api/v1/register`, userData);
    return response.data; // Return user data if login is successful
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message if login fails
  }
});

// Async thunk for user signup
export const signupUser = createAsyncThunk('/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASEURL}/signup`, userData);
    return response.data; // Return user data if signup is successful
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message if signup fails
  }
});

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // Stores the authenticated user data
    loading: false, // Tracks loading state for login/signup
    error: null, // Stores any errors that occur during login/signup
  },
  reducers: {
    logout: (state) => {
      state.user = null; // Clear the user data on logout
      localStorage.removeItem('user'); // Clear user data from local storage
    },
  },
  extraReducers: (builder) => {
    // Login Reducers
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload)); // Save user data to local storage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Signup Reducers
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload)); // Save user data to local storage
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the logout action
export const { logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
