'use client';
import React from 'react';
import { Expense } from '../page';
import { useState } from 'react';
type ExpenseLiProps = {
  expense: Expense;
  deleteExpense: (expense: Expense) => void;
  editExpense: (updatedExpense: Expense) => void;
};
const ExpenseLi = ({ expense, deleteExpense, editExpense }: ExpenseLiProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedCost, setEditedCost] = useState<number>(expense.cost);
  const [editedDate, setEditedDate] = useState<string>(
    new Date(expense.date).toISOString().split('T')[0]
  );
  return (
    <li className="min-h-28 w-full sm:w-4/5 flex justify-center items-center ">
      {!isEditing ? (
        <div className="flex justify-center items-center gap-2 w-full border border-lime-100 ">
          <div className="flex flex-col items-center justify-center gap-2 grow-2">
            <div>cost : {expense.cost}</div>
            <div>{new Date(expense.date).toISOString().split('T')[0]}</div>
            <div>id : {expense.id}</div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center grow-1">
            <button
              className="btn bg-yellow-700 hover:bg-yellow-900"
              onClick={() => {
                setIsEditing(true);
                console.log('edit button pressed');
              }}
            >
              edit
            </button>
            <button
              className="btn bg-red-600 hover:bg-red-800"
              onClick={() => {
                if (confirm('do you want to delete this cost'))
                  deleteExpense(expense);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2 w-full border border-lime-100 ">
          <div className="flex flex-col items-center justify-center gap-2 grow-2">
            <label>
              Cost:
              <input
                type="number"
                value={editedCost}
                onChange={(e) => setEditedCost(Number(e.target.value))}
                className="input border rounded-md p-1"
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
                className="input border rounded-md p-1"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center grow-1">
            <button
              className="btn bg-lime-600 hover:bg-lime-900"
              onClick={() => {
                const updatedExpense: Expense = {
                  ...expense,
                  cost: editedCost,
                  date: new Date(editedDate),
                };
                if (confirm('do you want to edit this cost item ? ')) {
                  editExpense(updatedExpense);
                  setIsEditing(false);
                }
              }}
            >
              Save
            </button>
            <button
              className="btn bg-red-600 hover:bg-red-800"
              onClick={() => {
                setIsEditing(false);
                console.log('cancel button pressed');
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ExpenseLi;
