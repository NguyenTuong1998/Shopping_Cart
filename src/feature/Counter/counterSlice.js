const { createSlice } = require("@reduxjs/toolkit");

const counterSlicev = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state, actiom) {
      return state + 1;
    },
    decrease(state, actiom) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlicev;
export const { increase, decrease } = actions;
export default reducer;
