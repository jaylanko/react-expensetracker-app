import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 293.34,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 193.34,
      date: new Date(2023, 4, 28),
    },
    {
      id: "e3",
      title: "Health",
      amount: 5693.34,
      date: new Date(2023, 5, 18),
    },
    {
      id: "e4",
      title: "Fitness",
      amount: 233.34,
      date: new Date(2023, 3, 8),
    },
  ];

  const addExpenseHandler = expense => {

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense} />

    </div>
  );
}

export default App;
