'use client';
import React, { useState } from 'react';
import type { Expense } from '../page';
type Props = {
  addExpense: (expenseData: Expense) => void;
};

const ExpenseInput = ({ addExpense }: Props) => {
  const [inputDate, setInputDate] = useState<string>(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [cost, setCost] = useState(0);

  return (
    <div id="expenseInput" className="flex items-center justify-center">
      <form
        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          if (cost <= 0) {
            alert("cost couldn't be zero");
          } else {
            const expenseData: Expense = {
              id: crypto.randomUUID(),
              date: new Date(inputDate),
              cost,
            };
            addExpense(expenseData);
            setCost(0);
            setInputDate(new Date().toISOString().split('T')[0]);
          }
        }}
      >
        <label htmlFor="cost">Cost</label>
        <input
          type="number"
          name="cost"
          id="cost"
          className="bg-slate-800 outline-none border border-lime-100 rounded"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const numericValue = parseInt(e.target.value);
            setCost(numericValue);
          }}
          value={String(cost)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          className="bg-slate-800 outline-none border border-lime-100 rounded"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputDate(e.target.value);
          }}
          value={inputDate}
        />

        <button className="btn bg-lime-400 hover:bg-lime-800">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseInput;
