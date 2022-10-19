import {configureStore} from '@reduxjs/toolkit';
import countriesReducers from '../Slices/countries';

export const store = configureStore({
    reducer: {
        countries: countriesReducers
    },
  })