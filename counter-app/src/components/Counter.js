import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice"; //Dışa aktarılan actionsları içeri almak
function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); //Dispatch ile actionsları method ile çağırmak için
  console.log(countValue);
  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />

      <input type="number" onChange={(e) => setAmount((e.target.value))} />
      <br />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment By Amount
      </button>
    </div>
  );
}

export default Counter;
