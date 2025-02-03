'use client';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '@/customhooks';
import ExpenseInput from './components/ExpenseInput';
import ExpenseLi from './components/ExpenseLi';
export type Expense = {
  id: string;
  cost: number;
  date: Date;
};

const data: Expense[] = [];
const ExpenseTracker = () => {
  // const [theme, setTheme, clearTheme] = useLocalStorage<string>(
  //   'theme',
  //   'light'
  // );

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', data);

  const addExpense = (expenseData: Expense) => {
    const newExpenses = [...expenses, expenseData];
    setExpenses(newExpenses);
    console.log(expenseData, 'added');
  };

  const handleDeleteExpense = (expense: Expense) => {
    const newExpenses = expenses.filter((item) => item.id !== expense.id);
    setExpenses(newExpenses);
  };

  const handleEditExpense = (updatedExpense: Expense) => {
    const newExpenses = expenses.map((exp) => {
      if (exp.id === updatedExpense.id) {
        return updatedExpense;
      }
      return exp;
    });
    setExpenses(newExpenses);
  };

  const [filters, setFilters] = useState({
    minCost: '',
    maxCost: '',
    startDate: '2025-01-01',
    endDate: new Date().toISOString().split('T')[0],
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
    });
  };

  const clearFilters = () => {
    setFilters({
      minCost: '',
      maxCost: '',
      startDate: '2025-01-01',
      endDate: new Date().toISOString().split('T')[0],
    });
  };

  const filteredData = expenses.filter((expense) => {
    const minCost =
      filters.minCost !== '' ? Number(filters.minCost) : Number.MIN_VALUE;
    const maxCost =
      filters.maxCost !== '' ? Number(filters.maxCost) : Number.MAX_VALUE;
    const startDate = filters.startDate
      ? new Date(filters.startDate)
      : new Date('2000-01-01');
    const endDate = filters.endDate ? new Date(filters.endDate) : new Date();

    return (
      expense.cost >= minCost &&
      expense.cost <= maxCost &&
      expense.date >= startDate &&
      expense.date <= endDate
    );
  });

  const totalCost = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );
  return (
    <>
      {isClient ? (
        <div>
          <div id="test" className="flex gap-2">
            {/* <button
              onClick={() => {
                setTheme((oldTheme) => {
                  return oldTheme === 'light' ? 'dark' : 'light';
                });
              }}
              className={`${
                theme === 'light'
                  ? 'bg-lime-400 hover:bg-lime-800'
                  : 'bg-teal-700 hover:bg-teal-900'
              } btn`}
            >
              {theme}
            </button>
            <button
              onClick={() => {
                clearTheme();
              }}
              className="btn bg-lime-400 hover:bg-lime-800"
            >
              clear
            </button> */}
          </div>
          <h1 className="text-center text-4xl font-semibold">
            total cost : {totalCost}
          </h1>
          <ExpenseInput addExpense={addExpense} />
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
            }}
            className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-4/5 mx-auto mb-6 gap-4 "
          >
            <label>
              Minimum Cost :
              <input
                type="number"
                className="w-full bg-slate-800 outline-none border border-lime-100 rounded"
                value={filters.minCost}
                onChange={handleFilterChange}
                name="minCost"
              />
            </label>
            <label>
              Maximum Cost :
              <input
                type="number"
                className="w-full bg-slate-800 outline-none border border-lime-100 rounded"
                value={filters.maxCost}
                onChange={handleFilterChange}
                name="maxCost"
              />
            </label>
            <label>
              Start Date :
              <input
                type="date"
                className="w-full bg-slate-800 outline-none border border-lime-100 rounded"
                value={filters.startDate}
                onChange={handleFilterChange}
                name="startDate"
              />
            </label>
            <label>
              End Date :
              <input
                type="date"
                className="w-full bg-slate-800 outline-none border border-lime-100 rounded"
                value={filters.endDate}
                onChange={handleFilterChange}
                name="endDate"
              />
            </label>
            <button
              className="btn bg-lime-500 hover:bg-lime-700"
              onClick={clearFilters}
            >
              {' '}
              Clear filters
            </button>
          </form>

          {filteredData.length > 0 ? (
            <ul
              id="todolist"
              className="flex flex-col justify-center items-center"
            >
              {filteredData.map((expense) => {
                return (
                  <ExpenseLi
                    key={expense.id}
                    expense={expense}
                    deleteExpense={handleDeleteExpense}
                    editExpense={handleEditExpense}
                  />
                );
              })}
            </ul>
          ) : (
            <h1>No expenses</h1>
          )}
        </div>
      ) : (
        <h1>prerendered</h1>
      )}
    </>
  );
};

export default ExpenseTracker;
