import { createSlice } from '@reduxjs/toolkit';

import * as carService from '../api/carApi';

const CarSlice = createSlice({
  name: 'car',
  initialState: { cars: [] },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export default CarSlice.reducer;
export const { setCars } = CarSlice.actions;

export const fetchCarsInventory = () => {
  return async (dispatch) => {
    try {
      const res = await carService.getAllCars();
      console.log(res.data.items);
      await dispatch(setCars(res.data.items));
    } catch (err) {
      console.log(err);
    }
  };
};
