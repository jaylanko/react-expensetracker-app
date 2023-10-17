import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const expense = props.expense;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        ></ExpenseItem>

        <ExpenseItem
          title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
