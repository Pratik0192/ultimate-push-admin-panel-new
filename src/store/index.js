import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import domainSlice from "./domainSlice";
import testimonialSlice from "./testimonialSlice";
import pricingSlice from "./pricingSlice";
import featureSlice from "./featureSlice";


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    domains: domainSlice.reducer,
    testimonials: testimonialSlice.reducer,
    pricing: pricingSlice.reducer,
    features: featureSlice.reducer,
  }
});


export default store;