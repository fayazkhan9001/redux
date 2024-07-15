import React from "react";
import { increment, decrement } from "../reduxStore/counterReducer";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((a) => a);

  const incrementAmont = () => {
    dispatch(increment());
  };

  const decrementAmount = () => {
    dispatch(decrement());
  };

  return (
    <div className="text-center text-3xl font-bold mt-10">
      <h1>Counter App</h1>
      <div className="w-2/6 mx-auto p-10">
        <button
          onClick={incrementAmont}
          className="text-lg bg-indigo-600 text-white px-4 py2 border-2"
        >
          Increment
        </button>
        <span className="mx-4 text-2xl font-bold">{counterReducer.value}</span>
        <button
          onClick={decrementAmount}
          className="text-lg bg-indigo-600 text-white px-4 py2 border-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
