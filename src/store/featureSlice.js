import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const fetchFeatures = createAsyncThunk(
  'features/fetchFeatures',
  async () => {
    const response = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/features`);
    console.log(response.data);
    return response.data
  }
);

export const createFeatures = createAsyncThunk(
  'features/createFeature',
  async (feature) => {
    const response = await axios.post(
      `${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/feature/create`,
      feature
    );
    console.log(response.data);
    return response.data;
  }
);

export const deleteFeatures = createAsyncThunk(
  'features/deleteFeatures',
  async (featureId) => {
    const response = await axios.post(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/feature/delete/${featureId}`);
    console.log(response.data);
    return response.data;
  }
)


const featureSlice = createSlice({
  name: "Features",
  initialState: {
    data: [],
    loading: false
  },
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    resetTestimonialsList: (state, action) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {

    //for fetching
    builder
      .addCase(fetchFeatures.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeatures.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchFeatures.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      })


    //for creating
    builder
      .addCase(createFeatures.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFeatures.fulfilled, (state, action) => {
        state.data.push(action.payload.feature);
        state.loading = false
      })
      .addCase(createFeatures.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });


    //for deleting
    builder
      .addCase(deleteFeatures.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFeatures.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item._id !== action.payload.featureId
        );
        state.loading = false;
      })
      .addCase(deleteFeatures.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      })
  }
});


export const featureActions = featureSlice.actions;

export default featureSlice;