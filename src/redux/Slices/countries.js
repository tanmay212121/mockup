import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useSelector } from "react-redux";

export const fetchCountries = createAsyncThunk ('country/fetchCountries', async (thunkAPI) => {
    const payload = await axios({
        method: 'get',
        url: 'https://restcountries.com/v2/all?fields=name,region,flag'
    })

    console.log('payload', payload.data);
    return payload.data;
    
})

const initialState = {
    countries: [],
    ful: false
}

const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        showAll : (state, action) => {
                return state
        }
    },
   extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      // Add user to the state array
      state.countries = action.payload;
    })
  },
    
    
    // [fetchCountries.fulfilled]: (state, action) => {
    //     state.countries = action.payload
    // }
   

    
})

export const { showAll } = CountrySlice.actions
export default CountrySlice.reducer;

