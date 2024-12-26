import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import domainSlice from "./domainSlice";
import testimonialSlice from "./testimonialSlice";


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    domains: domainSlice.reducer,
    testimonials: testimonialSlice.reducer
  }
});


export default store;