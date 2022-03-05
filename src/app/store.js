import couterReducer from "../feature/Counter/counterSlice";
import userReducer from "../feature/Auth/useSlice";
import cartReducer from "../feature/Cart/CartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  count: couterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
