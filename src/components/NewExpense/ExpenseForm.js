import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // passing one object instead of having three states
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredNumber: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput ((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const numberChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredNumber: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //all of these functions in one
//   const inputChangeHandler = (identifier, value) => {
//         if(identifier === 'title'){
//             setEnteredTitle(value);
//         } else if(identifier === 'date'){
//             setEnteredDate(value);
//         } else {
//             setEnteredNumber(valuie)
//         }
//   }
const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value= {enteredAmount}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
