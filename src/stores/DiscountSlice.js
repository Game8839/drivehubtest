import { createSlice } from '@reduxjs/toolkit';

import * as discountService from '../api/discountApi';

const DiscountSlice = createSlice({
  name: 'Discount',
  initialState: { discounts: [] },
  reducers: {
    setDiscounts: (state, action) => {
      state.discounts = action.payload;
    },
  },
});

export default DiscountSlice.reducer;
export const { setDiscounts } = DiscountSlice.actions;

export const fetchDiscountsdata = () => {
  return async (dispatch) => {
    try {
      const res = await discountService.getAllDiscounts();
      console.log(res.data.items);
      await dispatch(setDiscounts(res.data.items));
    } catch (err) {
      console.log(err);
    }
  };
};
