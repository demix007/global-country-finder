import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './reducer';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;
