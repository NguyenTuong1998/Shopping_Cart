const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCarts(state) {
      state.showMiniCart = false;
    },
  },
});

const { actions, reducer } = counterSlicev;
export const { showMiniCart, hideMiniCarts } = actions;
export default reducer;
