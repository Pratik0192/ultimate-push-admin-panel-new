import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASEURL}/api/v1/testimonials`);
    console.log(res.data);
    return res.data;
  }
);

export const createTestimonial = createAsyncThunk(
  'testimonials/createTestimonial',
  async (testimonial) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASEURL}/api/v1/testimonial/create`,
      testimonial
    );
    console.log(res.data);
    return res.data;
  }
);


export const deleteTestimonial = createAsyncThunk(
  'testimonials/deleteTestimonial',
  async (testimonialId) => {
    const res = await axios.post(`${import.meta.env.VITE_BASEURL}/api/v1/testimonial/delete/${testimonialId}`);
    console.log(res.data);
    return res.data;
  }
);


const testimonialSlice = createSlice({
  name: "Testimonials",
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });
      
    builder
      .addCase(createTestimonial.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createTestimonial.fulfilled, (state, action) => {
        state.data.push(action.payload.testimonial);
        state.loading = false;
      })
      .addCase(createTestimonial.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });

    builder
      .addCase(deleteTestimonial.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTestimonial.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item._id !== action.payload.testimonialId
        );
        state.loading = false;
      })
      .addCase(deleteTestimonial.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });
  }
});


export const testimonialActions = testimonialSlice.actions;

export default testimonialSlice;