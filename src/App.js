import Expenses from "./components/Expenses/Expenses";

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
  return (
    <div>
      <h2>Let's get started right now!</h2>
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
