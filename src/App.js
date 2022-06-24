import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "Transportation", amount: 60, date: new Date(2022, 5, 17) },
  { id: 2, title: "T-Glass", amount: 100, date: new Date(2022, 5, 17) },
  { id: 3, title: "Snacks", amount: 110, date: new Date(2022, 5, 7) },
  { id: 4, title: "T-Glass", amount: 150, date: new Date(2022, 5, 17) },
  { id: 5, title: "Momo", amount: 150, date: new Date(2022, 5, 17) },
  { id: 6, title: "HairCut", amount: 200, date: new Date(2022, 5, 17) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
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
