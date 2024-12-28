import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPricingOptions = createAsyncThunk(
  "pricing/fetchPricingOptions",
  async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASEURL}/api/v1/pricing`);
    console.log(response.data);
    return response.data;
  }
);

export const createPricingOption = createAsyncThunk(
  "pricing/createPricingOption",
  async (pricingOption) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASEURL}/api/v1/pricing/create`,
      pricingOption
    );
    console.log(response.data);
    return response.data;
  }
);

export const deletePricingOption = createAsyncThunk(
  "pricing/deletePricingOption",
  async (pricingId) => {
    const response = await axios.post(`${import.meta.env.VITE_BASEURL}/api/v1/feature/${pricingId}`);
    console.log(response.data);
    return response.data;
  }
);


const pricingSlice = createSlice({
  name: "Pricing",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    resetPricingOptionsList: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {


    //fetching
    builder
      .addCase(fetchPricingOptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPricingOptions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPricingOptions.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });


    // creating
    builder
      .addCase(createPricingOption.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPricingOption.fulfilled, (state, action) => {
        state.data.push(action.payload.pricingOption);
        state.loading = false;
      })
      .addCase(createPricingOption.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });

    //deleting
    builder
      .addCase(deletePricingOption.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePricingOption.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item._id !== action.payload.pricingId
        );
        state.loading = false;
      })
      .addCase(deletePricingOption.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      })
  },
});

export const pricingActions = pricingSlice.actions;

export default pricingSlice;
