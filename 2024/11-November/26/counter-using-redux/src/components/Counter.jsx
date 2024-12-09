import React, { useState } from "react";
import { plusCount, minusCount } from "../store/actions/counterActions.js";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(plusCount(1));
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(minusCount(1));
        }}
      >
        -
      </button>
    </div>
  );
}
