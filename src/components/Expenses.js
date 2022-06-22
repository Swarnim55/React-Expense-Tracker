import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
      <ExpenseItem
        title={props.expenses[4].title}
        amount={props.expenses[4].amount}
        date={props.expenses[4].date}
      />
      <ExpenseItem
        title={props.expenses[5].title}
        amount={props.expenses[5].amount}
        date={props.expenses[5].date}
      />
    </Card>
  );
}

export default Expenses;