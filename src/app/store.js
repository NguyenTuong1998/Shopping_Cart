import couterReducer from "../feature/Counter/counterSlice";
import userReducer from "../feature/Auth/useSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  count: couterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
