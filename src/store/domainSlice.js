import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllDomains = createAsyncThunk(
  'domains/fetchAllDomains',
  async () => {
    const res = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/alldomains/details`);
    console.log(res.data);
    return res.data;
  }
);

export const getDomainsCount = createAsyncThunk(
  'domains/getDomainsCount',
  async () => {
    const res = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/countdomains`);
    console.log(res.data);
    return res.data.count;
  }
);

export const getSubscribersCount = createAsyncThunk(
  'domains/getSubscribersCount',
  async () => {
    const res = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/totalsubscribers/count`);
    console.log(res.data);
    return res.data.count;
  }
);

export const getCampaignsCount = createAsyncThunk(
  'domains/getCampaignsCount',
  async () => {
    const res = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/countcampaigns`);
    console.log(res.data);
    return res.data.count;
  }
);

export const getNotificationsCount = createAsyncThunk(
  'domains/getNotificationsCount',
  async () => {
    const res = await axios.get(`${window.location.hostname === 'localhost' ? import.meta.env.VITE_BASEURL_DEV : import.meta.env.VITE_BASEURL}/api/v1/countnotifications`);
    console.log(res.data);
    return res.data.count;
  }
);


const domainSlice = createSlice({
  name: "Domains",
  initialState: {
    data: [],
    loading: false,
    domainCount: 0,
    subscriberCount: 0,
    campaignCount: 0,
    notificationCount: 0
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

    builder
      .addCase(getDomainsCount.fulfilled, (state, action) => {
        state.domainCount = action.payload;
      })
      .addCase(getDomainsCount.rejected, (state, action) => {
        console.log(action.error.message);
      });

    builder
      .addCase(getSubscribersCount.fulfilled, (state, action) => {
        state.subscriberCount = action.payload;
      })
      .addCase(getSubscribersCount.rejected, (state, action) => {
        console.log(action.error.message);
      });

    builder
      .addCase(getCampaignsCount.fulfilled, (state, action) => {
        state.campaignCount = action.payload;
      })
      .addCase(getCampaignsCount.rejected, (state, action) => {
        console.log(action.error.message);
      });

    builder
      .addCase(getNotificationsCount.fulfilled, (state, action) => {
        state.notificationCount = action.payload;
      })
      .addCase(getNotificationsCount.rejected, (state, action) => {
        console.log(action.error.message);
      });
  }
});


export const domainActions = domainSlice.actions;

export default domainSlice;