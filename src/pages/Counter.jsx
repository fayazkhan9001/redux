import React from "react";

function Counter() {
  return (
    <div className="text-center text-3xl font-bold mt-10">
      <h1>Counter App</h1>
      <div className="w-2/6 mx-auto p-10">
        <button className="text-lg bg-indigo-600 text-white px-4 py2 border-2">
          Increment
        </button>
        <span className="mx-4 text-2xl font-bold">0</span>
        <button className="text-lg bg-indigo-600 text-white px-4 py2 border-2">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
