import { createSlice } from '@reduxjs/toolkit';

const MyBusketSlice = createSlice({
  name: 'MyBusket',
  initialState: { myBuskets: [] },
  reducers: {
    addMyBuskets: (state, action) => {
      const idx = state.myBuskets.findIndex(
        (i) => i.title === action.payload.title
      );
      if (idx === -1) {
        state.myBuskets.unshift({ ...action.payload, amount: 1 });
      } else {
        state.myBuskets[idx].amount += 1;
      }
    },
    removeMyBuskets: (state, action) => {
      const idx = state.myBuskets.findIndex(
        (i) => i.title === action.payload.title
      );
      if (state.myBuskets[idx].amount === 1) {
        state.myBuskets.splice(idx, 1);
      } else {
        state.myBuskets[idx].amount -= 1;
      }
    },
  },
});

export default MyBusketSlice.reducer;
export const { addMyBuskets, removeMyBuskets } = MyBusketSlice.actions;
