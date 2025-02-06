import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementByAmount,
  increment,
  decrement,
  reset,
} from '../state/slices/counterSlice';

import type { RootState, AppDispatch } from '../state/store';

const Page = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [decrementAmount, setDecrementAmount] = useState<number>(0);
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-2xl font-semibold">
      <h1 className="text-4xl font-mono font-bold text-amber-700">
        Count : {count}
      </h1>
      <button
        className="btn bg-green-700 hover:bg-green-900"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="btn bg-green-700 hover:bg-green-900"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <button
        className="btn bg-green-700 hover:bg-green-900"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <input
        className="p-2 caret-amber-700 rounded border border-amber-700"
        type="text"
        placeholder="Enter decrement amount:number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value;
          const numericVal = Number(val);
          if (!isNaN(numericVal)) setDecrementAmount(numericVal);
          else if (isNaN(numericVal)) {
            setDecrementAmount(0);
          }
        }}
        value={decrementAmount}
      />
      <button
        className="btn bg-green-700 hover:bg-green-900"
        onClick={() => {
          dispatch(decrementByAmount(decrementAmount));
        }}
      >
        {decrementAmount}
      </button>
    </div>
  );
};

export default Page;
