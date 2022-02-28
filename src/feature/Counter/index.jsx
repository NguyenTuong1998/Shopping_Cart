import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

const CounterFeature = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  const handleIncreate = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };
  const handleDecreate = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={handleIncreate}>Increate</button>
        <button onClick={handleDecreate}>Decreate</button>
      </div>
    </div>
  );
};

export default CounterFeature;
