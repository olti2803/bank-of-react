import React, { useState } from "react";

function Debits({ debits, addDebit }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDebit(description, parseFloat(amount));
    setDescription("");
    setAmount("");
  };

  return (
    <div className="debits-container">
      <h1>Debits</h1>
      <ul className="debits-list">
        {debits.map((debit, index) => (
          <li key={index} className="debit-item">
            <span className="debit-description">{debit.description}</span>
            <span className="debit-amount">-${debit.amount.toFixed(2)}</span>
            <span className="debit-date">
              {new Date(debit.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="debit-form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  );
}

export default Debits;
