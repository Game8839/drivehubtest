import { configureStore } from '@reduxjs/toolkit';
import CarReducer from './CarSlice';
import MyBusketReducer from './MyBusketSlice';
import DiscountReducer from './DiscountSlice';

export const store = configureStore({
  reducer: {
    cars: CarReducer,
    myBusket: MyBusketReducer,
    discount: DiscountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
