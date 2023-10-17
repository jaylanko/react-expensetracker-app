import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 293.34,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 193.34,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e3",
    title: "Health",
    amount: 5693.34,
    date: new Date(2019, 5, 18),
  },
  {
    id: "e4",
    title: "Fitness",
    amount: 233.34,
    date: new Date(2020, 3, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
