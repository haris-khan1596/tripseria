import React, { useState } from 'react';
import './CSS/BudgetTracker.css';

const BudgetTracker = () => {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      name: expense,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setExpense('');
    setAmount(0);
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const remainingBudget = budget - totalExpenses;

  return (
    <div className="budget-tracker-container">
      <h2>Budget Tracker</h2>
      <form className="budget-tracker-form" onSubmit={handleSubmit}>
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <br />
        <label htmlFor="expense">Expense:</label>
        <input
          type="text"
          id="expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <br />
        <button type="submit">Add Expense</button>
      </form>
      <div className="budget-tracker-expenses">
      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span >{expense.name}</span>
            <span >${expense.amount}</span>
            <button className="delete-button" onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <div className="budget-tracker-totals">
        <h3>Total Expenses: <span className="total-expenses">${totalExpenses}</span></h3>
        <h3>Remaining Budget: <span className="remaining-budget">${remainingBudget}</span></h3>
      </div>
    </div>
  );
};

export default BudgetTracker;
