import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllDomains = createAsyncThunk(
  'domains/fetchAllDomains',
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASEURL}/api/v1/alldomains`);
    console.log(res.data);
    return res.data;
  }
);


const domainSlice = createSlice({
  name: "Domains",
  initialState: {
    data: [],
    loading: false
  },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    resetDomainsList: (state, action) => {
      state.data = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDomains.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllDomains.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllDomains.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });
  }
});


export const domainActions = domainSlice.actions;

export default domainSlice;